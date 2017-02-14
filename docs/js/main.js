var TextBank = {
    openingAddress: [
        'Dear Mayor and Council,',
        'Mayor and Council:',
        'To Vancouver City Council:',
        'Dear City of Vancouver staff and City Council,',
        'Vancouver City Staff and City Council,',
        'To City of Vancouver Staff:'
    ],
    openingSentence: [
        'This letter is regarding my opposition to the ',
        'I am writing to you regarding my non-support for the ',
        'This email is for the ',
        'This is my non-support letter for the ',
        'I am writing this email to express my concerns about the ',
        'I have concerns about the ',
        'I am writing this email because I do not support the ',
        'This email is concerning the ',
        'This letter is concerning the ',
        'I am writing to you as a concerned citizen about the ',
        'I\'m writing because I don\'t support the ',
    ],
    topic: [
        '105 Keefer St rezoning proposal',
        '105 Keefer X 544 Columbia rezoning proposal',
        '105 Keefer St and 544 Columbia St rezoning proposal',
        '105 Keefer St and 544 Columbia St application',
        'Rezoning proposal for 105 Keefer St',
        'Rezoning prosoal for 105 Keefer and 544 Columbia',
        '105 Keefer proposal',
        '105 Keefer St. application',
        '105 Keefer X 544 Columbia St rezoning application'
    ],
    shortTopic: [
        'application',
        'rezoning application',
        'rezoning proposal',
        'proposal',
        'proposed rezoning',
        'development proposed',
        'proposed development',
        'proposal for the building',
        'building proposed'
    ],
    currentlyLive: [
        'I currently live in Chinatown. ',
        'I live in Chinatown by 105 Keefer. ',
        'I live in Chinatown. ',
        'I currently live in the neighbourhood. ',
        'I live in the neighbourhood. ',
        'I live in the neighbourhood by the rezoning site. ',
        'I live in the neighbourhood right now. ',
        'I live in Chinatown nearby the 105 Keefer site. ',
        'I live close by to the development site. ',
        'Currently, I live in the neighbourhood. ',
        'Right now, I live in Chinatown closeby to the site. '
    ],
    previouslyLived: [
        'I used to live in Chinatown. ',
        'I lived in Chinatown near the 105 Keefer St site. ',
        'I previously lived in the Chinatown neighbourhood. ',
        'In the past, I lived in Chinatown. ',
        'I lived in Chinatown before. '
    ],
    liveNear: [
        'I currently live nearby Chinatown. ',
        'I live in Vancouver close by to Chinatown. ',
        'I live very nearby Chinatown. ',
        'I live close by Chinatown where the 105 Keefer site is. ',
        'I am currently living nearby Chinatown. '
    ],
    work: [
        'I currently work in Chinatown. ',
        'My workplace is in Chinatown. ',
        'I work in the neighbourhood. ',
        'I currently work nearby the proposed development. '
    ],
    grewUp: [
        'I grew up in Chinatown. ',
        'Chinatown was where I grew up. ',
        'I grew up going to Chinatown as a kid. ',
        'I spent my childhood going to Chinatown. ',
        'Chinatown was a large part of my childhood. ',
        'Chinatown was a significant part of my upbringing. ',
        'I grew up in Vancouver going to Chinatown as a child. '
    ],
    careAbout: [
        'I care a lot about the neighbourhood. ',
        'Chinatown is a special part of my Vancouver. ',
        'This historic area is very important to me. ',
        'Chinatown is an important part of my Vancouver. ',
        'Living in Vancouver with a Chinatown is a great part of my experience. ',
        'I care about the historic area. '
    ],
    openingConcern: [
        'I do not support the ',
        'I don\'t support the ',
        'I am opposed to the ',
        'I\'m opposed to the ',
        'I am very concerned about the ',
        'I am concerned about the ',
        'I am strongly opposed to the ',
        'I urge you to reject the ',
        'I urge you to not approve the ',
        'I strongly recommend that Council and staff do not pass the ',
        'I strongly recommend that staff does not approve the '
    ],
    reasonBridge: [
        'because: ',
        'for these reasons: ',
        'for the following reasons: ',
        'because of the following: ',
        'for many reasons including the following: ',
        'because of these reasons: ',
        'for the reasons listed below: ',
        'for the reasons below. ',
        'because of the reasons below. ',
        'for reasons as stated below: '
    ],
    unaffordableReason: [
        'The market condos will be unaffordable to locals. ',
        'This building will perpetuate the unaffordability crisis in Vancouver. '
    ],
    economicDisplacementPeopleReason: [
        'It will economically displace vulnerable seniors in Chinatown. ',
        'It will displace low income residents economically. '
    ],
    economicDisplacementBusinessReason: [
        'It will raise commercial lease prices and price affordable businesses out of Chinatown. ',
        'It will displace affordable Chinatown businesses that residents depend on. '
    ],
    inappropriateUseReason: [
        'This is a critical site in a historic area. It should not be used for market condos. ',
        'Putting a building with million dollar homes on that site right next to the plaza is not appropriate in Chinatown. '
    ],
    tooTallReason: [
        'It is taller than every other building in the surrounding area. ',
        'The height is greater than the average building next to it. '
    ],
    tooMassiveReason: [
        'It is more massive and dense than all the buildings next to it. ',
        'Its mass is out of scale with the neighbourhood. '
    ],
    rejectedByCHAPCReason: [
        'It was rejected by the City of Vancouver Chinatown Historic Area Planning Committee. ',
        'The current proposal was voted non-support by the Chinatown Historic Area Planning Committee. '
    ],
    srHousingReason: [
        'The seniors housing proposed in woefully inadequate. ',
        'There is insufficient seniors housing. ',
        'Seniors housing offered does not justify the additional height requested. '
    ],
    precendentSettingReason: [
        'This will set a bad precendent for the all rezonings in Chinatown. ',
        'Approving this rezoning will lead to the cascading death of Chinatown. '
    ],
    memorialReason: [
        'It is a disgrace to treat the Chinese Veterans Memorial as a private front yard. ',
        'The Chinese Veterans Memorial should not be a private front yard for condo owners. '
    ],
    noFamilyReasons: [
        'The significant decrease in family units is not appropriate for Chinatown. ',
        'Chinatown needs more family units for real families, not million dollar condos and bachelor suites for singles. '
    ],
    otherUses: [
        'Instead of market condos, I would like suggest the following alternatives for the site: ',
        'The following uses of the site is more appropriate: ',
        'I would recommend for the City to convert the site to the following uses instead: '
    ],
    socialHousingUse: [
        'More social housing',
        'Significantly more social housing'
    ],
    communityCentreUse: [
        'A community centre for the neighbourhood',
        'Community centre'
    ],
    plazaUse: [
        'An extension of the Memorial Plaza',
        'A plaza for the community'
    ],
    intergenerationSpaceUse: [
        'An intergeneration space',
        'A space for all ages'
    ],
    greenSpaceUse: [
        'A park',
        'More green space'
    ],
    smallerBuildingUse: [
        'Fine-grain buildings that are broken up on the lot',
        'Narrower buildings that respect the saw-tooth nature of the historic area'
    ],
    closingBlock: [
        'In summary, this is a poor proposal and I urge council to reject it.',
        'This is a bad application and council should not pass it.',
        'In conclusion, this proposal is not good for the neighbourhood. Council should not approve it.'
    ],
    signature: [
        'Yours truly,',
        'Sincerely,',
        '',
        'Your sincerely,',
        'Regards,',
        'With regards,',
        'Sincerely yours,'
    ],
    subjectLine: [
        'RE: 105 Keefer St rezoning application',
        '105 Keefer rezoning proposal',
        '105 Keefer St. rezoning application'
    ]
}

