//basic initialisation
var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );	

//lights
var directionalLight = new THREE.DirectionalLight( 0xdfebff, 1.75 );
directionalLight.position.set( 50, 50, 50 );
directionalLight.lookAt(0,0,0);
scene.add( directionalLight );
