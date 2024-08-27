uniform vec3 uColorBg;
uniform vec2 resolution;
uniform float uLogoAnimation;
uniform vec3 uColorLogo;
uniform float uNoise;
uniform sampler2D tBg;
uniform sampler2D uDye;
uniform sampler2D uVel;
uniform sampler2D tLogo;
uniform sampler2D uUV;
uniform vec2 uNoise1Opts;
uniform vec2 uNoise2Opts;
uniform vec3 uNoise3Opts;
uniform vec4 uNoise4Opts;
uniform float uGlobalShape;
uniform float uGlobalOpen;
uniform float uNoiseMultiplier;
uniform float time;

// varying
varying vec2 vUv;

// functions
vec2 rotateUV(vec2 uv, float rotation, vec2 mid) {
    return vec2(
        cos(rotation) * (uv.x - mid.x) + sin(rotation) * (uv.y - mid.y) + mid.x,
        cos(rotation) * (uv.y - mid.y) - sin(rotation) * (uv.x - mid.x) + mid.y
    );
}

vec2 scaleUV(vec2 uv, float scale, vec2 mid) {
    uv -= mid;
    uv *= 1.0 / scale;
    uv += mid;
    return uv;
}

float cubicInOut(float t) {
    return t < 0.5
        ? 4.0 * t * t * t
        : 0.5 * pow(2.0 * t - 2.0, 3.0) + 1.0;
}

float quadraticInOut(float t) {
    float p = 2.0 * t * t;
    return t < 0.5 ? p : -p + (4.0 * t) - 1.0;
}

float quadraticOut(float t) {
    return -t * (t - 2.0);
}

float ft(float x, float a1, float a2, float b1, float b2) {
    return b1 + ((x - a1) * (b2 - b1)) / (a2 - a1);
}

float fc(float x, float a1, float a2, float b1, float b2) {
    return clamp(ft(x, a1, a2, b1, b2), min(b1, b2), max(b1, b2));
}

float stp(float a, float b, float t) {
    return clamp((t - a) / (b - a), 0.0, 1.0);
}

float fl(float a, float b, float c, float f, float e) {
    float p = mix(b - f, c, e);
    return stp(p + f, p, a);
}

vec3 hash(vec3 p3) {
    p3 = fract(p3 * vec3(.1031, .1030, .0973));
    p3 += dot(p3, p3.yxz+33.33);
    return fract((p3.xxy + p3.yxx)*p3.zyx) - 0.5;
}

vec2 hash22(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * vec3(.1031, .1030, .0973));
    p3 += dot(p3, p3.yzx+33.33);
    return fract((p3.xx+p3.yz)*p3.zy);
}

float noise(in vec3 p) {
    const float K1 = 0.333333333;
    const float K2 = 0.166666667;

    vec3 i = floor(p + (p.x + p.y + p.z) * K1);
    vec3 d0 = p - (i - (i.x + i.y + i.z) * K2);
    vec3 e = step(vec3(0.0), d0 - d0.yzx);
    vec3 i1 = e * (1.0 - e.zxy);
    vec3 i2 = 1.0 - e.zxy * (1.0 - e);
    vec3 d1 = d0 - (i1 - 1.0 * K2);
    vec3 d2 = d0 - (i2 - 2.0 * K2);
    vec3 d3 = d0 - (1.0 - 3.0 * K2);
    vec4 h = max(0.6 - vec4(dot(d0, d0), dot(d1, d1), dot(d2, d2), dot(d3, d3)), 0.0);
    vec4 n = h * h * h * h * vec4(dot(d0, hash(i)), dot(d1, hash(i + i1)), dot(d2, hash(i + i2)), dot(d3, hash(i + 1.0)));
    return dot(n, vec4(52.0));
}

float cellNoise(in vec2 uv, in float aspect) {
    uv -= 0.5;
    uv.x *= aspect;
    uv += 0.5;
    uv *= uNoise2Opts.x;

    vec2 i_st = floor(uv);
    vec2 f_st = fract(uv);

    float m_dist = 1.0;

    for (int y = -1; y <= 1; y++) {
        for (int x = -1; x <= 1; x++) {
            vec2 neighbor = vec2(float(x), float(y));
            vec2 point = hash22(i_st + neighbor);
            point = 0.5 + 0.5 * sin(time * uNoise2Opts.y + 6.2831 * point);
            vec2 diff = neighbor + point - f_st;
            float dist = length(diff);
            m_dist = min(m_dist, dist);
        }
    }

    return m_dist;
}

