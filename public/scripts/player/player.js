var player = [];
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 10000 );

function createPlayer(){
	var geometry = new THREE.BoxGeometry( 1, 2, 1 );
	var material = new THREE.MeshPhongMaterial({color: 0x6C6C6C});

	player[0] = new THREE.Mesh( geometry, material );
	player[0].castShadow = true;
	camera.position.set(0, 5, 8);
	player[0].add(camera);
	player[0].controls = new THREE.OrbitControls( camera );

	scene.add( player[0] );
}
createPlayer();




