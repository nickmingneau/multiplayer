var player;

function createPlayer(){
	var geometry = new THREE.BoxGeometry( 1, 2, 1 );
	var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
	player = new THREE.Mesh( geometry, material );
	scene.add( player );
}
createPlayer();

camera.position.z = 5;