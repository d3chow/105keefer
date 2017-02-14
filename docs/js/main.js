var EmailApp = (function($) {
    var selectors = {
        form: '.js-form',
        outputLetter: '.js-output-letter',
        subjectLine: '.js-output-subject',
        send: '.js-send',
        input: '.js-input',
        customInput: '.js-input-custom',
        chinatownRelationship: '.js-fieldset-relationship',
        reasons: '.js-fieldset-reasons',
        alternatives: '.js-fieldset-alternative',
        add: '.js-add-reason',
        addContainer: '.js-add-reason-container'
    }

    var text = '';

    var init = function() {
        $(selectors.form).on('submit', function(ev) {
            var formArray = $(this).serializeArray();
            var formJson = {};

            $.each(formArray, function() {
                formJson[this.name] = this.value || '';
            });

            _outputLetter(formJson);
            _outputSubjectLine();

            ev.preventDefault();
        });

        $(selectors.send).on('click', function(ev) {
            var subject = $(selectors.subjectLine).val();
            var body = $(selectors.outputLetter).val();
            var href = 'mailto:test@test.ca?';
            href += 'subject=' + encodeURIComponent(subject);
            href += '&body=' + encodeURIComponent(body);

            $(this).attr('href', href);
        });

        var reasonCount = 1;

        $(selectors.add).on('click', function(ev) {
            ev.preventDefault();
            reasonCount += 1;
            _addCustom('reason', reasonCount, selectors.addContainer);
        });

    }

    var _addCustom = function(namespace, count, containerEl) {
        var id = namespace + count;
        var html = '<div class="form-group">';
        html += '<label class="label" for="' + id;
        html += '">Custom ' + namespace + ' ' + count;
        html += ' (Write in full sentences)</label>';
        html += '<input type="text" class="form-control js-input-custom" id="';
        html += id;
        html += 'name="' + id;
        html += '</div>';

        $(containerEl).append(html);
    }
    var _generateNumber = function(max) {
        return Math.floor(Math.random() * max);
    }

    var _generateText = function(key) {
        var maxNum = TextBank[key].length;
        var randNum = _generateNumber(maxNum);

        return TextBank[key][randNum];
    }

    var _checkCheckBoxes = function(el, list) {
        var inputArray = $(el).find(selectors.input);
        var customInputArray = $(el).find(selectors.customInput);

        for (var i = 0, max = inputArray.length; i < max; i++) {
            var $inputItem = $(inputArray[i]);

            if ($inputItem[0].checked) {
                var name = $inputItem[0].name;

                if (list) { text += '\n - '; }
                text += _generateText(name);
            }
        }

        for (var i = 0, max = customInputArray.length; i < max; i++) {
            var $customInput = $(customInputArray[i]);
            var customInputValue = $customInput.val();

            if (customInputValue.length) {
                if (list) { text += '\n - '; }
                text += customInputValue + ' ';
            }
        }
    }

    var _outputSubjectLine = function() {
        var subjectLine = _generateText('subjectLine');
        $(selectors.subjectLine).val(subjectLine);
    }

    var _outputLetter = function(data) {
        text = _generateText('openingAddress') + '\n';
        text += '\n' + _generateText('openingSentence') + _generateText('topic') + '. ';

        _checkCheckBoxes(selectors.chinatownRelationship);

        text += '\n';
        text += '\n' + _generateText('openingConcern') + _generateText('shortTopic') + ' ' + _generateText('reasonBridge');

        _checkCheckBoxes(selectors.reasons, true);

        text += '\n';
        text += '\n' + _generateText('otherUses');

        _checkCheckBoxes(selectors.alternatives, true);

        text += '\n';
        text += '\n' + _generateText('closingBlock');
        text += '\n';
        text += '\n' + _generateText('signature');
        text += '\n';
        text += data.firstName + ' ' + data.lastName;
        text += '\n';
        text += '\n';
        text += data.address
        text += '\n';
        text += data.postal;

        $(selectors.outputLetter).val(text);
    }

    return {
        init: init
    }

})(jQuery || {});

EmailApp.init();