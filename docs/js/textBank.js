var TextBank = {
    openingAddress: [
        'Dear Mayor and Council,',
        'Mayor and Council:',
        'To Vancouver City Council:',
        'Dear City of Vancouver staff and City Council,',
        'Vancouver City Staff and City Council,',
        'To City of Vancouver Staff:',
        'To city staff and council:',
        'To Mayor and Council:',
        'Dear city staff and council'
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
        '105 Keefer X 544 Columbia St rezoning application',
        'Rezoning application at 105 Keefer',
        'Rezoning application at 105 Keefer St',
        'Rezoning application at 105 Keefer and 544 Columbia St'
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
        'I live in the neighbourhood by 105 Keefer. ',
        'I live in Chinatown. ',
        'I currently live in the neighbourhood. ',
        'I live in the neighbourhood. ',
        'I live in the neighbourhood by the rezoning site. ',
        'I live in the neighbourhood right now. ',
        'I live in Chinatown by the rezoning site. ',
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
        'I live in a nearby neighbourhood. ',
        'I live in a neighbourhood close to Chinatown. ',
        'I live in Vancouver close by to Chinatown. ',
        'I live very nearby Chinatown. ',
        'I live close by Chinatown where the 105 Keefer site is. ',
        'Chinatown is very close by to where I currently live. ',
        'Chinatown is near where I live. ',
        'I am currently living nearby Chinatown. '
    ],
    work: [
        'I currently work in Chinatown. ',
        'My workplace is in Chinatown. ',
        'I work in the neighbourhood. ',
        'I currently work nearby the proposed development. ',
        'Currently, I work in Chinatown. ',
        'Currently, I work in the neighbourhood. '
    ],
    grewUp: [
        'I grew up in Chinatown. ',
        'Chinatown was where I grew up. ',
        'I grew up going to Chinatown as a kid. ',
        'I spent my childhood going to Chinatown. ',
        'Chinatown was a large part of my childhood. ',
        'Chinatown was a significant part of my upbringing. ',
        'I grew up in Vancouver going to Chinatown as a child. ',
        'As a child, Chinatown was a big part of my life. ',
        'Growing up, Chinatown played a large part in childhood. ',
        'The historic area has special significance to my upbringing. '
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
        'I strongly recommend that staff and council does not approve the ',
        'You should not approve the ',
        'Council and staff should not approve the ',
        'Staff should not recommend the ',
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
        'This building will perpetuate the unaffordability crisis in Vancouver. ',
        'This condo development is unaffordable to the local residents. ',
        'Million dollar condos are not affordable to the average person or people living in the DTES. '
    ],
    economicDisplacementPeopleReason: [
        'It will economically displace vulnerable seniors in Chinatown. ',
        'It will displace low income residents economically. ',
        'It will price low-income local out of the neighbourhood. ',
        'Low-income residents, especially seniors, will be priced out of Chinatown. '
    ],
    economicDisplacementBusinessReason: [
        'It will raise commercial lease prices and price affordable businesses out of Chinatown. ',
        'It will displace affordable Chinatown businesses that residents depend on. ',
        'It will price out affordable local businesses. ',
        'Small businesses in the area will be priced out due to increased taxes from developments like this. '
    ],
    inappropriateUseReason: [
        'This is a critical site in a historic area. It should not be used for market condos. ',
        'Putting a building with million dollar homes on that site right next to the memorial plaza is not appropriate in Chinatown. ',
        'The Keefer Triangle is a culturally significant site that should not be used for condos. ',
        'It is inapprpriate to use a culturally important site for development that does not respect Chinatown. '
    ],
    tooTallReason: [
        'It is taller than every other building in the surrounding area. ',
        'The height is greater than the average building next to it. ',
        'It is completely out of proportion. The average building around the area is two to three storeys tall and this one is twelve.',
        'It is too tall at six times the average building height of surrounding buildings'
    ],
    tooMassiveReason: [
        'It is more massive and dense than all the buildings next to it. ',
        'Its mass is out of scale with the neighbourhood. ',
        'The mass of this building is too large and unfit for the area. '
    ],
    rejectedByCHAPCReason: [
        'It was rejected by the City of Vancouver Chinatown Historic Area Planning Committee. ',
        'The current proposal was voted non-support by the Chinatown Historic Area Planning Committee. ',
        'It was rejected by a City committee, Chinatown Historic Area Plann Committee. ',
        'The Chinatown Historic Area Plann Committee did not support this application. '
    ],
    srHousingReason: [
        'The seniors housing proposed in woefully inadequate. ',
        'There is insufficient seniors housing. ',
        'Seniors housing offered does not justify the additional height requested. ',
        'One floor of seniors housing is not adequate and not worth the million dollar condos moving in. '
    ],
    precendentSettingReason: [
        'This will set a bad precendent for the all rezonings in Chinatown. ',
        'Approving this rezoning will set precendent to other rezonings in Chinatown. '
    ],
    memorialReason: [
        'It is a disgrace to treat the Chinese Veterans Memorial as a private front yard. ',
        'The Chinese Veterans Memorial should not be a private front yard for condo owners. ',
        'Our veterans did not fight wars to have their memorial treated as a private yard for condo owners. '
    ],
    noFamilyReasons: [
        'The significant decrease in family units is not appropriate for Chinatown. ',
        'Chinatown needs more family units for real families, not million dollar condos and bachelor suites for singles. ',
        'The reduction in family units is regrettable. ',
        'More families are needed in Chinatown, not single yuppies like what the applicant is proposing. '
    ],
    otherUses: [
        'Instead of market condos, I would like suggest the following alternatives for the site: ',
        'The following uses of the site is more appropriate: ',
        'I would recommend for the City to convert the site to the following uses instead: ',
        'Here are some of my ideas of what could be on the 105 Keefer site instead of condos: '
    ],
    socialHousingUse: [
        'More social housing',
        'Significantly more social housing',
        'More seniors housing and social housing'
    ],
    communityCentreUse: [
        'A community centre for the neighbourhood',
        'Community centre',
        'A neighbourhood community centre'
    ],
    plazaUse: [
        'An extension of the Memorial Plaza',
        'A plaza for the community',
        'A community plaza',
        'A plaza'
    ],
    intergenerationSpaceUse: [
        'An intergeneration space',
        'A space for all ages',
        'All ages community facillity',
        'A place for everyone from all ages and groups'
    ],
    greenSpaceUse: [
        'A park',
        'More green space',
        'A park for the community',
        'A community park'
    ],
    smallerBuildingUse: [
        'Fine-grain buildings that are broken up on the lot',
        'Narrower buildings that respect the saw-tooth nature of the historic area',
        'Smaller buildlings that make more sense in the fabric of Chinatown'
    ],
    closingBlock: [
        'In summary, this is a poor proposal and I urge council to reject it.',
        'This is an unacceptable application and council should not approve it.',
        'In conclusion, this proposal is not good for the neighbourhood. Council should not approve it.',
        'Chinatown does not need a development like this. Please reject the proposal.',
        'This rezoning application should not be approved becuase of the reasons I have listed above'
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
        '105 Keefer St. rezoning application',
        'RE: Rezoning at 105 Keefer St',
        'Comments for 105 Keefer rezoning',
        'Letter for 105 Keefer'
    ]
}