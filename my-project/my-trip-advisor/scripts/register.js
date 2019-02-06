$(function() {
    generateYears($('#sel-birth'));
    
    var birthSelect = $('#sel-birth').selectmenu();
    birthSelect.selectmenu("menuWidget").addClass('overflow');

    $('#form-register').submit(function(e) {
        e.preventDefault();

        $(this).find('.txt-warning').empty().hide();

        var email = $('#inp-email').val();

        if (!validateEmail(email)) {
            $('#inp-email').next().html('잘못된 형식입니다').show();
            return;
        }
    });
});

function generateYears($select) {
    for (var i = 1970; i <= 2010; i++) {
        $select.append('<option value="' + i + '">' + i + '년</option>');
    }
}

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
