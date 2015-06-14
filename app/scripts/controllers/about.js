
angular.module('angularfullcalendarApp')
//.controller('MyrouteCtrl', function ($scope,$compile) {
.controller('AboutCtrl', function ($scope, uiCalendarConfig, $modal) {
  'use strict';


    /* ------------------------- */
    /* ------------------------- */


    /* START Event Details */

    var eStartDate = '2015-05-18' + ' 00:00:00';
    $scope.eventStartTime = '9:00 AM';
    var eEndDate = '2015-05-22'+ ' 24:00:00';
    $scope.eventEndTime = '6:00 PM';

    $scope.eventStartDate = new Date(eStartDate);
    $scope.eventEndDate = new Date(eEndDate);

  $scope.NLTtracks = {
    "DOS": [[{
        "title": "Common Picture",
        "start": "2015-05-21",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": "Common Picture Introductory Session",
        "SessionAim": "&lt;p&gt;&lt;span&gt;School Leaders Will Be Able To&#58;&lt;/span&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;Understandand state the purpose and importance of the common picture in achieving joyfulrigor.&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;Reflect andaction plan adherence to the common picture, pitfalls, and lessons learned fortheir specific school.&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;Viewcritical best practices for internalization of common picture.&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;Role-play rollingout a common picture routine.&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPrework": "&lt;ul&gt;&lt;li&gt;&lt;span&gt;Re-read the introduction to the common picture manual for your school. Print and come prepared to plan around one commonpicture that is staying the same for next year that you are responsible forrolling out to staff, it should be a smaller one that is not too complex (ie&#58; callsto attention, passing papers, first 3 steps of a transition, etc.) avoid thingslike lunch protocol, dismissal, arrival, or anything that has multiplecomplicated steps.&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;Complete Survey about Common Picture&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPreworkTime": null,
        "Track": "DOS"
    }, {
        "title": "Common Picture Part 1",
        "start": "2015-05-19 15:00:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;p&gt;Great leaders will&#58;&lt;/p&gt;&lt;p&gt;-identify areas where teachers may be resistant to the Common Picture strategy&lt;/p&gt;&lt;p&gt;-plan for crucial conversations to surface teacher resistance and invest them in the Common Picture strategy&lt;/p&gt;&lt;p&gt;-practice engaging in Common Picture crucial conversations&lt;/p&gt;",
        "SessionPrework": "&lt;p&gt;none&lt;/p&gt;",
        "SessionPreworkTime": null,
        "Track": "DOS"
    }, {
        "title": "D&I Leading Across Difference",
        "start": "2015-05-18 19:15:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;p&gt;Will be shared on 5/8&lt;/p&gt;",
        "SessionPrework": "&lt;p&gt;&lt;span style=&quot;color&#58; rgb(85, 85, 85);float&#58; none;background-color&#58; rgb(255, 255, 255);&quot;&gt;Will be shared on 5/8&lt;/span&gt;&lt;br/&gt;&lt;/p&gt;",
        "SessionPreworkTime": null,
        "Track": "DOS AD SSL"
    }, {
        "title": "Designing & Facilitating PD, Part 1",
        "start": "2015-05-22 21:00:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;p&gt;&lt;u&gt;School Leaders Will Be Able To&#58;&lt;/u&gt;&lt;/p&gt;&lt;p&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;describe the core elements of a PD plan, using the OAKMAC framework&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;begin designing and practice facilitating a PD session.&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot;color&#58; #1f497d;&quot;&gt;&lt;/span&gt;&lt;/p&gt;",
        "SessionPrework": "&lt;p style=&quot;color&#58; rgb(85, 85, 85);background-color&#58; rgb(255, 255, 255);&quot;&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;Bring the aim for a PD that you are going to plan and facilitating during August PD Days at your school.&#160; (Please choose the aim for a PD that focuses on skill building, not information download or norming&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;Read Ch. 4 from Paul Bambrick’s&lt;/span&gt;&#160;&lt;i&gt;&lt;a href=&quot;https&#58;//manyminds.achievementfirst.org/sites/NetworkSupport/TeamST/eventualtest/Session%20Documents/Bambrick%20Leverage%20Leadership%20-%20Chapter%204.pdf&quot;&gt;Leverage Leadership&lt;/a&gt;&lt;/i&gt;&#160;&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;/p&gt;",
        "SessionPreworkTime": 20,
        "Track": "DOS AD SSL"
    }, {
        "title": "Designing & Facilitating PD, Part 2",
        "start": "2015-06-12 15:30:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;p&gt;&lt;b&gt;&lt;span&gt;&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;&lt;p&gt;&lt;b&gt;&lt;u&gt;&lt;/u&gt;&lt;/b&gt;&lt;/p&gt;&lt;p&gt;&lt;/p&gt;&lt;p style=&quot;color&#58; rgb(85, 85, 85);background-color&#58; rgb(255, 255, 255);&quot;&gt;&lt;u&gt;School Leaders Will Be Able To&#58;&lt;/u&gt;&lt;/p&gt;&lt;ul style=&quot;color&#58; rgb(85, 85, 85);background-color&#58; rgb(255, 255, 255);&quot;&gt;&lt;li&gt;&lt;span&gt;describe the core elements of a PD plan, using the OAKMAC framework&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;begin designing and practice facilitating a PD session.&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;&lt;p&gt; &lt;/p&gt;",
        "SessionPrework": "&lt;p style=&quot;color&#58; rgb(85, 85, 85);background-color&#58; rgb(255, 255, 255);&quot;&gt;&lt;b&gt;&lt;span&gt;&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;&lt;ul style=&quot;color&#58; rgb(85, 85, 85);background-color&#58; rgb(255, 255, 255);&quot;&gt;&lt;li&gt;&lt;span&gt;Bring the aim for a PD that you are going to plan and facilitating during August PD Days at your school.&#160; (Please choose the aim for a PD that focuses on skill building, not information download or norming&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;Read Ch. 4 from Paul Bambrick’s&lt;/span&gt;&#160;&lt;i&gt;&lt;a href=&quot;https&#58;//manyminds.achievementfirst.org/sites/NetworkSupport/TeamST/eventualtest/Session%20Documents/Bambrick%20Leverage%20Leadership%20-%20Chapter%204.pdf&quot; style=&quot;color&#58; rgb(51, 122, 183);background-color&#58; transparent;&quot;&gt;Leverage Leadership&lt;/a&gt;&lt;/i&gt;&#160;&lt;/li&gt;&lt;/ul&gt;&lt;p style=&quot;color&#58; rgb(85, 85, 85);background-color&#58; rgb(255, 255, 255);&quot;&gt;&lt;span&gt;&lt;/span&gt;&lt;/p&gt;",
        "SessionPreworkTime": 20,
        "Track": "DOS AD SSL"
    }, {
        "title": "Leading at Achievement First",
        "start": "2015-05-19 15:30:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;p&gt;&lt;span&gt;&lt;u&gt;School Leaders Will Be Able To&#58;&lt;/u&gt;&lt;/span&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;Begin to ground their personal vision of leadership by building self-awareness around core values&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;Ground their leadership in the AF context by understanding how we articulate school success,our theory of change and our path forward&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPrework": "&lt;ul&gt;&lt;li&gt;&lt;span&gt;Read “&lt;a href=&quot;https&#58;//manyminds.achievementfirst.org/sites/Search/Pages/results.aspx?k=discovering%20your%20authentic%20leadership&quot;&gt;Discovering Your Authentic Leadership&lt;/a&gt;.”&lt;span&gt;&#160;&#160;&lt;/span&gt;&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;Highlight or star anything that resonates with you.&lt;b&gt;&lt;/b&gt;&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPreworkTime": 20,
        "Track": "DOS AD SSL"
    }, {
        "title": "Observation & Feedback",
        "start": "2015-05-18 15:00:00",
        "Grade": "K-12",
        "DefaultDuration": 180,
        "Description": "Observing and providing feedback is a key component of a school leader's role.  These two sessions provide leaders with an introduction of how to observe, gather evidence, make claims, generate action items, and lead effective feedback conversations.",
        "SessionAim": "&lt;p&gt;School Leaders Will Be Able To&#58;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;Gather low-inference evidence by taking literal notes in an observation&lt;/li&gt;&lt;li&gt;Use low-inference evidence to infer claims about a teacher's instructional practice&lt;/li&gt;&lt;li&gt;Generate actionable next steps for a high-impact claim&lt;/li&gt;&lt;li&gt;Plan and facilitate guided questions for an observation conversation.&lt;/li&gt;&lt;/ul&gt;",
        "SessionPrework": "&lt;p&gt;N/A&lt;/p&gt;",
        "SessionPreworkTime": 0,
        "Track": "DOS AD SSL"
    }, {
        "title": "People Leadership, Part 1",
        "start": "2015-05-20 19:15:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;p&gt;&lt;span&gt;&lt;u&gt;School Leaders Will Be Able To&#58;&lt;/u&gt;&lt;/span&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;Analyze a complex leadership challenge and diagnose the heart of the challenge.&lt;span&gt;&#160; &lt;/span&gt;&lt;/li&gt;&lt;li&gt;Develop an effective agenda for a difficult team meeting by integrating concepts from 5 Dysfunctions of a Team. &lt;/li&gt;&lt;/ul&gt;",
        "SessionPrework": "&lt;ul&gt;&lt;li&gt;&lt;span&gt;Read the summary article of &lt;u&gt;&lt;a href=&quot;https&#58;//manyminds.achievementfirst.org/sites/NetworkSupport/TeamST/eventualtest/Session%20Documents/The_Five_Dysfunctions_of_a_Team_A_Leadership_Fable.pdf&quot;&gt;Five Dysfunctions of a Team&lt;/a&gt;&lt;/u&gt;.&lt;/span&gt;&lt;br/&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPreworkTime": 10,
        "Track": "DOS AD SSL"
    }, {
        "title": "People Leadership, Part 2",
        "start": "2015-05-19 19:15:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;p&gt;&lt;span&gt;&lt;u&gt;School Leaders Will Be Able To&#58;&lt;/u&gt;&lt;/span&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;Analyze a complex leadership challenge and diagnose the heart of the challenge.&lt;span&gt;&#160; &lt;/span&gt;&lt;/li&gt;&lt;li&gt;Develop an effective agenda for a difficult 1&#58;1 conversation by integrating concepts from “The Net”&lt;/li&gt;&lt;li&gt;l&lt;span&gt;ead a challenging meeting by applying specific facilitation strategies&lt;/span&gt;&lt;br/&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPrework": "&lt;p&gt;N/A&lt;/p&gt;",
        "SessionPreworkTime": 0,
        "Track": "DOS AD SSL"
    }, {
        "title": "Personal effectiveness",
        "start": "2015-05-22 15:30:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": "This session is designed to focus on the personal effectiveness and organization demands of a leader.  Teachers have the majority of their time planned for them and follow a daily routine.  Leaders, however, need to flexibly plan and maximize their own time.  This session is designed to support new leaders in this transition.  At the end of the session, new leaders should be able to describe how their organizational system will have to change as they transition from teacher to leader and define the tools they will use (a comprehensive calendar, upcoming to do list to create a weekly worksheet).",
        "SessionAim": "&lt;p&gt;&lt;font color=&quot;#000000&quot; face=&quot;Times New Roman&quot; size=&quot;3&quot;&gt;&lt;/font&gt;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot;color&#58; black;&quot;&gt;&lt;font size=&quot;3&quot;&gt;School Leaders Will Be Able To&#58;&lt;/font&gt;&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;font color=&quot;#000000&quot; face=&quot;Times New Roman&quot; size=&quot;3&quot;&gt;&lt;/font&gt;&lt;/p&gt;&lt;ul style=&quot;direction&#58; ltr;&quot;&gt;&lt;li&gt;&lt;p&gt;&lt;span&gt;State why personal effectiveness matters and describe how “togetherness”is different as a leader than as a teacher&lt;/span&gt;&lt;/p&gt;&lt;/li&gt;&lt;li style=&quot;color&#58; rgb(0, 0, 0);&quot;&gt;&lt;p style=&quot;color&#58; rgb(0, 0, 0);&quot;&gt;&lt;span&gt;Describe components and attributes of organizational tools every leader needs&lt;/span&gt;&lt;/p&gt;&lt;/li&gt;&lt;li style=&quot;color&#58; rgb(0, 0, 0);&quot;&gt;&lt;p style=&quot;color&#58; rgb(0, 0, 0);&quot;&gt;&lt;span&gt;&lt;/span&gt;&lt;span&gt;&lt;font color=&quot;#000000&quot;&gt;Brainstorm solutions to role specific “priority killers”&lt;/font&gt;&lt;/span&gt;&lt;span&gt;&lt;font color=&quot;#000000&quot;&gt; &lt;/font&gt;&lt;/span&gt;&lt;/p&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPrework": "&lt;p&gt;None&lt;br/&gt;&lt;/p&gt;",
        "SessionPreworkTime": 0,
        "Track": "DOS AD SSL"
    }, {
        "title": "Personal Effectiveness in Your New Role",
        "start": "2015-05-20 21:00:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": "This session is designed to focus on the personal effectiveness and organization demands of a leader.  Teachers have the majority of their time planned for them and follow a daily routine.  Leaders, however, need to flexibly plan and maximize their own time.  This session is designed to support new leaders in this transition.  At the end of the session, new leaders should be able to describe how their organizational system will have to change as they transition from teacher to leader and define the tools they will use (a comprehensive calendar, upcoming to do list to create a weekly worksheet).",
        "SessionAim": "&lt;p&gt;&lt;span style=&quot;color&#58; black;&quot;&gt;School Leaders Will Be Able To&#58;&lt;/span&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;State why personal effectiveness matters and describe how “togetherness”is different as a leader than as a teacher&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;Describe components and attributes of organizational tools every leader needs&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;&lt;span&gt;Brainstorm solutionsto role specific “priority killers”&lt;/span&gt;&lt;span&gt; &lt;/span&gt;&lt;br/&gt;&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPrework": "&lt;p&gt;None!&lt;/p&gt;",
        "SessionPreworkTime": 0,
        "Track": "DOS AD SSL"
    }, {
        "title": "Program Overview Introduction and Purpose",
        "start": "2015-06-12 17:15:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": "In this session, teachers will engage with the program tenets so that they deeply understand them and can connect them to the structure of our program.  We will review the structure of the program at high level and then participants will engage with their specific course and scope and sequence with their course facilitator.",
        "SessionAim": "&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;p&gt;&lt;span&gt;Teachers Will Be Able To&#58;&lt;/span&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;&#160;identify components of the PO and articulate the purpose.&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;&#160;locate different components of the PO ask clarifying questions.&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;&#160;articulate how the Course of Study will help us plan our Scope and Sequence for the year. &lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPrework": "&lt;p&gt;&lt;span&gt;Read and annotate the Specials Program Overview (Overview and Tenets, Specials at a Glance, Course of Study for teachers' discipline)&lt;/span&gt;&lt;/p&gt;",
        "SessionPreworkTime": 30,
        "Track": "DOS AD SSL"
    }, {
        "title": "Real Time Coaching",
        "start": "2015-05-22 17:15:00",
        "Grade": "K-12",
        "DefaultDuration": 180,
        "Description": null,
        "SessionAim": "&lt;p&gt;&lt;span style=&quot;color&#58; black;&quot;&gt;School Leaders Will Be Able To&#58;&lt;/span&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;span style=&quot;color&#58; black;&quot;&gt;&lt;/span&gt;Implement real-time feedback that is strategic, supportive and transformative.&lt;br/&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPrework": "&lt;p&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;Bring&#160;&lt;/span&gt;&lt;span&gt;one recent 20-min video of a weak(er) teacher who will be returning next year and is likely going to struggle with classroom management at the start of the 14-15 school year.  The video should be of the teacher actively teaching (ideally in front of a full-class rather than small group) giving directions and conducting direct/interactive instruction (not during independent work time, etc.).  The video should show the teacher and as many scholars as possible in the frame.  It is fine if school leaders from the same school bring the same video because you will be grouped with leaders from other schools; however, each leader needs the video ready to be viewed on their own charged laptop for the session (store the video on your hard drive and do not rely on internet please)&lt;/span&gt;&lt;br/&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;Bring headphones to use when viewing the videos.&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;",
        "SessionPreworkTime": 20,
        "Track": "DOS AD SSL"
    }, {
        "title": "Removal and Re-Entry",
        "start": "2015-05-20 22:30:00",
        "Grade": "K-12",
        "DefaultDuration": 180,
        "Description": "Two 90-minute sessions on Removal and Re-Entry",
        "SessionAim": "&lt;p&gt;&lt;span&gt;SchoolLeaders Will Be Able To&#58;&lt;/span&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;Engage in mindset building activities focused on shifting current mindsets in their schools that are detrimental to scholars.&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;State the rationale behind 4 key mindsets around removal/re-entry.&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;Build a bank of escalating logical consequences for common off-taskbehavior.&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;Practice executing logical consequences in isolation, in a lesson, and coaching a teacher.&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;Study an effective reparative conversation and pull out the foundational elements.&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;Engage in an elementary and secondary videoprotocol of an effective push-in &lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;Practice an effective reparative conversation (ReCon)&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPrework": "&lt;ul&gt;&lt;li&gt;&lt;span&gt;Read the Removal and Re-Entry Manual pgs. 2-18(10m)&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;View Video of Reparative Conversation (Francis Giesler)&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;Answer reflection questions below (10m)&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;What is the roadmap of questioning to the reparative conversation? What are the exact questions?&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;What is the end goal of this reparative conversation for the teacher? For the scholar?&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;What would be the impact if every adult could skillfully and effectively have this conversation with a scholar after a breach in behavior?&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPreworkTime": 45,
        "Track": "DOS"
    }, {
        "title": "Special Services @ AF",
        "start": "2015-06-12 21:00:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;p&gt;School Leaders Will Be Able To&#58;&#160;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;Synthesize key ideas in the history of special education&lt;/li&gt;&lt;li&gt;&lt;span style=&quot;color&#58; black;&quot;&gt;Identify the implications of tactical application of procedural safeguards vs. authentic compliance on the school, students, and families&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span style=&quot;color&#58; black;&quot;&gt;Generate examples of authentic &lt;/span&gt;&lt;span style=&quot;color&#58; black;&quot;&gt;compliance&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span style=&quot;color&#58; black;&quot;&gt;Assess compliance at their school and identify areas for improvement&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPrework": "&lt;p&gt;None&#160;&lt;/p&gt;",
        "SessionPreworkTime": null,
        "Track": "DOS AD SSL"
    }, {
        "title": "Taxonomy:  Precise Directions",
        "start": "2015-06-12 22:30:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;p&gt;New Leaders will&#58;&lt;/p&gt;&lt;p&gt;qArticulate how MVP and Narration are foundational to meeting the needs of all scholars, reaching a rigorous college ready bar and ensuring our classrooms are joyful&lt;/p&gt;&lt;p&gt;qCraft precise directions that adhere to the MVP framework&lt;/p&gt;&lt;p&gt;qPractice delivering precise directions that adhere to the MVP framework&lt;br/&gt;&lt;/p&gt;",
        "SessionPrework": "&lt;p&gt;none&lt;/p&gt;",
        "SessionPreworkTime": null,
        "Track": "DOS AD SSL"
    }, {
        "title": "Taxonomy:  Strong Voice",
        "start": "2015-05-21 15:00:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;p&gt;New Leaders will&#58;&lt;/p&gt;&lt;p&gt;qExplain how Strong Voice support us in commanding attention and creating a sense of urgency that is both warm and demanding.&lt;/p&gt;&lt;p&gt;qPractice Be Seen Looking, Square Up, and Economy of Language in order to command authority and exude influence in the classroom. &lt;br/&gt;&lt;/p&gt;",
        "SessionPrework": "&lt;p&gt;none&lt;/p&gt;",
        "SessionPreworkTime": null,
        "Track": "DOS AD SSL"
    }, {
        "title": "Taxonomy: Narration",
        "start": "2015-05-18 15:30:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;p&gt;New Leaders will&#58;&lt;/p&gt;&lt;p&gt;qArticulate how MVP and Narration are foundational to meeting the needs of all scholars, reaching a rigorous college ready bar and ensuring our classrooms are joyful&lt;/p&gt;&lt;p&gt;qCraft narration that adheres to the effectiveness framework&lt;/p&gt;&lt;p&gt;qPractice narrating in a manner that adheres to the effectiveness framework and supports every single scholar in the classroom&lt;br/&gt;&lt;/p&gt;",
        "SessionPrework": "&lt;p&gt;none&lt;/p&gt;",
        "SessionPreworkTime": null,
        "Track": "DOS AD SSL"
    }, {
        "title": "The First 60 Days as an Academic Dean (Condensed)",
        "start": "2015-05-22 17:15:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": "This session is the final session that internal new leaders will attend during their week of training.  This session is designed to help new school leaders plan for success in their first 60 days of being a school leader.  Ultimately, each school leader needs to be able to effectively manage and coach their teachers as well as serve as broader leaders across the school. This is a dramatic shift from managing children to managing adults and it is paired with the shift of owning success within just one classroom to now owning the success across a school.  There is a lot to think about and this session is designed to help new school leaders prioritize what to win on as they transition into these roles.",
        "SessionAim": "&lt;p&gt;&lt;span&gt;School Leaders Will Be Able To…&lt;/span&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;Identify the items they need to know, have a plan for, and be able to do in the first 60 days of being a dean.&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;&lt;span&gt;Synthesize their wins, next steps, and questions in order to be successful in the first 60 days.&lt;/span&gt;&lt;br/&gt;&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPrework": "&lt;p style=&quot;text-align&#58; justify;&quot;&gt;&lt;span&gt;Come to the session with your principal's answer to this question&#58;&#160;&lt;span style=&quot;color&#58; rgb(85, 85, 85);text-align&#58; justify;float&#58; none;background-color&#58; rgb(255, 255, 255);&quot;&gt;“What are the school’s goals for the 2015-2016 school year?”&lt;span class=&quot;Apple-converted-space&quot;&gt;&#160;&lt;/span&gt;&lt;/span&gt;&lt;b&gt;&lt;/b&gt;&lt;/span&gt;&lt;/p&gt;",
        "SessionPreworkTime": 5,
        "Track": "DOS AD SSL"
    }, {
        "title": "The First 60 Days: Putting It All Together",
        "start": "2015-05-22 19:15:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": null,
        "SessionPrework": null,
        "SessionPreworkTime": null,
        "Track": "DOS AD SSL"
    }, {
        "title": "Vision of Excellence for our Roles",
        "start": "2015-05-19 22:30:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;p&gt;SLWBAT articulate their key roles and responsibilities as a leader at AF.&lt;/p&gt;&lt;p&gt;SLWBAT understand the intersections between the AD, DOS and SSL roles and begin to understand the implications of working together&lt;/p&gt;&lt;p&gt;SLWBAT develop a key set of questions for engaging their Principal as they tailor their R&amp;amp;R , goals and priorities to their school site&lt;/p&gt;",
        "SessionPrework": "&lt;p&gt;&lt;b&gt;&lt;span&gt;Pre-work Directions&#58; &lt;/span&gt;&lt;/b&gt;&lt;span&gt;Please read the following pages from Patrick Lencioni’s &lt;i&gt;The Advantage&#58; &lt;/i&gt;pg. 63-70 and pg. 130-132.&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;i&gt;&lt;span&gt;&lt;span&gt;&#160;&lt;/span&gt;&lt;/span&gt;&lt;/i&gt;&lt;span&gt;As you read, consider the following questions&#58;&lt;/span&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;According to Lencioni, how do collective goals and clarity of roles intersect?&lt;b&gt;&lt;/b&gt;&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;Can you think of a team you were on when you one of the challenges Lencioni highlights has come up?&lt;span&gt;&#160; &lt;/span&gt;What was the impact? &lt;b&gt;&lt;/b&gt;&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;span&gt;Be prepared to share your thinking about the key points in these short sections of the text.&lt;/span&gt;&lt;/p&gt;",
        "SessionPreworkTime": 20,
        "Track": "DOS AD SSL"
    }, {
        "title": "Welcome to Management",
        "start": "2015-05-20 15:30:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;p&gt;&lt;span&gt;&lt;u&gt;School Leaders Will Be Able To&#58;&lt;/u&gt;&lt;/span&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;span style=&quot;color&#58; black;&quot;&gt;Develop a solid understanding of the AF leadership competencies and the skill sets and mindsets behind them&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span style=&quot;color&#58; black;&quot;&gt;&lt;span style=&quot;color&#58; black;&quot;&gt;Build self-awareness through reflection on the AF competencies and your work and experiences so fa&lt;/span&gt;&amp;#28;r&lt;br/&gt;&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPrework": "&lt;p&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;Read pages 15-20 of chapter 1 of &lt;u&gt;&lt;a href=&quot;https&#58;//manyminds.achievementfirst.org/sites/NetworkSupport/TeamST/eventualtest/Session%20Documents/Leadership%20Pipeline_ch1.pdf&quot;&gt;Leadership Pipeline&lt;/a&gt;&lt;/u&gt;.&#160;Highlight anything that surprised you or that you had not thought of before.&lt;/span&gt;&lt;br/&gt;&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;/p&gt;",
        "Track": "DOS AD SSL",
        "SessionPreworkTime": 15
    }]],
    "AD": [[{
        "title": "Academic Accomodations:  Pitching to the Top 5% & Getting All Students There",
        "start": "2015-06-12 15:30:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;ul&gt;&lt;li&gt;&lt;span&gt;SLWBAT use the seven part framework to determine appropriate accommodations for students&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;SLWBAT usestudent level data to determine reasons for student’s output failure&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;SLWAT matchappropriate accommodations to students based on student data&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;SLWBAT useongoing data collection to assess efficacy of accommodations and adjust asnecessary&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPrework": "&lt;p&gt;Complete part 1 and 2 of the &lt;a href=&quot;https&#58;//manyminds.achievementfirst.org/sites/NetworkSupport/TeamST/eventualtest/Session%20Documents/NLT_Academic%20Accommodations_Prework.docx&quot;&gt;Academic Accommodation Prework&lt;/a&gt;.&#160;&lt;/p&gt;",
        "SessionPreworkTime": 10,
        "Track": "DOS AD SSL"
    }, {
        "title": "Co-Teaching Basics/Coaching Two Teachers",
        "start": "2015-05-18 22:30:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;div&gt;&lt;u&gt;School Leaders Will Be Able To&#58;&lt;/u&gt;&lt;/div&gt;&lt;ul&gt;&lt;li&gt;articulate how strong co-teaching raises student achievement&lt;/li&gt;&lt;li&gt;explain how a “flow of the block” can maximize teachers’ effectiveness&lt;/li&gt;&lt;li&gt;understand how levels build&lt;/li&gt;&lt;li&gt;and analyze and critique LTPs to support strategic implementation and teacher development.&lt;br/&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPrework": "&lt;p&gt;N/A&lt;/p&gt;",
        "SessionPreworkTime": 0,
        "Track": "AD and SSL"
    }, {
        "title": "D&I Leading Across Difference",
        "start": "2015-05-18 19:15:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;p&gt;Will be shared on 5/8&lt;/p&gt;",
        "SessionPrework": "&lt;p&gt;&lt;span style=&quot;color&#58; rgb(85, 85, 85);float&#58; none;background-color&#58; rgb(255, 255, 255);&quot;&gt;Will be shared on 5/8&lt;/span&gt;&lt;br/&gt;&lt;/p&gt;",
        "SessionPreworkTime": null,
        "Track": "DOS AD SSL"
    }, {
        "title": "Designing & Facilitating PD, Part 1",
        "start": "2015-05-22 21:00:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;p&gt;&lt;u&gt;School Leaders Will Be Able To&#58;&lt;/u&gt;&lt;/p&gt;&lt;p&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;describe the core elements of a PD plan, using the OAKMAC framework&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;begin designing and practice facilitating a PD session.&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot;color&#58; #1f497d;&quot;&gt;&lt;/span&gt;&lt;/p&gt;",
        "SessionPrework": "&lt;p style=&quot;color&#58; rgb(85, 85, 85);background-color&#58; rgb(255, 255, 255);&quot;&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;Bring the aim for a PD that you are going to plan and facilitating during August PD Days at your school.&#160; (Please choose the aim for a PD that focuses on skill building, not information download or norming&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;Read Ch. 4 from Paul Bambrick’s&lt;/span&gt;&#160;&lt;i&gt;&lt;a href=&quot;https&#58;//manyminds.achievementfirst.org/sites/NetworkSupport/TeamST/eventualtest/Session%20Documents/Bambrick%20Leverage%20Leadership%20-%20Chapter%204.pdf&quot;&gt;Leverage Leadership&lt;/a&gt;&lt;/i&gt;&#160;&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;/p&gt;",
        "SessionPreworkTime": 20,
        "Track": "DOS AD SSL"
    }, {
        "title": "Designing & Facilitating PD, Part 2",
        "start": "2015-06-12 15:30:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;p&gt;&lt;b&gt;&lt;span&gt;&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;&lt;p&gt;&lt;b&gt;&lt;u&gt;&lt;/u&gt;&lt;/b&gt;&lt;/p&gt;&lt;p&gt;&lt;/p&gt;&lt;p style=&quot;color&#58; rgb(85, 85, 85);background-color&#58; rgb(255, 255, 255);&quot;&gt;&lt;u&gt;School Leaders Will Be Able To&#58;&lt;/u&gt;&lt;/p&gt;&lt;ul style=&quot;color&#58; rgb(85, 85, 85);background-color&#58; rgb(255, 255, 255);&quot;&gt;&lt;li&gt;&lt;span&gt;describe the core elements of a PD plan, using the OAKMAC framework&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;begin designing and practice facilitating a PD session.&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;&lt;p&gt; &lt;/p&gt;",
        "SessionPrework": "&lt;p style=&quot;color&#58; rgb(85, 85, 85);background-color&#58; rgb(255, 255, 255);&quot;&gt;&lt;b&gt;&lt;span&gt;&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;&lt;ul style=&quot;color&#58; rgb(85, 85, 85);background-color&#58; rgb(255, 255, 255);&quot;&gt;&lt;li&gt;&lt;span&gt;Bring the aim for a PD that you are going to plan and facilitating during August PD Days at your school.&#160; (Please choose the aim for a PD that focuses on skill building, not information download or norming&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;Read Ch. 4 from Paul Bambrick’s&lt;/span&gt;&#160;&lt;i&gt;&lt;a href=&quot;https&#58;//manyminds.achievementfirst.org/sites/NetworkSupport/TeamST/eventualtest/Session%20Documents/Bambrick%20Leverage%20Leadership%20-%20Chapter%204.pdf&quot; style=&quot;color&#58; rgb(51, 122, 183);background-color&#58; transparent;&quot;&gt;Leverage Leadership&lt;/a&gt;&lt;/i&gt;&#160;&lt;/li&gt;&lt;/ul&gt;&lt;p style=&quot;color&#58; rgb(85, 85, 85);background-color&#58; rgb(255, 255, 255);&quot;&gt;&lt;span&gt;&lt;/span&gt;&lt;/p&gt;",
        "SessionPreworkTime": 20,
        "Track": "DOS AD SSL"
    }, {
        "title": "Leading at Achievement First",
        "start": "2015-05-19 15:30:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;p&gt;&lt;span&gt;&lt;u&gt;School Leaders Will Be Able To&#58;&lt;/u&gt;&lt;/span&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;Begin to ground their personal vision of leadership by building self-awareness around core values&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;Ground their leadership in the AF context by understanding how we articulate school success,our theory of change and our path forward&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPrework": "&lt;ul&gt;&lt;li&gt;&lt;span&gt;Read “&lt;a href=&quot;https&#58;//manyminds.achievementfirst.org/sites/Search/Pages/results.aspx?k=discovering%20your%20authentic%20leadership&quot;&gt;Discovering Your Authentic Leadership&lt;/a&gt;.”&lt;span&gt;&#160;&#160;&lt;/span&gt;&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;Highlight or star anything that resonates with you.&lt;b&gt;&lt;/b&gt;&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPreworkTime": 20,
        "Track": "DOS AD SSL"
    }, {
        "title": "Observation & Feedback",
        "start": "2015-05-18 15:00:00",
        "Grade": "K-12",
        "DefaultDuration": 180,
        "Description": "Observing and providing feedback is a key component of a school leader's role.  These two sessions provide leaders with an introduction of how to observe, gather evidence, make claims, generate action items, and lead effective feedback conversations.",
        "SessionAim": "&lt;p&gt;School Leaders Will Be Able To&#58;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;Gather low-inference evidence by taking literal notes in an observation&lt;/li&gt;&lt;li&gt;Use low-inference evidence to infer claims about a teacher's instructional practice&lt;/li&gt;&lt;li&gt;Generate actionable next steps for a high-impact claim&lt;/li&gt;&lt;li&gt;Plan and facilitate guided questions for an observation conversation.&lt;/li&gt;&lt;/ul&gt;",
        "SessionPrework": "&lt;p&gt;N/A&lt;/p&gt;",
        "SessionPreworkTime": 0,
        "Track": "DOS AD SSL"
    }, {
        "title": "People Leadership, Part 1",
        "start": "2015-05-20 19:15:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;p&gt;&lt;span&gt;&lt;u&gt;School Leaders Will Be Able To&#58;&lt;/u&gt;&lt;/span&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;Analyze a complex leadership challenge and diagnose the heart of the challenge.&lt;span&gt;&#160; &lt;/span&gt;&lt;/li&gt;&lt;li&gt;Develop an effective agenda for a difficult team meeting by integrating concepts from 5 Dysfunctions of a Team. &lt;/li&gt;&lt;/ul&gt;",
        "SessionPrework": "&lt;ul&gt;&lt;li&gt;&lt;span&gt;Read the summary article of &lt;u&gt;&lt;a href=&quot;https&#58;//manyminds.achievementfirst.org/sites/NetworkSupport/TeamST/eventualtest/Session%20Documents/The_Five_Dysfunctions_of_a_Team_A_Leadership_Fable.pdf&quot;&gt;Five Dysfunctions of a Team&lt;/a&gt;&lt;/u&gt;.&lt;/span&gt;&lt;br/&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPreworkTime": 10,
        "Track": "DOS AD SSL"
    }, {
        "title": "People Leadership, Part 2",
        "start": "2015-05-19 19:15:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;p&gt;&lt;span&gt;&lt;u&gt;School Leaders Will Be Able To&#58;&lt;/u&gt;&lt;/span&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;Analyze a complex leadership challenge and diagnose the heart of the challenge.&lt;span&gt;&#160; &lt;/span&gt;&lt;/li&gt;&lt;li&gt;Develop an effective agenda for a difficult 1&#58;1 conversation by integrating concepts from “The Net”&lt;/li&gt;&lt;li&gt;l&lt;span&gt;ead a challenging meeting by applying specific facilitation strategies&lt;/span&gt;&lt;br/&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPrework": "&lt;p&gt;N/A&lt;/p&gt;",
        "SessionPreworkTime": 0,
        "Track": "DOS AD SSL"
    }, {
        "title": "Personal effectiveness",
        "start": "2015-05-22 15:30:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": "This session is designed to focus on the personal effectiveness and organization demands of a leader.  Teachers have the majority of their time planned for them and follow a daily routine.  Leaders, however, need to flexibly plan and maximize their own time.  This session is designed to support new leaders in this transition.  At the end of the session, new leaders should be able to describe how their organizational system will have to change as they transition from teacher to leader and define the tools they will use (a comprehensive calendar, upcoming to do list to create a weekly worksheet).",
        "SessionAim": "&lt;p&gt;&lt;font color=&quot;#000000&quot; face=&quot;Times New Roman&quot; size=&quot;3&quot;&gt;&lt;/font&gt;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot;color&#58; black;&quot;&gt;&lt;font size=&quot;3&quot;&gt;School Leaders Will Be Able To&#58;&lt;/font&gt;&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;font color=&quot;#000000&quot; face=&quot;Times New Roman&quot; size=&quot;3&quot;&gt;&lt;/font&gt;&lt;/p&gt;&lt;ul style=&quot;direction&#58; ltr;&quot;&gt;&lt;li&gt;&lt;p&gt;&lt;span&gt;State why personal effectiveness matters and describe how “togetherness”is different as a leader than as a teacher&lt;/span&gt;&lt;/p&gt;&lt;/li&gt;&lt;li style=&quot;color&#58; rgb(0, 0, 0);&quot;&gt;&lt;p style=&quot;color&#58; rgb(0, 0, 0);&quot;&gt;&lt;span&gt;Describe components and attributes of organizational tools every leader needs&lt;/span&gt;&lt;/p&gt;&lt;/li&gt;&lt;li style=&quot;color&#58; rgb(0, 0, 0);&quot;&gt;&lt;p style=&quot;color&#58; rgb(0, 0, 0);&quot;&gt;&lt;span&gt;&lt;/span&gt;&lt;span&gt;&lt;font color=&quot;#000000&quot;&gt;Brainstorm solutions to role specific “priority killers”&lt;/font&gt;&lt;/span&gt;&lt;span&gt;&lt;font color=&quot;#000000&quot;&gt; &lt;/font&gt;&lt;/span&gt;&lt;/p&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPrework": "&lt;p&gt;None&lt;br/&gt;&lt;/p&gt;",
        "SessionPreworkTime": 0,
        "Track": "DOS AD SSL"
    }, {
        "title": "Personal Effectiveness in Your New Role",
        "start": "2015-05-20 21:00:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": "This session is designed to focus on the personal effectiveness and organization demands of a leader.  Teachers have the majority of their time planned for them and follow a daily routine.  Leaders, however, need to flexibly plan and maximize their own time.  This session is designed to support new leaders in this transition.  At the end of the session, new leaders should be able to describe how their organizational system will have to change as they transition from teacher to leader and define the tools they will use (a comprehensive calendar, upcoming to do list to create a weekly worksheet).",
        "SessionAim": "&lt;p&gt;&lt;span style=&quot;color&#58; black;&quot;&gt;School Leaders Will Be Able To&#58;&lt;/span&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;State why personal effectiveness matters and describe how “togetherness”is different as a leader than as a teacher&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;Describe components and attributes of organizational tools every leader needs&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;&lt;span&gt;Brainstorm solutionsto role specific “priority killers”&lt;/span&gt;&lt;span&gt; &lt;/span&gt;&lt;br/&gt;&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPrework": "&lt;p&gt;None!&lt;/p&gt;",
        "SessionPreworkTime": 0,
        "Track": "DOS AD SSL"
    }, {
        "title": "Program Overview Introduction and Purpose",
        "start": "2015-06-12 17:15:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": "In this session, teachers will engage with the program tenets so that they deeply understand them and can connect them to the structure of our program.  We will review the structure of the program at high level and then participants will engage with their specific course and scope and sequence with their course facilitator.",
        "SessionAim": "&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;p&gt;&lt;span&gt;Teachers Will Be Able To&#58;&lt;/span&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;&#160;identify components of the PO and articulate the purpose.&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;&#160;locate different components of the PO ask clarifying questions.&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;&#160;articulate how the Course of Study will help us plan our Scope and Sequence for the year. &lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPrework": "&lt;p&gt;&lt;span&gt;Read and annotate the Specials Program Overview (Overview and Tenets, Specials at a Glance, Course of Study for teachers' discipline)&lt;/span&gt;&lt;/p&gt;",
        "SessionPreworkTime": 30,
        "Track": "DOS AD SSL"
    }, {
        "title": "Real Time Coaching",
        "start": "2015-05-22 17:15:00",
        "Grade": "K-12",
        "DefaultDuration": 180,
        "Description": null,
        "SessionAim": "&lt;p&gt;&lt;span style=&quot;color&#58; black;&quot;&gt;School Leaders Will Be Able To&#58;&lt;/span&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;span style=&quot;color&#58; black;&quot;&gt;&lt;/span&gt;Implement real-time feedback that is strategic, supportive and transformative.&lt;br/&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPrework": "&lt;p&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;Bring&#160;&lt;/span&gt;&lt;span&gt;one recent 20-min video of a weak(er) teacher who will be returning next year and is likely going to struggle with classroom management at the start of the 14-15 school year.  The video should be of the teacher actively teaching (ideally in front of a full-class rather than small group) giving directions and conducting direct/interactive instruction (not during independent work time, etc.).  The video should show the teacher and as many scholars as possible in the frame.  It is fine if school leaders from the same school bring the same video because you will be grouped with leaders from other schools; however, each leader needs the video ready to be viewed on their own charged laptop for the session (store the video on your hard drive and do not rely on internet please)&lt;/span&gt;&lt;br/&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;Bring headphones to use when viewing the videos.&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;",
        "SessionPreworkTime": 20,
        "Track": "DOS AD SSL"
    }, {
        "title": "Special Services @ AF",
        "start": "2015-06-12 21:00:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;p&gt;School Leaders Will Be Able To&#58;&#160;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;Synthesize key ideas in the history of special education&lt;/li&gt;&lt;li&gt;&lt;span style=&quot;color&#58; black;&quot;&gt;Identify the implications of tactical application of procedural safeguards vs. authentic compliance on the school, students, and families&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span style=&quot;color&#58; black;&quot;&gt;Generate examples of authentic &lt;/span&gt;&lt;span style=&quot;color&#58; black;&quot;&gt;compliance&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span style=&quot;color&#58; black;&quot;&gt;Assess compliance at their school and identify areas for improvement&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPrework": "&lt;p&gt;None&#160;&lt;/p&gt;",
        "SessionPreworkTime": null,
        "Track": "DOS AD SSL"
    }, {
        "title": "Taxonomy:  Precise Directions",
        "start": "2015-06-12 22:30:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;p&gt;New Leaders will&#58;&lt;/p&gt;&lt;p&gt;qArticulate how MVP and Narration are foundational to meeting the needs of all scholars, reaching a rigorous college ready bar and ensuring our classrooms are joyful&lt;/p&gt;&lt;p&gt;qCraft precise directions that adhere to the MVP framework&lt;/p&gt;&lt;p&gt;qPractice delivering precise directions that adhere to the MVP framework&lt;br/&gt;&lt;/p&gt;",
        "SessionPrework": "&lt;p&gt;none&lt;/p&gt;",
        "SessionPreworkTime": null,
        "Track": "DOS AD SSL"
    }, {
        "title": "Taxonomy:  Strong Voice",
        "start": "2015-05-21 15:00:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;p&gt;New Leaders will&#58;&lt;/p&gt;&lt;p&gt;qExplain how Strong Voice support us in commanding attention and creating a sense of urgency that is both warm and demanding.&lt;/p&gt;&lt;p&gt;qPractice Be Seen Looking, Square Up, and Economy of Language in order to command authority and exude influence in the classroom. &lt;br/&gt;&lt;/p&gt;",
        "SessionPrework": "&lt;p&gt;none&lt;/p&gt;",
        "SessionPreworkTime": null,
        "Track": "DOS AD SSL"
    }, {
        "title": "Taxonomy: Narration",
        "start": "2015-05-18 15:30:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;p&gt;New Leaders will&#58;&lt;/p&gt;&lt;p&gt;qArticulate how MVP and Narration are foundational to meeting the needs of all scholars, reaching a rigorous college ready bar and ensuring our classrooms are joyful&lt;/p&gt;&lt;p&gt;qCraft narration that adheres to the effectiveness framework&lt;/p&gt;&lt;p&gt;qPractice narrating in a manner that adheres to the effectiveness framework and supports every single scholar in the classroom&lt;br/&gt;&lt;/p&gt;",
        "SessionPrework": "&lt;p&gt;none&lt;/p&gt;",
        "SessionPreworkTime": null,
        "Track": "DOS AD SSL"
    }, {
        "title": "The First 60 Days as an Academic Dean (Condensed)",
        "start": "2015-05-22 17:15:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": "This session is the final session that internal new leaders will attend during their week of training.  This session is designed to help new school leaders plan for success in their first 60 days of being a school leader.  Ultimately, each school leader needs to be able to effectively manage and coach their teachers as well as serve as broader leaders across the school. This is a dramatic shift from managing children to managing adults and it is paired with the shift of owning success within just one classroom to now owning the success across a school.  There is a lot to think about and this session is designed to help new school leaders prioritize what to win on as they transition into these roles.",
        "SessionAim": "&lt;p&gt;&lt;span&gt;School Leaders Will Be Able To…&lt;/span&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;Identify the items they need to know, have a plan for, and be able to do in the first 60 days of being a dean.&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;&lt;span&gt;Synthesize their wins, next steps, and questions in order to be successful in the first 60 days.&lt;/span&gt;&lt;br/&gt;&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPrework": "&lt;p style=&quot;text-align&#58; justify;&quot;&gt;&lt;span&gt;Come to the session with your principal's answer to this question&#58;&#160;&lt;span style=&quot;color&#58; rgb(85, 85, 85);text-align&#58; justify;float&#58; none;background-color&#58; rgb(255, 255, 255);&quot;&gt;“What are the school’s goals for the 2015-2016 school year?”&lt;span class=&quot;Apple-converted-space&quot;&gt;&#160;&lt;/span&gt;&lt;/span&gt;&lt;b&gt;&lt;/b&gt;&lt;/span&gt;&lt;/p&gt;",
        "SessionPreworkTime": 5,
        "Track": "DOS AD SSL"
    }, {
        "title": "The First 60 Days: Putting It All Together",
        "start": "2015-05-22 19:15:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": null,
        "SessionPrework": null,
        "SessionPreworkTime": null,
        "Track": "DOS AD SSL"
    }, {
        "title": "Vision of Excellence for our Roles",
        "start": "2015-05-19 22:30:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;p&gt;SLWBAT articulate their key roles and responsibilities as a leader at AF.&lt;/p&gt;&lt;p&gt;SLWBAT understand the intersections between the AD, DOS and SSL roles and begin to understand the implications of working together&lt;/p&gt;&lt;p&gt;SLWBAT develop a key set of questions for engaging their Principal as they tailor their R&amp;amp;R , goals and priorities to their school site&lt;/p&gt;",
        "SessionPrework": "&lt;p&gt;&lt;b&gt;&lt;span&gt;Pre-work Directions&#58; &lt;/span&gt;&lt;/b&gt;&lt;span&gt;Please read the following pages from Patrick Lencioni’s &lt;i&gt;The Advantage&#58; &lt;/i&gt;pg. 63-70 and pg. 130-132.&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;i&gt;&lt;span&gt;&lt;span&gt;&#160;&lt;/span&gt;&lt;/span&gt;&lt;/i&gt;&lt;span&gt;As you read, consider the following questions&#58;&lt;/span&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;According to Lencioni, how do collective goals and clarity of roles intersect?&lt;b&gt;&lt;/b&gt;&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;Can you think of a team you were on when you one of the challenges Lencioni highlights has come up?&lt;span&gt;&#160; &lt;/span&gt;What was the impact? &lt;b&gt;&lt;/b&gt;&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;span&gt;Be prepared to share your thinking about the key points in these short sections of the text.&lt;/span&gt;&lt;/p&gt;",
        "SessionPreworkTime": 20,
        "Track": "DOS AD SSL"
    }, {
        "title": "Welcome to Management",
        "start": "2015-05-20 15:30:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;p&gt;&lt;span&gt;&lt;u&gt;School Leaders Will Be Able To&#58;&lt;/u&gt;&lt;/span&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;span style=&quot;color&#58; black;&quot;&gt;Develop a solid understanding of the AF leadership competencies and the skill sets and mindsets behind them&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span style=&quot;color&#58; black;&quot;&gt;&lt;span style=&quot;color&#58; black;&quot;&gt;Build self-awareness through reflection on the AF competencies and your work and experiences so fa&lt;/span&gt;&amp;#28;r&lt;br/&gt;&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPrework": "&lt;p&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;Read pages 15-20 of chapter 1 of &lt;u&gt;&lt;a href=&quot;https&#58;//manyminds.achievementfirst.org/sites/NetworkSupport/TeamST/eventualtest/Session%20Documents/Leadership%20Pipeline_ch1.pdf&quot;&gt;Leadership Pipeline&lt;/a&gt;&lt;/u&gt;.&#160;Highlight anything that surprised you or that you had not thought of before.&lt;/span&gt;&lt;br/&gt;&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;/p&gt;",
        "Track": "DOS AD SSL",
        "SessionPreworkTime": 15
    }]],
    "SSL": [[{
        "title": "Academic Accomodations:  Pitching to the Top 5% & Getting All Students There",
        "start": "2015-06-12 15:30:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;ul&gt;&lt;li&gt;&lt;span&gt;SLWBAT use the seven part framework to determine appropriate accommodations for students&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;SLWBAT usestudent level data to determine reasons for student’s output failure&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;SLWAT matchappropriate accommodations to students based on student data&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;SLWBAT useongoing data collection to assess efficacy of accommodations and adjust asnecessary&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPrework": "&lt;p&gt;Complete part 1 and 2 of the &lt;a href=&quot;https&#58;//manyminds.achievementfirst.org/sites/NetworkSupport/TeamST/eventualtest/Session%20Documents/NLT_Academic%20Accommodations_Prework.docx&quot;&gt;Academic Accommodation Prework&lt;/a&gt;.&#160;&lt;/p&gt;",
        "SessionPreworkTime": 10,
        "Track": "DOS AD SSL"
    }, {
        "title": "Behavior Interventions and the CST",
        "start": "2015-06-12 15:00:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;p&gt;School Leaders Will Be Able To&#58;&#160;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;Describe the vision for an effective CST&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;Identify desired outcomes for an effective CST by analyzing three components&#58; &lt;/span&gt;&lt;span&gt;&lt;/span&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;EffectivePre-Work and Preparation &lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;Strong Agenda and Protocol &lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;Clear Accountability and Effective Implementation &lt;br/&gt;&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPrework": "&lt;p&gt;Read to understand the Behavior Intervention Summary&#160;&lt;/p&gt;",
        "SessionPreworkTime": 20,
        "Track": "DOS, SSL"
    }, {
        "title": "Co-Teaching Basics/Coaching Two Teachers",
        "start": "2015-05-18 22:30:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;div&gt;&lt;u&gt;School Leaders Will Be Able To&#58;&lt;/u&gt;&lt;/div&gt;&lt;ul&gt;&lt;li&gt;articulate how strong co-teaching raises student achievement&lt;/li&gt;&lt;li&gt;explain how a “flow of the block” can maximize teachers’ effectiveness&lt;/li&gt;&lt;li&gt;understand how levels build&lt;/li&gt;&lt;li&gt;and analyze and critique LTPs to support strategic implementation and teacher development.&lt;br/&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPrework": "&lt;p&gt;N/A&lt;/p&gt;",
        "SessionPreworkTime": 0,
        "Track": "AD and SSL"
    }, {
        "title": "D&I Leading Across Difference",
        "start": "2015-05-18 19:15:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;p&gt;Will be shared on 5/8&lt;/p&gt;",
        "SessionPrework": "&lt;p&gt;&lt;span style=&quot;color&#58; rgb(85, 85, 85);float&#58; none;background-color&#58; rgb(255, 255, 255);&quot;&gt;Will be shared on 5/8&lt;/span&gt;&lt;br/&gt;&lt;/p&gt;",
        "SessionPreworkTime": null,
        "Track": "DOS AD SSL"
    }, {
        "title": "Designing & Facilitating PD, Part 1",
        "start": "2015-05-22 21:00:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;p&gt;&lt;u&gt;School Leaders Will Be Able To&#58;&lt;/u&gt;&lt;/p&gt;&lt;p&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;describe the core elements of a PD plan, using the OAKMAC framework&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;begin designing and practice facilitating a PD session.&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot;color&#58; #1f497d;&quot;&gt;&lt;/span&gt;&lt;/p&gt;",
        "SessionPrework": "&lt;p style=&quot;color&#58; rgb(85, 85, 85);background-color&#58; rgb(255, 255, 255);&quot;&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;Bring the aim for a PD that you are going to plan and facilitating during August PD Days at your school.&#160; (Please choose the aim for a PD that focuses on skill building, not information download or norming&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;Read Ch. 4 from Paul Bambrick’s&lt;/span&gt;&#160;&lt;i&gt;&lt;a href=&quot;https&#58;//manyminds.achievementfirst.org/sites/NetworkSupport/TeamST/eventualtest/Session%20Documents/Bambrick%20Leverage%20Leadership%20-%20Chapter%204.pdf&quot;&gt;Leverage Leadership&lt;/a&gt;&lt;/i&gt;&#160;&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;/p&gt;",
        "SessionPreworkTime": 20,
        "Track": "DOS AD SSL"
    }, {
        "title": "Designing & Facilitating PD, Part 2",
        "start": "2015-06-12 15:30:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;p&gt;&lt;b&gt;&lt;span&gt;&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;&lt;p&gt;&lt;b&gt;&lt;u&gt;&lt;/u&gt;&lt;/b&gt;&lt;/p&gt;&lt;p&gt;&lt;/p&gt;&lt;p style=&quot;color&#58; rgb(85, 85, 85);background-color&#58; rgb(255, 255, 255);&quot;&gt;&lt;u&gt;School Leaders Will Be Able To&#58;&lt;/u&gt;&lt;/p&gt;&lt;ul style=&quot;color&#58; rgb(85, 85, 85);background-color&#58; rgb(255, 255, 255);&quot;&gt;&lt;li&gt;&lt;span&gt;describe the core elements of a PD plan, using the OAKMAC framework&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;begin designing and practice facilitating a PD session.&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;&lt;p&gt; &lt;/p&gt;",
        "SessionPrework": "&lt;p style=&quot;color&#58; rgb(85, 85, 85);background-color&#58; rgb(255, 255, 255);&quot;&gt;&lt;b&gt;&lt;span&gt;&lt;/span&gt;&lt;/b&gt;&lt;/p&gt;&lt;ul style=&quot;color&#58; rgb(85, 85, 85);background-color&#58; rgb(255, 255, 255);&quot;&gt;&lt;li&gt;&lt;span&gt;Bring the aim for a PD that you are going to plan and facilitating during August PD Days at your school.&#160; (Please choose the aim for a PD that focuses on skill building, not information download or norming&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;Read Ch. 4 from Paul Bambrick’s&lt;/span&gt;&#160;&lt;i&gt;&lt;a href=&quot;https&#58;//manyminds.achievementfirst.org/sites/NetworkSupport/TeamST/eventualtest/Session%20Documents/Bambrick%20Leverage%20Leadership%20-%20Chapter%204.pdf&quot; style=&quot;color&#58; rgb(51, 122, 183);background-color&#58; transparent;&quot;&gt;Leverage Leadership&lt;/a&gt;&lt;/i&gt;&#160;&lt;/li&gt;&lt;/ul&gt;&lt;p style=&quot;color&#58; rgb(85, 85, 85);background-color&#58; rgb(255, 255, 255);&quot;&gt;&lt;span&gt;&lt;/span&gt;&lt;/p&gt;",
        "SessionPreworkTime": 20,
        "Track": "DOS AD SSL"
    }, {
        "title": "Leading at Achievement First",
        "start": "2015-05-19 15:30:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;p&gt;&lt;span&gt;&lt;u&gt;School Leaders Will Be Able To&#58;&lt;/u&gt;&lt;/span&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;Begin to ground their personal vision of leadership by building self-awareness around core values&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;Ground their leadership in the AF context by understanding how we articulate school success,our theory of change and our path forward&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPrework": "&lt;ul&gt;&lt;li&gt;&lt;span&gt;Read “&lt;a href=&quot;https&#58;//manyminds.achievementfirst.org/sites/Search/Pages/results.aspx?k=discovering%20your%20authentic%20leadership&quot;&gt;Discovering Your Authentic Leadership&lt;/a&gt;.”&lt;span&gt;&#160;&#160;&lt;/span&gt;&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;Highlight or star anything that resonates with you.&lt;b&gt;&lt;/b&gt;&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPreworkTime": 20,
        "Track": "DOS AD SSL"
    }, {
        "title": "Observation & Feedback",
        "start": "2015-05-18 15:00:00",
        "Grade": "K-12",
        "DefaultDuration": 180,
        "Description": "Observing and providing feedback is a key component of a school leader's role.  These two sessions provide leaders with an introduction of how to observe, gather evidence, make claims, generate action items, and lead effective feedback conversations.",
        "SessionAim": "&lt;p&gt;School Leaders Will Be Able To&#58;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;Gather low-inference evidence by taking literal notes in an observation&lt;/li&gt;&lt;li&gt;Use low-inference evidence to infer claims about a teacher's instructional practice&lt;/li&gt;&lt;li&gt;Generate actionable next steps for a high-impact claim&lt;/li&gt;&lt;li&gt;Plan and facilitate guided questions for an observation conversation.&lt;/li&gt;&lt;/ul&gt;",
        "SessionPrework": "&lt;p&gt;N/A&lt;/p&gt;",
        "SessionPreworkTime": 0,
        "Track": "DOS AD SSL"
    }, {
        "title": "People Leadership, Part 1",
        "start": "2015-05-20 19:15:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;p&gt;&lt;span&gt;&lt;u&gt;School Leaders Will Be Able To&#58;&lt;/u&gt;&lt;/span&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;Analyze a complex leadership challenge and diagnose the heart of the challenge.&lt;span&gt;&#160; &lt;/span&gt;&lt;/li&gt;&lt;li&gt;Develop an effective agenda for a difficult team meeting by integrating concepts from 5 Dysfunctions of a Team. &lt;/li&gt;&lt;/ul&gt;",
        "SessionPrework": "&lt;ul&gt;&lt;li&gt;&lt;span&gt;Read the summary article of &lt;u&gt;&lt;a href=&quot;https&#58;//manyminds.achievementfirst.org/sites/NetworkSupport/TeamST/eventualtest/Session%20Documents/The_Five_Dysfunctions_of_a_Team_A_Leadership_Fable.pdf&quot;&gt;Five Dysfunctions of a Team&lt;/a&gt;&lt;/u&gt;.&lt;/span&gt;&lt;br/&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPreworkTime": 10,
        "Track": "DOS AD SSL"
    }, {
        "title": "People Leadership, Part 2",
        "start": "2015-05-19 19:15:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;p&gt;&lt;span&gt;&lt;u&gt;School Leaders Will Be Able To&#58;&lt;/u&gt;&lt;/span&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;Analyze a complex leadership challenge and diagnose the heart of the challenge.&lt;span&gt;&#160; &lt;/span&gt;&lt;/li&gt;&lt;li&gt;Develop an effective agenda for a difficult 1&#58;1 conversation by integrating concepts from “The Net”&lt;/li&gt;&lt;li&gt;l&lt;span&gt;ead a challenging meeting by applying specific facilitation strategies&lt;/span&gt;&lt;br/&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPrework": "&lt;p&gt;N/A&lt;/p&gt;",
        "SessionPreworkTime": 0,
        "Track": "DOS AD SSL"
    }, {
        "title": "Personal effectiveness",
        "start": "2015-05-22 15:30:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": "This session is designed to focus on the personal effectiveness and organization demands of a leader.  Teachers have the majority of their time planned for them and follow a daily routine.  Leaders, however, need to flexibly plan and maximize their own time.  This session is designed to support new leaders in this transition.  At the end of the session, new leaders should be able to describe how their organizational system will have to change as they transition from teacher to leader and define the tools they will use (a comprehensive calendar, upcoming to do list to create a weekly worksheet).",
        "SessionAim": "&lt;p&gt;&lt;font color=&quot;#000000&quot; face=&quot;Times New Roman&quot; size=&quot;3&quot;&gt;&lt;/font&gt;&lt;/p&gt;&lt;p&gt;&lt;span style=&quot;color&#58; black;&quot;&gt;&lt;font size=&quot;3&quot;&gt;School Leaders Will Be Able To&#58;&lt;/font&gt;&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;font color=&quot;#000000&quot; face=&quot;Times New Roman&quot; size=&quot;3&quot;&gt;&lt;/font&gt;&lt;/p&gt;&lt;ul style=&quot;direction&#58; ltr;&quot;&gt;&lt;li&gt;&lt;p&gt;&lt;span&gt;State why personal effectiveness matters and describe how “togetherness”is different as a leader than as a teacher&lt;/span&gt;&lt;/p&gt;&lt;/li&gt;&lt;li style=&quot;color&#58; rgb(0, 0, 0);&quot;&gt;&lt;p style=&quot;color&#58; rgb(0, 0, 0);&quot;&gt;&lt;span&gt;Describe components and attributes of organizational tools every leader needs&lt;/span&gt;&lt;/p&gt;&lt;/li&gt;&lt;li style=&quot;color&#58; rgb(0, 0, 0);&quot;&gt;&lt;p style=&quot;color&#58; rgb(0, 0, 0);&quot;&gt;&lt;span&gt;&lt;/span&gt;&lt;span&gt;&lt;font color=&quot;#000000&quot;&gt;Brainstorm solutions to role specific “priority killers”&lt;/font&gt;&lt;/span&gt;&lt;span&gt;&lt;font color=&quot;#000000&quot;&gt; &lt;/font&gt;&lt;/span&gt;&lt;/p&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPrework": "&lt;p&gt;None&lt;br/&gt;&lt;/p&gt;",
        "SessionPreworkTime": 0,
        "Track": "DOS AD SSL"
    }, {
        "title": "Personal Effectiveness in Your New Role",
        "start": "2015-05-20 21:00:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": "This session is designed to focus on the personal effectiveness and organization demands of a leader.  Teachers have the majority of their time planned for them and follow a daily routine.  Leaders, however, need to flexibly plan and maximize their own time.  This session is designed to support new leaders in this transition.  At the end of the session, new leaders should be able to describe how their organizational system will have to change as they transition from teacher to leader and define the tools they will use (a comprehensive calendar, upcoming to do list to create a weekly worksheet).",
        "SessionAim": "&lt;p&gt;&lt;span style=&quot;color&#58; black;&quot;&gt;School Leaders Will Be Able To&#58;&lt;/span&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;State why personal effectiveness matters and describe how “togetherness”is different as a leader than as a teacher&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;Describe components and attributes of organizational tools every leader needs&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;&lt;span&gt;Brainstorm solutionsto role specific “priority killers”&lt;/span&gt;&lt;span&gt; &lt;/span&gt;&lt;br/&gt;&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPrework": "&lt;p&gt;None!&lt;/p&gt;",
        "SessionPreworkTime": 0,
        "Track": "DOS AD SSL"
    }, {
        "title": "Program Overview Introduction and Purpose",
        "start": "2015-06-12 17:15:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": "In this session, teachers will engage with the program tenets so that they deeply understand them and can connect them to the structure of our program.  We will review the structure of the program at high level and then participants will engage with their specific course and scope and sequence with their course facilitator.",
        "SessionAim": "&lt;p&gt;&lt;br/&gt;&lt;/p&gt;&lt;p&gt;&lt;span&gt;Teachers Will Be Able To&#58;&lt;/span&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;&#160;identify components of the PO and articulate the purpose.&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;&#160;locate different components of the PO ask clarifying questions.&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;&#160;articulate how the Course of Study will help us plan our Scope and Sequence for the year. &lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPrework": "&lt;p&gt;&lt;span&gt;Read and annotate the Specials Program Overview (Overview and Tenets, Specials at a Glance, Course of Study for teachers' discipline)&lt;/span&gt;&lt;/p&gt;",
        "SessionPreworkTime": 30,
        "Track": "DOS AD SSL"
    }, {
        "title": "Real Time Coaching",
        "start": "2015-05-22 17:15:00",
        "Grade": "K-12",
        "DefaultDuration": 180,
        "Description": null,
        "SessionAim": "&lt;p&gt;&lt;span style=&quot;color&#58; black;&quot;&gt;School Leaders Will Be Able To&#58;&lt;/span&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;span style=&quot;color&#58; black;&quot;&gt;&lt;/span&gt;Implement real-time feedback that is strategic, supportive and transformative.&lt;br/&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPrework": "&lt;p&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;Bring&#160;&lt;/span&gt;&lt;span&gt;one recent 20-min video of a weak(er) teacher who will be returning next year and is likely going to struggle with classroom management at the start of the 14-15 school year.  The video should be of the teacher actively teaching (ideally in front of a full-class rather than small group) giving directions and conducting direct/interactive instruction (not during independent work time, etc.).  The video should show the teacher and as many scholars as possible in the frame.  It is fine if school leaders from the same school bring the same video because you will be grouped with leaders from other schools; however, each leader needs the video ready to be viewed on their own charged laptop for the session (store the video on your hard drive and do not rely on internet please)&lt;/span&gt;&lt;br/&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;Bring headphones to use when viewing the videos.&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;/p&gt;&lt;p&gt;&lt;br/&gt;&lt;/p&gt;",
        "SessionPreworkTime": 20,
        "Track": "DOS AD SSL"
    }, {
        "title": "Special Services @ AF",
        "start": "2015-06-12 21:00:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;p&gt;School Leaders Will Be Able To&#58;&#160;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;Synthesize key ideas in the history of special education&lt;/li&gt;&lt;li&gt;&lt;span style=&quot;color&#58; black;&quot;&gt;Identify the implications of tactical application of procedural safeguards vs. authentic compliance on the school, students, and families&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span style=&quot;color&#58; black;&quot;&gt;Generate examples of authentic &lt;/span&gt;&lt;span style=&quot;color&#58; black;&quot;&gt;compliance&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span style=&quot;color&#58; black;&quot;&gt;Assess compliance at their school and identify areas for improvement&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPrework": "&lt;p&gt;None&#160;&lt;/p&gt;",
        "SessionPreworkTime": null,
        "Track": "DOS AD SSL"
    }, {
        "title": "Taxonomy:  Precise Directions",
        "start": "2015-06-12 22:30:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;p&gt;New Leaders will&#58;&lt;/p&gt;&lt;p&gt;qArticulate how MVP and Narration are foundational to meeting the needs of all scholars, reaching a rigorous college ready bar and ensuring our classrooms are joyful&lt;/p&gt;&lt;p&gt;qCraft precise directions that adhere to the MVP framework&lt;/p&gt;&lt;p&gt;qPractice delivering precise directions that adhere to the MVP framework&lt;br/&gt;&lt;/p&gt;",
        "SessionPrework": "&lt;p&gt;none&lt;/p&gt;",
        "SessionPreworkTime": null,
        "Track": "DOS AD SSL"
    }, {
        "title": "Taxonomy:  Strong Voice",
        "start": "2015-05-21 15:00:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;p&gt;New Leaders will&#58;&lt;/p&gt;&lt;p&gt;qExplain how Strong Voice support us in commanding attention and creating a sense of urgency that is both warm and demanding.&lt;/p&gt;&lt;p&gt;qPractice Be Seen Looking, Square Up, and Economy of Language in order to command authority and exude influence in the classroom. &lt;br/&gt;&lt;/p&gt;",
        "SessionPrework": "&lt;p&gt;none&lt;/p&gt;",
        "SessionPreworkTime": null,
        "Track": "DOS AD SSL"
    }, {
        "title": "Taxonomy: Narration",
        "start": "2015-05-18 15:30:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;p&gt;New Leaders will&#58;&lt;/p&gt;&lt;p&gt;qArticulate how MVP and Narration are foundational to meeting the needs of all scholars, reaching a rigorous college ready bar and ensuring our classrooms are joyful&lt;/p&gt;&lt;p&gt;qCraft narration that adheres to the effectiveness framework&lt;/p&gt;&lt;p&gt;qPractice narrating in a manner that adheres to the effectiveness framework and supports every single scholar in the classroom&lt;br/&gt;&lt;/p&gt;",
        "SessionPrework": "&lt;p&gt;none&lt;/p&gt;",
        "SessionPreworkTime": null,
        "Track": "DOS AD SSL"
    }, {
        "title": "The First 60 Days as a SSL Part 2",
        "start": "2015-05-20 17:15:00",
        "Grade": "K-12",
        "DefaultDuration": 270,
        "Description": null,
        "SessionAim": null,
        "SessionPrework": null,
        "SessionPreworkTime": null,
        "Track": "SSL"
    }, {
        "title": "The First 60 Days as an Academic Dean (Condensed)",
        "start": "2015-05-22 17:15:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": "This session is the final session that internal new leaders will attend during their week of training.  This session is designed to help new school leaders plan for success in their first 60 days of being a school leader.  Ultimately, each school leader needs to be able to effectively manage and coach their teachers as well as serve as broader leaders across the school. This is a dramatic shift from managing children to managing adults and it is paired with the shift of owning success within just one classroom to now owning the success across a school.  There is a lot to think about and this session is designed to help new school leaders prioritize what to win on as they transition into these roles.",
        "SessionAim": "&lt;p&gt;&lt;span&gt;School Leaders Will Be Able To…&lt;/span&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;Identify the items they need to know, have a plan for, and be able to do in the first 60 days of being a dean.&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;&lt;span&gt;Synthesize their wins, next steps, and questions in order to be successful in the first 60 days.&lt;/span&gt;&lt;br/&gt;&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPrework": "&lt;p style=&quot;text-align&#58; justify;&quot;&gt;&lt;span&gt;Come to the session with your principal's answer to this question&#58;&#160;&lt;span style=&quot;color&#58; rgb(85, 85, 85);text-align&#58; justify;float&#58; none;background-color&#58; rgb(255, 255, 255);&quot;&gt;“What are the school’s goals for the 2015-2016 school year?”&lt;span class=&quot;Apple-converted-space&quot;&gt;&#160;&lt;/span&gt;&lt;/span&gt;&lt;b&gt;&lt;/b&gt;&lt;/span&gt;&lt;/p&gt;",
        "SessionPreworkTime": 5,
        "Track": "DOS AD SSL"
    }, {
        "title": "The First 60 Days: Putting It All Together",
        "start": "2015-05-22 19:15:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": null,
        "SessionPrework": null,
        "SessionPreworkTime": null,
        "Track": "DOS AD SSL"
    }, {
        "title": "Vision of Excellence for our Roles",
        "start": "2015-05-19 22:30:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;p&gt;SLWBAT articulate their key roles and responsibilities as a leader at AF.&lt;/p&gt;&lt;p&gt;SLWBAT understand the intersections between the AD, DOS and SSL roles and begin to understand the implications of working together&lt;/p&gt;&lt;p&gt;SLWBAT develop a key set of questions for engaging their Principal as they tailor their R&amp;amp;R , goals and priorities to their school site&lt;/p&gt;",
        "SessionPrework": "&lt;p&gt;&lt;b&gt;&lt;span&gt;Pre-work Directions&#58; &lt;/span&gt;&lt;/b&gt;&lt;span&gt;Please read the following pages from Patrick Lencioni’s &lt;i&gt;The Advantage&#58; &lt;/i&gt;pg. 63-70 and pg. 130-132.&lt;/span&gt;&lt;/p&gt;&lt;p&gt;&lt;i&gt;&lt;span&gt;&lt;span&gt;&#160;&lt;/span&gt;&lt;/span&gt;&lt;/i&gt;&lt;span&gt;As you read, consider the following questions&#58;&lt;/span&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;According to Lencioni, how do collective goals and clarity of roles intersect?&lt;b&gt;&lt;/b&gt;&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;Can you think of a team you were on when you one of the challenges Lencioni highlights has come up?&lt;span&gt;&#160; &lt;/span&gt;What was the impact? &lt;b&gt;&lt;/b&gt;&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;span&gt;Be prepared to share your thinking about the key points in these short sections of the text.&lt;/span&gt;&lt;/p&gt;",
        "SessionPreworkTime": 20,
        "Track": "DOS AD SSL"
    }, {
        "title": "Welcome to Management",
        "start": "2015-05-20 15:30:00",
        "Grade": "K-12",
        "DefaultDuration": 90,
        "Description": null,
        "SessionAim": "&lt;p&gt;&lt;span&gt;&lt;u&gt;School Leaders Will Be Able To&#58;&lt;/u&gt;&lt;/span&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;span style=&quot;color&#58; black;&quot;&gt;Develop a solid understanding of the AF leadership competencies and the skill sets and mindsets behind them&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span style=&quot;color&#58; black;&quot;&gt;&lt;span style=&quot;color&#58; black;&quot;&gt;Build self-awareness through reflection on the AF competencies and your work and experiences so fa&lt;/span&gt;&amp;#28;r&lt;br/&gt;&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;",
        "SessionPrework": "&lt;p&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;span&gt;Read pages 15-20 of chapter 1 of &lt;u&gt;&lt;a href=&quot;https&#58;//manyminds.achievementfirst.org/sites/NetworkSupport/TeamST/eventualtest/Session%20Documents/Leadership%20Pipeline_ch1.pdf&quot;&gt;Leadership Pipeline&lt;/a&gt;&lt;/u&gt;.&#160;Highlight anything that surprised you or that you had not thought of before.&lt;/span&gt;&lt;br/&gt;&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;&lt;/p&gt;",
        "Track": "DOS AD SSL",
        "SessionPreworkTime": 15
    }]]
};


    /* END Event Details */


    /* START Event Planner */
    var esd = moment(eStartDate);
    var eed = moment(eEndDate);
    var diffed = eed.diff(esd, 'days');

        $scope.NLTevents= [
          {
            //allDay:false,
            //url:'string',
            //color: //Sets an event's background and border color just like the calendar-wide eventColor option.
            //backgroundColor: //Sets an event's background color just like the calendar-wide eventBackgroundColor option.
            //borderColor: Sets an event's border color just like the the calendar-wide eventBorderColor option.
            //textColor:'',
            //className: 'className',
            id: 'eventSpan',
            title: 'eventConstraint',
            start: esd,
            end: eed,
            rendering: 'background'
          }
        ];

    /* alert on eventClick */
    //$scope.onEventClick = function( event, jsEvent, view){
    $scope.onEventClick = function( event, jsEvent ){
      var modalInstance = $modal.open({
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        resolve: {
          item: function () {
            return event;
          }
        }
      });

      modalInstance.result.then(function (item) {
        //closed

        if(item.delete === true){
          $(jsEvent.target).closest('[calendar]').fullCalendar( 'removeEvents', item._id );
        }
        if(item.room){
          $(jsEvent.target).closest('[calendar]').fullCalendar( 'rerenderEvents');
        }
      }, function () {
        //dismissed
      });
    };


    /* cal config object */
    $scope.uiConfig = {
      calendar:{
        //allDaySlot: true,
        slotDuration: '00:30:00',
        //snapDuration:'00:30:00',
        //scrollTime: '06:00:00',
        //minTime: '00:00:00',
        //maxTime: '24:00:00',
        //lang: 'en',
        //height: 'auto',
        contentHeight: 555,
        //aspectRatio: 1.35, //initialize a calendar who's width is 1.35 its height
        timezone: 'local',
        //now: '2013-12-01T00:00:00', //Explicitly sets the 'today' date normally highlighted in yellow.
        editable: true,
        header: {
          left: 'view01,view02,agendaWeek,agendaDay',
          center: '',
          right: 'prev,next'
        },
        defaultView: 'view02',
        defaultTimedEventDuration: '01:00:00',
        droppable: true, // this allows things to be dropped onto the calendar
        //dropAccept: '*',
        //drop: function(moment, jqEvent, jqObj, calObj) {},
        //drop: function() {},
        defaultDate: esd, //The initial date displayed when the calendar first loads.
        //eventConstraint: 'eventSpan',
        // events: [
        //   {
        //     //allDay:false,
        //     //url:'string',
        //     //color: //Sets an event's background and border color just like the calendar-wide eventColor option.
        //     //backgroundColor: //Sets an event's background color just like the calendar-wide eventBackgroundColor option.
        //     //borderColor: Sets an event's border color just like the the calendar-wide eventBorderColor option.
        //     //textColor:'',
        //     //className: 'className',
        //     id: 'eventSpan',
        //     title: 'eventConstraint',
        //     start: esd,
        //     end: eed,
        //     rendering: 'background'
        //   }
        // ],
        eventRender: function(event, element) {
          if(event.room){
            element.find('.fc-title').append('<br/>Room: '+ event.room);
          }
        },
        views: {
            view01: {
              type: 'agenda',
              duration: { days: diffed },
              buttonText: 'View 1'
            },
            view02: {
              type: 'agenda',
              duration: { days: diffed },
              slotDuration: '00:60:00',
              buttonText: 'View 2'
            },
            agendaWeek: {
              slotDuration: '00:60:00',
              buttonText: 'Week'
            },
            agendaDay: {
              slotDuration: '00:15:00',
              buttonText: 'Day'
            }
        },
        //,viewRender:function( view, element ){}//Triggered when a new date-range is rendered, or when the view type switches.
        //,viewDestroy:function( view, element ){}//Triggered when a rendered date-range needs to be torn down.
        //,dayRender:function( date, cell ) { }//A hook for modifying a day cell.
        //// event is an Event Object that holds the event's information (date, title, etc).
        //// jsEvent holds the native JavaScript event with low-level information such as mouse coordinates.
        //// view holds the current View Object.
        //,dayClick: function(date, jsEvent, view) {}

        //eventClick:function( event, jsEvent, view ) {
        eventClick: $scope.onEventClick
        //,eventMouseover:function( event, jsEvent, view ) { }
        //,eventMouseout:function( event, jsEvent, view ) { }

      }
    };

  //get events
  //.fullCalendar( 'clientEvents' [, idOrFilter ] ) -> Array
  //remove events
  //.fullCalendar( 'removeEvents' [, idOrFilter ] )


    $scope.tabClick = function (e, num) {
      $('.js-navtab').removeClass('active');
      $(e.target).parent().addClass('active');
      $('.js-tabpane').removeClass('active');
      var $tabpane = $('.js-tabcontent').find('>div').eq(num);
      $tabpane.addClass('active');
      $tabpane.find('.calendar').fullCalendar('render');
    };

    $scope.toEStartDate = function () {
      $('.calendar').fullCalendar( 'gotoDate', esd );
    };



});
