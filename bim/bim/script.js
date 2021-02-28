var viewer;

function viewit(modelName, lightPreset) {
    var config3d = {
          extensions: ['Autodesk.Viewing.WebVR']
      };
    var options = {
        'document' : modelName, 
         'env':'Local', 
        };
    var viewerElement = document.getElementById('viewer');
    viewer = new Autodesk.Viewing.Private.GuiViewer3D(viewerElement, {});

    Autodesk.Viewing.Initializer(options,function() {
        viewer.initialize();
        viewer.load(options.document);
        viewer.setLightPreset(lightPreset);
   viewer.loadExtension('Autodesk.Viewing.WebVR', Autodesk.Viewing.createViewerConfig());
    });
} 

viewit( "https://kevinvandecar.github.io/assets/x-wing_max/svf/xwing.SVF", 7);
