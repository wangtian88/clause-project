import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import imageIcon from '@ckeditor/ckeditor5-core/theme/icons/align-bottom.svg';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

export default class DownHtml extends Plugin {
    init() {
        const editor = this.editor;

        editor.ui.componentFactory.add( 'downhtml', locale => {
            const view = new ButtonView( locale );
            const htmlBefore = `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Html</title>
            </head>
            <body>`;
            const htmlAfter = `</body></html>`;

            view.set( {
                label: 'html下载',
                icon: imageIcon,
                tooltip: true
            } );

            // Callback executed once the image is clicked.
            view.on( 'execute', () => {
                const editor = document.getElementsByClassName('ck-editor__editable')[0];
                const aFile = `<div>${editor.innerHTML}</div>`;
                const innerAfile = `${htmlBefore}${aFile}${htmlAfter}`;
                const aFileParts = [innerAfile];
                const oMyBlob = new Blob(aFileParts, { type: "text/html" });
                const a = document.createElement("a");
                const url = window.URL.createObjectURL(oMyBlob);
                const name = new Date().toLocaleString();
                a.setAttribute('download', `${name}.html`);
                a.href = url;
                a.click();
                window.URL.revokeObjectURL(url);
            } );

            return view;
        });
    }
}