float linearNoise(in vec2 uv, in float aspect) {
    uv -= 0.5;
    uv.x *= aspect;
    uv += 0.5;
    uv = rotateUV(uv, uNoise3Opts.z, vec2(0.5));
    uv *= uNoise3Opts.x;
    return (sin(uv.x + time * uNoise3Opts.y) + 1.0) * 0.5;
}

float linearNoise2(in vec2 uv, in float aspect) {
    uv = rotateUV(uv, uNoise4Opts.z, vec2(0.5));
    vec2 multX = rotateUV(vec2(aspect + uNoise4Opts.w * aspect, 1.0), uNoise4Opts.z, vec2(0.0));
    uv -= 0.5;
    uv *= multX;
    float len = (sin(length(uv) * uNoise4Opts.x + time * uNoise4Opts.y) + 1.0) * 0.5;
    return len;
}

void main() {
    float ww = fwidth(vUv.y);
    float aspect = resolution.x / resolution.y;

    vec2 bgUV = texture2D(uUV, vUv).rg;

    vec2 vel = texture2D(uVel, bgUV).rg * -0.001 * uNoiseMultiplier;
    float dye = fc(quadraticOut(texture2D(uDye, bgUV).r), 0.01, 1.0, 0.0, 0.6);

    float n1 = 0.0;

    if (uNoise < 1.0) {
        n1 = quadraticInOut(fc(noise(vec3(bgUV * uNoise1Opts.x + 24.143, time * uNoise1Opts.y + 65.343)), -0.2, 0.7, 0.0, 0.6));
    } else if (uNoise < 2.0) {
        n1 = fc(cellNoise(vUv, aspect), 0.4, 0.8, 0.0, 0.6);
    } else if (uNoise < 3.0) {
        n1 = quadraticInOut(fc(linearNoise(vUv, aspect), 0.0, 1.0, 0.0, 0.4));
    } else {
        n1 = quadraticInOut(fc(linearNoise2(vUv, aspect), 0.0, 1.0, 0.0, 0.4));
    }

    n1 *= uNoiseMultiplier;

    // logo
    vec2 uvLogo = bgUV;

    // normalize uv
    uvLogo -= 0.5;
    uvLogo.x *= aspect;
    uvLogo += 0.5;
    uvLogo = scaleUV(uvLogo, min(resolution.x, resolution.y) * 0.00025 + ww * 300.0, vec2(0.5));

    // merge the logo and the background
    vec2 dLogo = 1.0 - texture2D(tLogo, uvLogo).rg;
    float borderLogo = ww + 0.0175;

    // add the noise to the logo to "disolve" it
    float logoDF = dLogo.r + n1;

    float shapeInside = fl(logoDF, 0.15, 1.0, borderLogo, fc(uLogoAnimation, 0.0, 1.0, 0.01, 0.85));
    vec3 bg = mix(uColorBg, uColorLogo, shapeInside);

    // bg
    vec2 uv = bgUV;
    uv -= 0.5;
    uv.x *= aspect;
    uv += 0.5;
    uv = scaleUV(uv, resolution.y * 0.00003 +  ww * 20.0, vec2(0.5));

    // get sdf
    float dist = 1.0 - texture2D(tBg, uv).r;

    // get mix
    float diff = 0.075;
    diff += n1;
    diff += uGlobalOpen;
    diff += dye * uNoiseMultiplier;
    diff *= uGlobalShape;

    float border = ww + 0.0175;
    float shape = fl(dist, 0.0, 1.0, border, fc(diff, 0.0, 1.0, 0.0, 1.0));

    vec3 colorFront = mix(uColorLogo, uColorBg, shapeInside * dye * 3.0);

    bg = mix(bg, colorFront, shape);

    gl_FragColor.rgb = bg;
    gl_FragColor.a = 1.0;
}
