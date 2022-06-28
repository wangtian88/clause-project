// app.js
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import List from '@ckeditor/ckeditor5-list/src/list';
// 下载为html
import DownHtml from './plugins/DownHtml';

ClassicEditor
    .create( document.querySelector( '#editor' ), {
        plugins: [ 
            Essentials, 
            Paragraph, 
            Bold, 
            Italic, 
            Underline,
            FontSize, 
            FontFamily, 
            FontColor, 
            FontBackgroundColor,
            Alignment,
            List,
            DownHtml,
         ],
        toolbar: [ 
            'fontsize', 
            'fontfamily', 
            'fontcolor', 
            'fontbackgroundcolor',
            '|',
            'bold', 
            'italic', 
            'underline',
            '|',
            'alignment',
            '|',
            'numberedList', 
            'bulletedList', 
            '|',
            'undo', 
            'redo', 
            '|',
            'downhtml',
        ],
        language: 'zh-CN',
    } )
    .then( editor => {
        console.log( 'Editor was initialized', editor );
    } )
    .catch( error => {
        console.error( error.stack );
    } );

