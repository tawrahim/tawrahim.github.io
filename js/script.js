$("#systemTime").append(new Date());

jQuery(function($, undefined) {
    $('#terminal').terminal(function(command, term) {
        if (command !== '') {
            try {
                var result = window.eval(command);
                if (result !== undefined) {
                    term.echo(new String(result));
                }
            } catch(e) {
                term.error(new String(e));
            }
        } else {
           term.echo('');
        }
    }, {
        greetings: '',
        name: 'js_demo',
        height: 200,
        prompt: '$ tawheedabdul-raheem at macbook in ~ '});

    $('.clipboard').remove();
});

