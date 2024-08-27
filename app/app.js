import * as THREE from "three";

function K(e, t, n) {
  var a = new V.w(e, e, {
      format: t,
      type: THREE.FloatType,
      magFilter: n,
      minFilter: n,
      depthBuffer: !1,
    }),
    s = a.clone(),
    r = {
      read: a,
      write: s,
      swap: function () {
        var e = r.read;
        (r.read = r.write), (r.write = e);
      },
    };
  return r;
}

class Webgl {
  constructor() {
    this.canvas = document.querySelector("canvas");
    this.logo = new THREE.TextureLoader().load("/images/logo.png");
    this.bg = new THREE.TextureLoader().load("/images/bg4.jpg");

    this.simRes = 128;
    this.dyeRes = 512;
    this.simTexelSize = 1 / this.simRes;
    this.dyeTexelSize = 1 / this.dyeRes;
    this._pressureIterations = 3;
    this.densityDissipation = 0.97;
    this.velocityDissipation = 0.98;
    this.pressureDissipation = 0.8;
    this.curlStrength = 10;
    this.splatRadius = 0.1;
    this.splatForce = 6e3;
    this.splatMode = "LINE";
    this.borders = false;
    this.mode = "SCREEN";
    this.aspect = 1;
    this.enabled = 1;
    this.points = [
      {
        position: new THREE.Vector2(0.5, 0.5),
        prevPosition: new THREE.Vector2(0.5, 0.5),
        lastUpdate: 0,
        velocity: 0,
      },
    ];

    this.material = {
      extensions: {
        derivatives: "#extension GL_OES_standard_derivatives : enable",
      },
      uniforms: {
        tBg: {
          value: this.bg,
        },
        tLogo: {
          value: this.logo,
        },
        uColorBg: {
          value: new THREE.Color(0x000000),
        },
        uColorLogo: {
          value: new THREE.Color(0xff0000),
        },
        uNoise: {
          value: Math.floor(Math.random() * 10),
        },
        uNoise1Opts: {
          value: new THREE.Vector2(1.25, 0.25),
        },
        uNoise2Opts: {
          value: new THREE.Vector2(2, 0.8),
        },
        uNoise3Opts: {
          value: new THREE.Vector2(5, 2, 3.8),
        },
        uNoise4Opts: {
          value: new THREE.Vector4(-3.8, -2, -3.9, -2.5),
        },
        uGlobalShape: {
          value: 0,
        },
        uGlobalOpen: {
          value: 0,
        },
        uNoiseMultiplier: {
          value: 0,
        },
        uDye: {
          value: 0,
        },
        uVel: {
          value: 0,
        },
        uUV: {
          value: this.elasticComposer.readBuffer.texture,
        },
        uLogoAnimation: {
          value: 0,
        },
      },
    };

    this.createRTs();
    this.createMaterials();
    this.createScene();
    this.enable();
  }

  createRTs() {
    this.density = K(this.dyeRes, THREE.RGBAFormat, THREE.LinearFilter);
    this.velocity = K(this.simRes, THREE.RGBAFormat, THREE.LinearFilter);
    this.pressure = K(this.simRes, THREE.RGBAFormat, THREE.LinearFilter);
    this.divergence = K(this.simRes, THREE.RGBAFormat, {
      format: THREE.RGBAFormat,
      type: THREE.FloatType,
      magFilter: THREE.NearestFilter,
      minFilter: THREE.NearestFilter,
      depthBuffer: !1,
    });
    this.curl = new THREE.WebGLRenderTarget(this.simRes, this.simRes, {
      format: THREE.RGBAFormat,
      type: THREE.FloatType,
      magFilter: THREE.NearestFilter,
      minFilter: THREE.NearestFilter,
      depthBuffer: !1,
    });
  }

  createScene() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: !1,
      alpha: !1,
    });
    this.renderer.setClearColor(0x000000, 1);
    this.renderer.setClearAlpha(1);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.camera = new THREE.Camera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.camera.position.set(0, 0, 5);
  }

  resize() {
    this.aspect = window.innerWidth / window.innerHeight;
    this.camera.aspect = this.aspect;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}

new Webgl();
