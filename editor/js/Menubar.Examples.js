import * as THREE from '../../build/three.module.js';

import { UIPanel, UIRow } from './libs/ui.js';

function MenubarExamples( editor ) {

	var strings = editor.strings;

	var container = new UIPanel();
	container.setClass( 'menu' );

	var title = new UIPanel();
	title.setClass( 'title' );
	var theTitle = strings.getKey( 'menubar/examples' );
	if (theTitle == '???') {
		title.setTextContent( 'menubar/examples' );
	}else{
		title.setTextContent( strings.getKey( 'menubar/examples' ) );
	}
	container.add( title );

	var options = new UIPanel();
	options.setClass( 'options' );
	container.add( options );

	// Examples

	var items = [
		{ title: 'AndreaGuerbeau-AdrienLenne', file: '00AndreaGuerbeau-AdrienLenne.json' },
		{ title: 'CheikBambaBeke', file: '00CheikBambaBeke.json' },
		{ title: 'ClementPauvret', file: '00ClementPauvret.json' },
		{ title: 'DjamelEddineYatoui', file: '00DjamelEddineYatoui.json' },
		{ title: 'EsraYildirim', file: '00EsraYildirim.json' },
		{ title: 'HermineKoco', file: '00HermineKoco.json' },
		{ title: 'JohanaOuanely', file: '00JohanaOuanely.json' },
		{ title: 'ManonDalle', file: '00ManonDalle.json' },
		{ title: 'MohamadouKonate', file: '00MohamadouKonate.json' },
		{ title: 'ReinaDagher-LucFigliolini', file: '00ReinaDagher-LucFigliolini.json' },				
		{ title: 'menubar/examples/Arkanoid', file: 'arkanoid.app.json' },
		{ title: 'menubar/examples/Camera', file: 'camera.app.json' },
		{ title: 'menubar/examples/Particles', file: 'particles.app.json' },
		{ title: 'menubar/examples/Pong', file: 'pong.app.json' },
		{ title: 'menubar/examples/Shaders', file: 'shaders.app.json' },
		{ title: 'menubar/examples/FirstPersonControl', file: 'firstPersonControl.app.json' },
		{ title: 'menubar/examples/Collision', file: 'collision.json' },
		{ title: 'Animation Example', file: 'animationExample.json' }
	];

	var loader = new THREE.FileLoader();

	for ( var i = 0; i < items.length; i ++ ) {

		( function ( i ) {

			var item = items[ i ];

			var option = new UIRow();
			option.setClass( 'option' );

			var theOptionTitle = strings.getKey( item.title );
			if (theOptionTitle == '???') {
				option.setTextContent( item.title );
			}else{
				option.setTextContent( strings.getKey( item.title ) );
			}
			//option.setTextContent( strings.getKey( item.title ) );
			option.onClick( function () {

				if ( confirm( 'Any unsaved data will be lost. Are you sure?' ) ) {

					loader.load( 'examples/' + item.file, function ( text ) {

						editor.clear();
						editor.fromJSON( JSON.parse( text ) );

					} );

				}

			} );
			options.add( option );

		} )( i );

	}

	return container;

}

export { MenubarExamples };
