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
        addContainer: '.js-add-reason-container',
        use: '.js-add-use',
        useContainer: '.js-add-use-container'
    }

    var text = '';

    var init = function() {
        var reasonCount = 1;
        var useCount = 1;

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
            var href = 'mailto:mayorandcouncil@vancouver.ca,yan.zeng@vancouver.ca,paul.cheng@vancouver.ca?';
            href += 'subject=' + encodeURIComponent(subject);
            href += '&body=' + encodeURIComponent(body);

            $(this).attr('href', href);
        });

        $(selectors.add).on('click', function(ev) {
            ev.preventDefault();
            reasonCount += 1;
            _addCustom('reason', reasonCount, selectors.addContainer, true);
        });

        $(selectors.use).on('click', function(ev) {
            ev.preventDefault();
            useCount += 1;
            _addCustom('use', useCount, selectors.useContainer);
        });
    }

    var _addCustom = function(namespace, count, containerEl, fullSentence) {
        var id = namespace + count;
        var html = '<div class="form-group">';
        html += '<label class="label" for="' + id;
        html += '">Custom ' + namespace + ' ' + count;
        if (fullSentence) {
            html += ' (Write in full sentences)';
        }
        html += '</label>';
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

    var _checkInputs = function(el) {
        var checkInput = $(el + ' input:checked').length > 0;
        var customInputArray = $(el).find(selectors.customInput);
        var customInputFilled = false;

        for (var i = 0, max = customInputArray.length; i < max; i++) {
            var $customInput = $(customInputArray[i]);
            var customInputValue = $customInput.val();

            if (customInputValue.length) {
                customInputFilled = true;
            }
        }

        if (checkInput || customInputFilled) {
            return true;
        }
    }

    var _renderList = function(el, list) {
        var inputArray = $(el).find(selectors.input);
        var customInputArray = $(el).find(selectors.customInput);

        for (var i = 0, max = inputArray.length; i < max; i++) {
            var $inputItem = $(inputArray[i]);

            if ($inputItem[0].checked) {
                var name = $inputItem[0].name;

                if (list) { text += '\n- '; }
                text += _generateText(name);
            }
        }

        for (var i = 0, max = customInputArray.length; i < max; i++) {
            var $customInput = $(customInputArray[i]);
            var customInputValue = $customInput.val();

            if (customInputValue.length) {
                if (list) { text += '\n- '; }
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

        _renderList(selectors.chinatownRelationship);

        if (_checkInputs(selectors.reasons)) {
            text += '\n';
            text += '\n' + _generateText('openingConcern') + _generateText('shortTopic') + ' ' + _generateText('reasonBridge');
            _renderList(selectors.reasons, true);
        };

        if (_checkInputs(selectors.alternatives)) {
            text += '\n';
            text += '\n' + _generateText('otherUses');
            _renderList(selectors.alternatives, true);
        }

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