var EmailApp = (function($) {
    var selectors = {
        form: '.js-form',
        outputLetter: '.js-output-letter',
        subjectLine: '.js-output-subject',
        send: '.js-send',
        input: '.js-input',
        customInput: '.js-input-custom',
        chinatownRelationship: '.js-fieldset-relationship'
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

    }

    var _generateNumber = function(max) {
        return Math.floor(Math.random() * max);
    }

    var _generateText = function(key) {
        var maxNum = TextBank[key].length;
        var randNum = _generateNumber(maxNum);

        return TextBank[key][randNum];
    }

    var _checkCheckBoxes = function(el) {
        var inputArray = $(el).find(selectors.input);
        var customInputValue = $(el).find(selectors.customInput).val();

        for (var i = 0, max = inputArray.length; i < max; i++) {
            var $inputItem = $(inputArray[i]);

            if ($inputItem[0].checked) {
                var name = $inputItem[0].name;
                text += _generateText(name);
            }
        }

        if (customInputValue.length) {
            text += customInputValue;
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

        if (data.unaffordableReason) {
            text += '\n' + '- ' + _generateText('unaffordableReason');
        }

        if (data.economicDisplacementPeopleReason) {
            text += '\n' + '- ' + _generateText('economicDisplacementPeopleReason');
        }

        if (data.economicDisplacementBusinessReason) {
            text += '\n' + '- ' + _generateText('economicDisplacementBusinessReason');
        }

        if (data.inappropriateUseReason) {
            text += '\n' + '- ' + _generateText('inappropriateUseReason');
        }

        if (data.tooTallReason) {
            text += '\n' + '- ' + _generateText('tooTallReason');
        }

        if (data.tooMassiveReason) {
            text += '\n' + '- ' + _generateText('tooMassiveReason');
        }

        if (data.rejectedByCHAPCReason) {
            text += '\n' + '- ' + _generateText('rejectedByCHAPCReason');
        }

        if (data.srHousingReason) {
            text += '\n' + '- ' + _generateText('srHousingReason');
        }

        if (data.precendentSettingReason) {
            text += '\n' + '- ' + _generateText('precendentSettingReason');
        }

        if (data.memorialReason) {
            text += '\n' + '- ' + _generateText('memorialReason');
        }

        if (data.noFamilyReasons) {
            text += '\n' + '- ' + _generateText('noFamilyReasons');
        }

        if (data.oppositionDesc1) {
            text += '\n' + '- ' + data.oppositionDesc1;
        }

        if (data.oppositionDesc2) {
            text += '\n' + '- ' + data.oppositionDesc2;
        }

        if (data.oppositionDesc3) {
            text += '\n' + '- ' + data.oppositionDesc3;
        }

        text += '\n';

        text += '\n' + _generateText('otherUses');

        if (data.socialHousingUse) {
            text += '\n' + '- ' + _generateText('socialHousingUse');
        }

        if (data.communityCentreUse) {
            text += '\n' + '- ' + _generateText('communityCentreUse');
        }

        if (data.plazaUse) {
            text += '\n' + '- ' + _generateText('plazaUse');
        }

        if (data.intergenerationSpaceUse) {
            text += '\n' + '- ' + _generateText('intergenerationSpaceUse');
        }

        if (data.greenSpaceUse) {
            text += '\n' + '- ' + _generateText('greenSpaceUse');
        }

        if (data.smallerBuildingUse) {
            text += '\n' + '- ' + _generateText('smallerBuildingUse');
        }

        if (data.altUse1) {
            text += '\n' + '- ' + data.altUse1;
        }

        if (data.altUse2) {
            text += '\n' + '- ' + data.altUse2;
        }

        if (data.altUse3) {
            text += '\n' + '- ' + data.altUse3;
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