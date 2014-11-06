$('document').ready(function() {
	require(['composer', 'composer/controls'], function(composer, controls) {
        var text, start, end, dropkick;
		composer.addButton('fa fa-strikethrough', function(textarea, selectionStart, selectionEnd) {
			if(selectionStart === selectionEnd){
				controls.insertIntoTextarea(textarea, '~~Insert Text Here~~');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 18);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, '~~','~~');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 2);
			}
		});
		composer.addButton('fa fa-underline', function(textarea, selectionStart, selectionEnd) {
			if(selectionStart === selectionEnd){
				controls.insertIntoTextarea(textarea, '~Insert Text Here~');
				controls.updateTextareaSelection(textarea, selectionStart + 1, selectionEnd + 17);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, '~','~');
				controls.updateTextareaSelection(textarea, selectionStart + 1, selectionEnd + 2);
			}
		});	
		composer.addButton('fa fa-code', function(textarea, selectionStart, selectionEnd) {
			if(selectionStart === selectionEnd){
				controls.insertIntoTextarea(textarea, '```\nInsert Code Here\n```');
				controls.updateTextareaSelection(textarea, selectionStart + 4, selectionEnd + 21);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, '```\n','\n```\n');
				controls.updateTextareaSelection(textarea, selectionStart + 4, selectionEnd + 4);
			}
		});
		composer.addButton('fa fa-quote-right', function(textarea, selectionStart, selectionEnd) {
			if(selectionStart === selectionEnd){
				controls.insertIntoTextarea(textarea, '@Username / Website said:\n> ');
				controls.updateTextareaSelection(textarea, selectionStart + 28, selectionEnd + 28);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, '@Username / Website said:\n> ','\n\n');
			}
		});
		composer.addButton('fa fa-align-left', function(textarea, selectionStart, selectionEnd) {
			if(selectionStart === selectionEnd){
				controls.insertIntoTextarea(textarea, '<-Insert Text Here<-');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 18);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, '<-','<-');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 2);
			}
		});
		composer.addButton('fa fa-align-center', function(textarea, selectionStart, selectionEnd) {
			if(selectionStart === selectionEnd){
				controls.insertIntoTextarea(textarea, '->Insert Text Here<-');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 18);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, '->','<-');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 2);
			}
		});
		composer.addButton('fa fa-align-right', function(textarea, selectionStart, selectionEnd) {
			if(selectionStart === selectionEnd){
				controls.insertIntoTextarea(textarea, '->Insert Text Here->');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 18);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, '->','->');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 2);
			}
		});
		composer.addButton('fa fa-align-justify', function(textarea, selectionStart, selectionEnd) {
			if(selectionStart === selectionEnd){
				controls.insertIntoTextarea(textarea, '=>Insert Text Here<=');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 18);
			} else {
				controls.wrapSelectionInTextareaWith(textarea, '=>','<=');
				controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 2);
			}
		});
        composer.addButton('fa fa-eye-slash', function(textarea, selectionStart, selectionEnd) {
            if(selectionStart === selectionEnd){
                controls.insertIntoTextarea(textarea, ">! Spoiler");
                controls.updateTextareaSelection(textarea, selectionStart + 3, selectionStart + 12);
            } else {
                controls.wrapSelectionInTextareaWith(textarea, '>! ', '');
                controls.updateTextareaSelection(textarea, selectionStart + 3, selectionEnd + 3);
            }
        });

        //Color
        composer.addButton('fa fa-eyedropper', function(textarea, selectionStart, selectionEnd) {
            text = textarea;
        });
        $(document).on('click','.fa-eyedropper',function(){
            $('.fa-eyedropper').ColorPicker({
                onShow: function (el) {
                    $(el).fadeIn(500);
                    controls.updateTextareaSelection(text, start, end);
                    return false;
                },
                onHide: function (el) {
                    $(el).fadeOut(500);
                    return false;
                },
                onSubmit: function (hsb, hex, rgb, el) {
                    $(el).ColorPickerHide();
                    if(start === end){
                        controls.insertIntoTextarea(text, '%(#'+hex+')[Insert Text Here]');
                        controls.updateTextareaSelection(text, start + 11, end + 27);
                    } else {
                        controls.wrapSelectionInTextareaWith(text, '%(#'+hex+')[',']');
                        controls.updateTextareaSelection(text, start + 11, end + 11);
                    }
                }
            }).trigger('click');
        });
        $(document).on('blur','textarea.write',function(){
            start = this.selectionStart;
            end = this.selectionEnd;
        });

        //Title
        composer.addButton('fa fa-font', function(textarea, selectionStart, selectionEnd) {
            if(start === end){
                controls.insertIntoTextarea(textarea, '# Insert Code Here');
                controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 18);
            } else {
                controls.wrapSelectionInTextareaWith(textarea, '# ','');
                controls.updateTextareaSelection(textarea, selectionStart + 2, selectionEnd + 18);
            }
        });

	});
});
