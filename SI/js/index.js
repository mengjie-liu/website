$(function () {
  $.fn.rotationInfo = function () {
    var el = $(this),
      tr =
        el.css("-webkit-transform") ||
        el.css("-moz-transform") ||
        el.css("-ms-transform") ||
        el.css("-o-transform") ||
        "",
      info = { rad: 0, deg: 0 };
    if ((tr = tr.match("matrix\\((.*)\\)"))) {
      tr = tr[1].split(",");
      if (typeof tr[0] != "undefined" && typeof tr[1] != "undefined") {
        info.rad = Math.atan2(tr[1], tr[0]);
        info.deg = parseFloat(((info.rad * 180) / Math.PI).toFixed(1));
      }
    }
    return info;
  };
  $.fn.animateRotate = function (angle) {
    var $elem = $(this);
    $({ deg: angle }).animate(
      { deg: 0 },
      {
        duration: 400,
        step: function (now) {
          $elem.css({
            transform: "rotate(" + now + "deg)",
          });
        },
      }
    );
  };
  $("#selected").off("dblclick");

  // #nderive
  $("#nderive").on("click", function () {
    $("body,html").animate({ scrollTop: 0 }, 1);
    $("#wrapper").after(function () {
      return `<div id='backgW'>
                    <div id='derive'>
                      <div id='detext'>
                      <p>
                        One of the basic situationist practices is the dérive, a technique of rapid passage through varied ambiences. Dérives involve playful-constructive behavior and awareness of psychogeographical effects, and are thus quite different from the classic notions of journey or stroll.</br></br>
                        In a dérive one or more persons during a certain period drop their relations, their work and leisure activities, and all their other usual motives for movement and action, and let themselves be drawn by the attractions of the terrain and the encounters they find there. Chance is a less important factor in this activity than one might think: from a dérive point of view cities have psychogeographical contours, with constant currents, fixed points and vortexes that strongly discourage entry into or exit from certain zones.</br></br>
                        But the dérive includes both this letting-go and its necessary contradiction: the domination of psychogeographical variations by the knowledge and calculation of their possibilities. In this latter regard, ecological science, despite the narrow social space to which it limits itself, provides psychogeography with abundant data.</br></br>
                        The ecological analysis of the absolute or relative character of fissures in the urban network, of the role of microclimates, of distinct neighborhoods with no relation to administrative boundaries, and above all of the dominating action of centers of attraction, must be utilized and completed by psychogeographical methods. The objective passional terrain of the dérive must be defined in accordance both with its own logic and with its relations with social morphology.</br></br>
                        In his study Paris et l’agglomération parisienne (Bibliothèque de Sociologie Contemporaine, P.U.F., 1952) Chombart de Lauwe notes that “an urban neighborhood is determined not only by geographical and economic factors, but also by the image that its inhabitants and those of other neighborhoods have of it.” In the same work, in order to illustrate “the narrowness of the real Paris in which each individual lives...within a geographical area whose radius is extremely small,” he diagrams all the movements made in the space of one year by a student living in the 16th Arrondissement. Her itinerary forms a small triangle with no significant deviations, the three apexes of which are the School of Political Sciences, her residence and that of her piano teacher.</br></br>
                        Such data — examples of a modern poetry capable of provoking sharp emotional reactions (in this particular case, outrage at the fact that anyone’s life can be so pathetically limited) — or even Burgess’s theory of Chicago’s social activities as being distributed in distinct concentric zones, will undoubtedly prove useful in developing dérives.</br></br>
                        If chance plays an important role in dérives this is because the methodology of psychogeographical observation is still in its infancy. But the action of chance is naturally conservative and in a new setting tends to reduce everything to habit or to an alternation between a limited number of variants. Progress means breaking through fields where chance holds sway by creating new conditions more favorable to our purposes. We can say, then, that the randomness of a dérive is fundamentally different from that of the stroll, but also that the first psychogeographical attractions discovered by dérivers may tend to fixate them around new habitual axes, to which they will constantly be drawn back.</br></br>
                        An insufficient awareness of the limitations of chance, and of its inevitably reactionary effects, condemned to a dismal failure the famous aimless wandering attempted in 1923 by four surrealists, beginning from a town chosen by lot: Wandering in open country is naturally depressing, and the interventions of chance are poorer there than anywhere else. But this mindlessness is pushed much further by a certain Pierre Vendryes (in Médium, May 1954), who thinks he can relate this anecdote to various probability experiments, on the ground that they all supposedly involve the same sort of antideterminist liberation. He gives as an example the random distribution of tadpoles in a circular aquarium, adding, significantly, “It is necessary, of course, that such a population be subject to no external guiding influence.” From that perspective, the tadpoles could be considered more spontaneously liberated than the surrealists, since they have the advantage of being “as stripped as possible of intelligence, sociability and sexuality,” and are thus “truly independent from one another.”</br></br>
                        At the opposite pole from such imbecilities, the primarily urban character of the dérive, in its element in the great industrially transformed cities that are such rich centers of possibilities and meanings, could be expressed in Marx’s phrase: “Men can see nothing around them that is not their own image; everything speaks to them of themselves. Their very landscape is alive.”</br></br>
                        One can dérive alone, but all indications are that the most fruitful numerical arrangement consists of several small groups of two or three people who have reached the same level of awareness, since cross-checking these different groups’ impressions makes it possible to arrive at more objective conclusions. It is preferable for the composition of these groups to change from one dérive to another. With more than four or five participants, the specifically dérive character rapidly diminishes, and in any case it is impossible for there to be more than ten or twelve people without the dérive fragmenting into several simultaneous dérives. The practice of such subdivision is in fact of great interest, but the difficulties it entails have so far prevented it from being organized on a sufficient scale.</br></br>
                        The average duration of a dérive is one day, considered as the time between two periods of sleep. The starting and ending times have no necessary relation to the solar day, but it should be noted that the last hours of the night are generally unsuitable for dérives.</br></br>
                        But this duration is merely a statistical average. For one thing, a dérive rarely occurs in its pure form: it is difficult for the participants to avoid setting aside an hour or two at the beginning or end of the day for taking care of banal tasks; and toward the end of the day fatigue tends to encourage such an abandonment. But more importantly, a dérive often takes place within a deliberately limited period of a few hours, or even fortuitously during fairly brief moments; or it may last for several days without interruption. In spite of the cessations imposed by the need for sleep, certain dérives of a sufficient intensity have been sustained for three or four days, or even longer. It is true that in the case of a series of dérives over a rather long period of time it is almost impossible to determine precisely when the state of mind peculiar to one dérive gives way to that of another. One sequence of dérives was pursued without notable interruption for around two months. Such an experience gives rise to new objective conditions of behavior that bring about the disappearance of a good number of the old ones.</br></br>
                        The influence of weather on dérives, although real, is a significant factor only in the case of prolonged rains, which make them virtually impossible. But storms or other types of precipitation are rather favorable for dérives.</br></br>
                        The spatial field of a dérive may be precisely delimited or vague, depending on whether the goal is to study a terrain or to emotionally disorient oneself. It should not be forgotten that these two aspects of dérives overlap in so many ways that it is impossible to isolate one of them in a pure state. But the use of taxis, for example, can provide a clear enough dividing line: If in the course of a dérive one takes a taxi, either to get to a specific destination or simply to move, say, twenty minutes to the west, one is concerned primarily with personal disorientation. If, on the other hand, one sticks to the direct exploration of a particular terrain, one is concentrating primarily on research for a psychogeographical urbanism.</br></br>
                        In every case the spatial field depends first of all on the point of departure — the residence of the solo dériver or the meeting place selected by a group. The maximum area of this spatial field does not extend beyond the entirety of a large city and its suburbs. At its minimum it can be limited to a small self-contained ambience: a single neighborhood or even a single block of houses if it’s interesting enough (the extreme case being a static-dérive of an entire day within the Saint-Lazare train station).</br></br>
                        The exploration of a fixed spatial field entails establishing bases and calculating directions of penetration. It is here that the study of maps comes in — ordinary ones as well as ecological and psychogeographical ones — along with their correction and improvement. It should go without saying that we are not at all interested in any mere exoticism that may arise from the fact that one is exploring a neighborhood for the first time. Besides its unimportance, this aspect of the problem is completely subjective and soon fades away.</br></br>
                        In the “possible rendezvous,” on the other hand, the element of exploration is minimal in comparison with that of behavioral disorientation. The subject is invited to come alone to a certain place at a specified time. He is freed from the bothersome obligations of the ordinary rendezvous since there is no one to wait for. But since this “possible rendezvous” has brought him without warning to a place he may or may not know, he observes the surroundings. It may be that the same spot has been specified for a “possible rendezvous” for someone else whose identity he has no way of knowing. Since he may never even have seen the other person before, he will be encouraged to start up conversations with various passersby. He may meet no one, or he may even by chance meet the person who has arranged the “possible rendezvous.” In any case, particularly if the time and place have been well chosen, his use of time will take an unexpected turn. He may even telephone someone else who doesn’t know where the first “possible rendezvous” has taken him, in order to ask for another one to be specified. One can see the virtually unlimited resources of this pastime.</br></br>
                        Our rather anarchic lifestyle and even certain amusements considered dubious that have always been enjoyed among our entourage — slipping by night into houses undergoing demolition, hitchhiking nonstop and without destination through Paris during a transportation strike in the name of adding to the confusion, wandering in subterranean catacombs forbidden to the public, etc. — are expressions of a more general sensibility which is no different from that of the dérive. Written descriptions can be no more than passwords to this great game.</br></br>
                        The lessons drawn from dérives enable us to draft the first surveys of the psychogeographical articulations of a modern city. Beyond the discovery of unities of ambience, of their main components and their spatial localization, one comes to perceive their principal axes of passage, their exits and their defenses. One arrives at the central hypothesis of the existence of psychogeographical pivotal points. One measures the distances that actually separate two regions of a city, distances that may have little relation with the physical distance between them. With the aid of old maps, aerial photographs and experimental dérives, one can draw up hitherto lacking maps of influences, maps whose inevitable imprecision at this early stage is no worse than that of the earliest navigational charts. The only difference is that it is no longer a matter of precisely delineating stable continents, but of changing architecture and urbanism.</br></br>
                        Today the different unities of atmosphere and of dwellings are not precisely marked off, but are surrounded by more or less extended bordering regions. The most general change that dérive experiences lead to proposing is the constant diminution of these border regions, up to the point of their complete suppression.</br></br>
                        Within architecture itself, the taste for dériving tends to promote all sorts of new forms of labyrinths made possible by modern techniques of construction. Thus in March 1955 the press reported the construction in New York of a building in which one can see the first signs of an opportunity to dérive inside an apartment:</br></br>
                        “The apartments of the helicoidal building will be shaped like slices of cake. One will be able to enlarge or reduce them by shifting movable partitions. The half-floor gradations avoid limiting the number of rooms, since the tenant can request the use of the adjacent section on either upper or lower levels. With this setup three four-room apartments can be transformed into one twelve-room apartment in less than six hours.”</br></br>
                        (To be continued.)
                        </br></br>
                        </p>
                      </div>
                    </div>
                    <a href="" id='backW'>
                         <img src='img/back.png'>
                    </a>
                    <div id="der">THEORY OF THE DERIVE (GUY DEBORD, 1958)</div>
                    <div id="dunderl"></div>
              </div>`;
    });
    $("#items").hide();
    $("#nav").hide();
    $("#backg").hide();
    // let ht = $("p").height();
    // $("#backgW").css("height", ht + "px");
    $("body").css({
      height: "auto",
      overflowY: "scroll",
    });
    if ($("#idd a").css("visibility") === "visible") {
      $("#backW").on("click", function () {});
    } else {
      $("#backW").on("click", function (e) {
        e.preventDefault();
        $("#backgW").remove();
        $("#nav").show();
        $("#backg").show();
        $("body").css("overflowY", "scroll");
        $("body,html").animate({ scrollTop: 0 }, 1);
        // $("body,html").animate({ scrollLeft: 0 }, 1);
      });
    }
  });

  // #ndeto
  $("#ndeto").on("click", function () {
    $("body,html").animate({ scrollTop: 0 }, 1);
    $("#wrapper").after(function () {
      return `<div id='backgW'>
                    <div id='deto'>
                      <div id='dettext'>
                      <p>
                        Détournement, the reuse of preexisting artistic elements in a new ensemble, has been a constantly present tendency of the contemporary avant-garde, both before and since the formation of the SI. The two fundamental laws of détournement are the loss of importance of each detourned autonomous element — which may go so far as to completely lose its original sense — and at the same time the organization of another meaningful ensemble that confers on each element its new scope and effect.</br></br>
                        Détournement has a peculiar power which obviously stems from the double meaning, from the enrichment of most of the terms by the coexistence within them of their old and new senses. And it is very practical because it’s so easy to use and because of its inexhaustible potential for reuse. Concerning the negligible effort required for détournement, we have already noted that “the cheapness of its products is the heavy artillery that breaks through all the Chinese walls of understanding” (A User’s Guide to Détournement, May 1956). But these points would not by themselves justify recourse to this method, which the same text describes as “clashing head-on against all social and legal conventions.” Détournement has a historical significance. What is it?</br></br>
                        “Détournement is a game made possible by the capacity of devaluation,” writes Jorn in his study Detourned Painting (May 1959), and he goes on to say that all the elements of the cultural past must be “reinvested” or disappear. Détournement is thus first of all a negation of the value of the previous organization of expression. It arises and grows increasingly stronger in the historical period of the decomposition of artistic expression. But at the same time, the attempts to reuse the “detournable bloc” as material for other ensembles express the search for a vaster construction, a new genre of creation at a higher level.</br></br>
                        The SI is a very special kind of movement, different in nature from preceding artistic avant-gardes. Within culture, the SI can be likened to a research laboratory, for example, or to a party in which we are situationists but nothing that we do can yet be situationist. This is not a disavowal for anyone. We are partisans of a certain future of culture and of life. Situationist activity is a particular craft that we are not yet practicing.</br></br>
                        Thus the signature of the situationist movement, the sign of its presence and contestation within contemporary cultural reality (since we cannot represent any common style whatsoever), is first of all the use of détournement. Examples of our use of detourned expression include Jorn’s altered paintings; Debord and Jorn’s book Mémoires, “composed entirely of prefabricated elements,” in which the writing on each page runs in all directions and the reciprocal relations of the phrases are invariably uncompleted; Constant’s projects for detourned sculptures; and Debord’s detourned documentary film, On the Passage of a Few Persons Through a Rather Brief Unity of Time. At the stage of what the “User’s Guide” calls “ultra-détournement, that is, the tendencies for détournement to operate in everyday social life” (e.g. passwords or the wearing of disguises, belonging to the sphere of play), we might mention, at different levels, Gallizio’s industrial painting; Wyckaert’s “orchestral” project for assembly-line painting with a division of labor based on color; and numerous détournements of buildings that were at the origin of unitary urbanism. But we should also mention in this context the SI’s very forms of “organization” and propaganda.</br></br>
                      At this point in the world’s development, all forms of expression are losing their grip on reality and being reduced to self-parody. As the readers of this journal can frequently verify, present-day writing invariably has an element of parody. As the “User’s Guide” notes: “It is necessary to envisage a parodic-serious stage where the accumulation of detourned elements, far from aiming to arouse indignation or laughter by alluding to some original work, will express our indifference toward a meaningless and forgotten original, and concern itself with rendering a certain sublimity.”</br></br>
                      This combination of parody and seriousness reflects the contradictions of an era in which we find ourselves confronted with both the urgent necessity and the near impossibility of initiating and carrying out a totally innovative collective action — an era in which the most serious ventures are masked in the ambiguous interplay between art and its necessary negation, and in which the essential voyages of discovery have been undertaken by such astonishingly incapable people.
                      </br></br>
                      </p>
                      </div>
                    </div>
                    <a href="" id='backW'>
                         <img src='img/back.png'>
                    </a>
                    <div id="det">DETOURNEMENT AS NEGATION AND PRELUDE (1959)</div>
                    <div id="dtunderl"></div>
              </div>`;
    });
    $("#items").hide();
    $("#nav").hide();
    $("#backg").hide();
    // let ht = $("p").height() * 1.2075;
    // $("#backgW").css("height", ht + "px");
    $("body").css({
      height: "auto",
      overflowY: "scroll",
    });
    if ($("#idd a").css("visibility") === "visible") {
      $("#backW").on("click", function () {});
    } else {
      $("#backW").on("click", function (e) {
        e.preventDefault();
        $("#backgW").remove();
        $("#nav").show();
        $("#backg").show();
        $("body").css("overflowY", "scroll");
        $("body,html").animate({ scrollTop: 0 }, 1);
        $("body,html").animate({ scrollLeft: 0 }, 1);
      });
    }
  });

  // #nurban
  $("#nurban").on("click", function () {
    $("body").css("overflowY", "scroll");
    $("body,html").animate({ scrollTop: 0 }, 1);
    $("#wrapper").after(function () {
      return `<div id='backgW'>
                    <div id='urban'>
                        <div id='urtext'>
                        <p>
                        1</br>NOTHINGNESS OF URBANISM AND NOTHINGNESS OF THE SPECTACLE<br>
                        Urbanism doesn’t exist; it is only an “ideology” in Marx’s sense of the word. Architecture does really exist, like Coca-Cola: though coated with ideology, it is a real production, falsely satisfying a falsified need. Urbanism is comparable to the advertising about Coca-Cola — pure spectacular ideology. Modern capitalism, which organizes the reduction of all social life to a spectacle, is incapable of presenting any spectacle other than that of our own alienation. Its urbanistic dream is its masterpiece.<br><br>
                        2</br>CITY PLANNING AS CONDITIONING AND FALSE PARTICIPATION<br>
                        The development of the urban milieu is the capitalist domestication of space. It represents the choice of one particular materialization, to the exclusion of other possibilities. Like aesthetics, whose course of decomposition it is going to follow, it can be considered as a rather neglected branch of criminology. What characterizes it at the “city planning” level — as opposed to its merely architectural level — is its insistence on popular consent, on individual integration into its bureaucratic production of conditioning.<br><br>
                        All this is imposed by means of a blackmail of utility, which hides the fact that this architecture and this conditioning are really useful only in reinforcing reification. Modern capitalism dissuades people from making any criticism of architecture with the simple argument that they need a roof over their heads, just as television is accepted on the grounds that they need information and entertainment. They are made to overlook the obvious fact that this information, this entertainment and this kind of dwelling place are not made for them, but without them and against them.<br><br>
                        City planning must be understood as a society’s field of publicity-propaganda, i.e. as the organization of participation in something in which it is impossible to participate.<br><br><br>
                        3</br>TRAFFIC CIRCULATION, SUPREME STAGE OF CITY PLANNING<br>
                        Traffic circulation is the organization of universal isolation. As such, it constitutes the major problem of modern cities. It is the opposite of encounter: it absorbs the energies that could otherwise be devoted to encounters or to any sort of participation. Spectacles compensate for the participation that is no longer possible. Within this spectacular society one’s status is determined by one’s residence and mobility (personal vehicles). You don’t live somewhere in the city, you live somewhere in the hierarchy. At the summit of this hierarchy the ranks can be ascertained by the degree of mobility. Power is objectively expressed in the necessity of being present each day at more and more places (business dinners, etc.) further and further removed from each other. A VIP could be defined as someone who has appeared in three different capitals in the course of a single day.<br><br>
                        4</br>DISTANCIATION FROM THE URBAN SPECTACLE<br>
                        The spectacle system that is in the process of integrating the population manifests itself both as organization of cities and as permanent information network. It is a solid framework designed to reinforce the existing conditions of life. Our first task is to enable people to stop identifying with their surroundings and with model patterns of behavior. This is inseparable from making possible free mutual recognition in a few initial zones set apart for human activity. People will still be obliged for a long time to accept the era of reified cities. But the attitude with which they accept it can be changed immediately. We must encourage their skepticism toward those spacious and brightly colored kindergartens, the new dormitory cities of both East and West. Only a mass awakening will pose the question of a conscious construction of the urban environment.<br><br>
                        5</br>AN INDIVISIBLE FREEDOM<br>
                        The main achievement of contemporary city planning is to have made people blind to the possibility of what we call unitary urbanism, namely a living critique of this manipulation of cities and their inhabitants, a critique fueled by all the tensions of everyday life. A living critique means setting up bases for an experimental life where people can come together to create their own lives on terrains equipped to their ends. Such bases cannot be reservations for “leisure” activities separated from the society. No spatio-temporal zone is completely separable. The whole society exerts continual pressure even on its present vacation “reservations.” Situationist bases will exert pressure in the opposite direction, acting as bridgeheads for an invasion of everyday life as a whole. Unitary urbanism is the contrary of a specialized activity; to accept a separate urbanistic domain is already to accept the whole urbanistic lie and the falsehood permeating the whole of life.<br><br>
                        Urbanism promises happiness. It shall be judged accordingly. The coordination of artistic and scientific means of denunciation must lead to a complete denunciation of existing conditioning.<br><br>
                        6</br>THE LANDING<br>
                        All space is already occupied by the enemy, which has even reshaped its basic laws, its geometry, to its own purposes. Authentic urbanism will appear when the absence of this occupation is created in certain zones. What we call construction starts there. It can be clarified by the positive void concept developed by modern physics. Materializing freedom means beginning by appropriating a few patches of the surface of a domesticated planet.<br><br>
                        7</br>THE ILLUMINATION OF DÉTOURNEMENT<br>
                        The basic practice of the theory of unitary urbanism will be the transcription of the whole theoretical lie of urbanism, detourned for the purpose of de-alienation. We have to constantly defend ourselves from the poetry of the bards of conditioning — to jam their messages, to turn their rhythms inside out.<br><br>
                        8</br>CONDITIONS OF DIALOGUE<br>
                        Functional means practical. The only thing that is really practical is the resolution of our fundamental problem: our self-realization (our escape from the system of isolation). This and nothing else is useful and utilitarian. Everything else is nothing but by-products of the practical, mystifications of the practical.<br><br>
                        9</br>RAW MATERIAL AND TRANSFORMATION<br>
                        The situationist destruction of present conditioning is already at the same time the construction of situations. It is the liberation of the inexhaustible energies trapped within a petrified daily life. With the advent of unitary urbanism, present city planning (that geology of lies) will be replaced by a technique for defending the permanently threatened conditions of freedom, and individuals — who do not yet exist as such — will begin freely constructing their own history.<br><br>
                        10</br>END OF THE PREHISTORY OF CONDITIONING<br>
                        We are not contending that people must return to some stage previous to the era of conditioning, but rather that they must go beyond it. We have invented the architecture and the urbanism that cannot be realized without the revolution of everyday life — without the appropriation of conditioning by everyone, its endless enrichment and fulfillment.
                        </br></br>
                        </P>
                        </div>
                    </div>
                    <a href="" id='backW'>
                         <img src='img/back.png'>
                    </a>
                    <div id="urb">BASIC PROGRAM OF THE BUREAU OF UNITARY URBANISM</br>(ATTILA KOTÁNYI, RAOUL VANEIGEM, 1961)</div>
                    <div id="uunderl"></div>
                    <div id="urunderl"></div>
                </div>`;
    });
    $("#items").hide();
    $("#nav").hide();
    $("#backg").hide();
    // let ht = $("p").height() * 1.19;
    // $("#backgW").css("height", ht + "px");
    $("body").css({
      height: "auto",
      overflowY: "scroll",
    });
    if ($("#idd a").css("visibility") === "visible") {
      $("#backW").on("click", function () {});
    } else {
      $("#backW").on("click", function (e) {
        e.preventDefault();
        $("#backgW").remove();
        $("#nav").show();
        $("#backg").show();
        $("body,html").animate({ scrollTop: 0 }, 1);
        // $("body,html").animate({ scrollLeft: 0 }, 1);
      });
    }
  });

  // #nbana
  $("#nbana").on("click", function () {
    $("#wrapper").after(function () {
      return `<div id='backgW'>
                    <div id='banas'>
                        <div id='batext'>
                        <p>
                        1</br>
                        Bureaucratic capitalism has found its legitimation in Marx. I am not referring here to orthodox Marxism’s dubious merit of having reinforced the neocapitalist structures whose present reorganization is an implicit homage to Soviet totalitarianism; I am stressing the extent to which crude versions of Marx’s most profound analyses of alienation have become generally recognized in the most commonplace realities — realities which, stripped of their magical veil and materialized in each gesture, have become the sole substance of the daily lives of an increasing number of people. In a word, bureaucratic capitalism contains the tangible reality of alienation; it has brought it home to everybody far more successfully than Marx could ever have hoped to do, it has banalized it as the reduction of material poverty has been accompanied by a spreading mediocrity of existence. As poverty has been reduced in terms of survival, it has become more profound in terms of our way of life — this is at least one widespread feeling that exonerates Marx from all the interpretations a degenerate Bolshevism has made of him. The “theory” of peaceful coexistence has accelerated this awareness and revealed, to those who were still confused, that exploiters can get along quite well with each other despite their spectacular divergences.</br></br>
                        2</br>
                        “Any act,” writes Mircea Eliade, “can become a religious act. Human existence is realized simultaneously on two parallel planes, that of temporality, becoming, illusion, and that of eternity, substance, reality.” In the nineteenth century the brutal divorce of these two planes demonstrated that power would have done better to have maintained reality in a mist of divine transcendence. But we must give reformism credit for succeeding where Bonaparte had failed, in dissolving becoming in eternity and reality in illusion. This union may not be as solid as the sacraments of religious marriage, but it lasts, which is all that the managers of coexistence and social peace can ask of it. This is also what leads us to define ourselves — in the illusory but inescapable perspective of duration — as the end of abstract temporality, as the end of the reified time of our acts; to define ourselves — does it have to be spelled out? — at the positive pole of alienation as the end of social alienation, as the end of humanity’s term of social alienation.</br></br>
                        3</br>
                        The socialization of primitive human groups reveals a will to struggle more effectively against the mysterious and terrifying forces of nature. But struggling in the natural environment, at once with it and against it, submitting to its most inhuman laws in order to wrest from it an increased chance of survival — doing this could only engender a more evolved form of aggressive defense, a more complex and less primitive attitude, manifesting on a higher level the contradictions that the uncontrolled and yet influenceable forces of nature never ceased to impose. In becoming socialized, the struggle against the blind domination of nature triumphed inasmuch as it gradually assimilated primitive, natural alienation, but in another form. The struggle against natural alienation gave rise to social alienation. Is it by chance that a technological civilization has developed to such a point that this social alienation has been revealed by its conflict with the last areas of natural resistance that technological power hadn’t managed (and for good reasons) to subjugate? Today the technocrats propose to put an end to primitive alienation: with a stirring humanitarianism they exhort us to perfect the technical means that “in themselves” would enable us to conquer death, suffering, discomfort and boredom. But to eliminate death would be less of a miracle than to eliminate suicide and the desire to die. There are ways of abolishing the death penalty than can make one miss it. Up till now the particular uses that have been made of technology — or more generally the socio-economic context in which human activity is confined — while quantitatively reducing the number of occasions of pain and death, have allowed death itself to eat like a cancer into the heart of each person’s life.</br></br>
                        4</br>
                        The prehistoric food-gathering age was succeeded by the hunting age during which clans formed and strove to increase their chances of survival. Hunting grounds and preserves were staked out from which outsiders were absolutely excluded — the welfare of the whole clan depended on it. As a result, the freedom gained by settling down more safely and comfortably within the natural environment engendered its own negation outside the boundaries laid down by the clan and forced the group to modify its customary rules in organizing its relations with excluded and threatening groups. From the moment it appeared, socially engendered economic survival implied the existence of boundaries, restrictions, conflicting rights. It should never be forgotten that until now both history and our own nature have developed in accordance with the development of private appropriation: the seizing of control by a class, group, caste or individual of a general power over a socio-economic survival whose form remains complex, ranging from ownership of land, territory, factories or capital to the “pure” exercise of power over people (hierarchy). Beyond the struggle against regimes whose vision of paradise is a cybernetic welfare state lies the necessity of a still vaster struggle against a fundamental and initially natural state of things, in the development of which capitalism plays only an incidental, transitory role; a state of things that will only disappear with the disappearance of the last traces of hierarchical power — along with the “swine of humanity,” of course.</br></br>
                        5</br>
                        To be an owner is to claim a good one prevents others from using — while at the same time acknowledging everyone’s abstract, potential right to ownership. By excluding people from a real right of ownership, the owner extends his dominion over those he has excluded (absolutely over nonowners, relatively over other owners), without whom he is nothing. The nonowners have no choice in the matter. The owner appropriates and alienates them as producers of his own power, while the necessity of ensuring their own physical existence forces them despite themselves to collaborate in producing their own exclusion and to survive without ever being able to live. Excluded, they participate in ownership through the mediation of the owner, a mystical participation characterizing from the outset all the clan and social relationships that gradually replaced the principle of obligatory cohesion in which each member was an integral part of the group (“organic interdependence”). Their guarantee of survival depends on their activity within the framework of private appropriation; they reinforce a property right from which they are excluded. Due to this ambiguity each of them sees himself as participating in ownership, as a living fragment of the right to possess, and this belief in turn reinforces their condition as excluded and possessed. (Extreme cases of this alienation: the faithful slave, the cop, the bodyguard, the centurion — creatures who, through a sort of union with their own death, confer on death a power equal to the forces of life and identify in a destructive energy the negative and positive poles of alienation, the absolutely submissive slave and the absolute master.) It is of vital importance to the exploiter that this appearance is maintained and made more sophisticated; not because he is especially Machiavellian, but simply because he wants to stay alive. The organization of appearances depends on the survival of the owner and his privileges, which in turn depend on the physical survival of the nonowner, who can thus remain alive while being exploited and excluded from being a real person. Private appropriation and domination are thus originally imposed and felt as a positive right, but in the form of a negative universality. Valid for everyone, justified in everyone’s eyes by divine or natural law, the right of private appropriation is objectified in a general illusion, in a universal transcendence, in an essential law under which everyone individually manages to tolerate the more or less narrow limits assigned to his right to live and to the conditions of life in general.</br></br>
                        6</br>
                        In this social context the function of alienation must be understood as a condition of survival. The labor of the nonowners is subject to the same contradictions as the right of private appropriation. It transforms them into possessed beings, into producers of their own expropriation and exclusion, but it represents the only chance of survival for slaves, for serfs, for workers — so much so that the activity that allows their existence to continue by emptying it of all content ends up, through a natural and sinister reversal of perspective, by taking on a positive appearance. Not only has value been attributed to work (as a form of self-sacrifice during the old regime, and in its most mentally degrading forms in bourgeois ideology and in the so-called People’s Democracies), but very early on to work for a master, to alienate oneself willingly, became the honorable and scarcely questioned price of survival. The satisfaction of basic needs remains the best safeguard of alienation; it is best dissimulated by being justified on the grounds of undeniable necessities. Alienation multiplies needs because it can satisfy none of them; nowadays lack of satisfaction is measured in the number of cars, refrigerators, TVs: the alienating objects have lost the ruse and mystery of transcendence, they are there in their concrete poverty. To be rich today is to possess the greatest quantity of poor objects.</br></br> 
                        Up till now surviving has prevented us from living. This is why much is to be expected of the increasingly obvious impossibility of survival, an impossibility that will become all the more obvious as the glut of conveniences and elements of survival reduces life to a single choice: suicide or revolution.</br></br>                        
                        7</br>
                        The sacred presides even over the struggle against alienation. As soon as the relations of exploitation and the violence that underlies them are no longer concealed by the mystical veil, there is a breakthrough, a moment of clarity — the struggle against alienation is suddenly revealed as a ruthless hand-to-hand fight with naked power, power exposed in its brute force and its weakness, a vulnerable giant whose slightest wound confers on the attacker the infamous notoriety of an Erostratus. Since power survives, the event remains ambiguous. Praxis of destruction, sublime moment when the complexity of the world becomes tangible, transparent, within everyone’s grasp; inexpiable revolts — those of the slaves, the Jacques, the iconoclasts, the Enragés, the Fédérés, Kronstadt, the Asturias, and — promises of things to come — the hooligans of Stockholm and the wildcat strikes. Only the destruction of all hierarchical power will allow us to forget these. We intend to make sure that it does.</br></br> 
                        The deterioration of mythical structures and their slowness in regenerating themselves, which make possible the awakening of consciousness and the critical penetration of insurrection, are also responsible for the fact that once the “excesses” of revolution are past, the struggle against alienation is grasped on a theoretical plane, subjected to an “analysis” that is a carryover from the demystification preparatory to revolt. It is at this point that the truest and most authentic aspects of a revolt are reexamined and repudiated by the “we didn’t really mean to do that” of the theoreticians charged with explaining the meaning of an insurrection to those who made it — to those who aim to demystify by acts, not just by words.</br></br> 
                        All acts contesting power call for analysis and tactical development. Much can be expected of:</br></br> 
                        a) the new proletariat, which is discovering its destitution amid consumer abundance (see the development of the workers’ struggles presently beginning in England, and the attitudes of rebellious youth in all the modern countries);</br></br> 
                        b) countries that have had enough of their partial, sham revolutions and are consigning their past and present theorists to the museums (see the role of the intelligentsia in the Eastern bloc);</br></br> 
                        c) the Third World, whose mistrust of technological myths has been kept alive by the colonial cops and mercenaries, the last, over-zealous militants of a transcendence against which they are the best possible vaccination;</br></br> 
                        d) the force of the SI (“our ideas are in everyone’s mind”), capable of forestalling remote-controlled revolts, “crystal nights” and sheepish resistance.</br></br>                     
                        8</br>
                        Private appropriation is linked to the dialectic of particular and general. In the mystical realm where the contradictions of the slave and feudal systems are resolved, the nonowner, excluded as a particular individual from the right of ownership, strives to ensure his survival through his labor: the more he identifies with the interests of the master, the more successful he is. He knows the other nonowners only through their joint plight: the compulsory surrender of their labor power (Christianity recommended voluntary surrender: once the slave “willingly” offered his labor power, he ceased to be a slave), the search for the optimum conditions of survival, and mystical identification. Struggle, though born of a universal will to survive, takes place on the level of appearances where it brings into play identification with the desires of the master and thus introduces a certain individual rivalry that reflects the rivalry between the masters. Competition develops on this plane as long as the exploitive relations remain dissimulated behind a mystical veil and as long as the conditions producing this veil persist; or to put it another way, as long as the degree of slavery determines the slave’s consciousness of the degree of lived reality. (We are still at the stage of calling “objective consciousness” what is in reality the consciousness of being an object.) The owner, for his part, depends on the general acknowledgment of a right from which he alone is not excluded, but which is seen on the plane of appearances as a right accessible to each of the excluded taken individually. His privileged position depends on such a belief, and this belief is also the basis for the strength that is essential if he is to hold his own among the other owners; it is his strength. If he seems to renounce exclusive appropriation of everything and everybody, if he poses less as a master than as a servant of the public good and defender of collective security, then his power is crowned with glory and to his other privileges he adds that of denying, on the level of appearances (which is the only level of reference in the world of one-way communication), the very notion of personal appropriation. Denying that anyone has this right, he repudiates the other owners. In the feudal perspective the owner is not integrated into appearances in the same way as the nonowners, slaves, soldiers, functionaries and servants of all kinds. The lives of the latter are so squalid that the majority can live only as a caricature of the Master (the feudal lord, the prince, the major-domo, the taskmaster, the high priest, God, Satan). But the master himself is also forced to play one of these caricatural roles. He can do so without much effort since his pretension to total life is already so caricatural, isolated as he is among those who can only survive. He is already one of our own kind (with the added grandeur of a past epoch, which adds a poignant savor to his sadness); he, like each of us, was anxiously seeking the adventure where he could find himself on the road to his total perdition. Could the master, at the very moment he alienates the others, see that he has reduced them to dispossessed and excluded beings, and thus realize that he is only an exploiter, a purely negative being? Such an awareness is unlikely, and would be dangerous. By extending his dominion over the greatest possible number of subjects, isn’t he enabling them to survive, giving them their only chance of salvation? (“What would become of the workers if the capitalists weren’t kind enough to employ them?” the high-minded souls of the nineteenth century liked to ask.) In fact, the owner officially excludes himself from all claim to private appropriation. To the sacrifice of the nonowner, who through his labor exchanges his real life for an apparent one (thus avoiding immediate death by allowing the master to determine his variety of living death), the owner replies by appearing to sacrifice his nature as owner and exploiter; he excludes himself mythically, he puts himself at the service of everyone and of myth (at the service of God and his people, for example). With an additional gesture, with an act whose gratuitousness bathes him in an otherworldly radiance, he gives renunciation its pure form of mythical reality: renouncing the common life, he is the poor man amidst illusory wealth, he who sacrifices himself for everyone while all the other people only sacrifice themselves for their own sake, for the sake of their survival. He turns his predicament into prestige. The more powerful he is, the greater his sacrifice. He becomes the living reference point of the whole illusory life, the highest attainable point in the scale of mythical values. “Voluntarily” withdrawn from common mortals, he is drawn toward the world of the gods, and his more or less recognized participation in divinity, on the level of appearances (the only generally acknowledged frame of reference), consecrates his rank in the hierarchy of the other owners. In the organization of transcendence the feudal lord — and through association with him the other owners of power or means of production, in varying degrees — is led to play the principal role, the role that he really does play in the economic organization of the group’s survival. As a result, the existence of the group is bound on every level to the existence of the owners as such, to those who, owning everything because they own everybody, force everyone to renounce their lives on the pretext of the owners’ unique, absolute and divine renunciation. (From the god Prometheus, punished by the gods, to the god Christ, punished by men, the sacrifice of the Owner becomes vulgarized, it loses its sacred aura, becomes humanized.) Myth thus unites owner and nonowner, enveloping them in a common form in which the necessity of survival, whether mere physical survival or survival as a privileged being, forces them to live on the level of appearances and of the inversion of real life, the inversion of the life of everyday praxis. We are still there, waiting to live a life less than or beyond a mystique against which our every gesture protests while submitting to it.</br></br>
                        9</br>
                        Myth — the unitary absolute in which the contradictions of the world find an illusory resolution, the harmonious and constantly harmonized vision that reflects and reinforces the reigning order — is the sphere of the sacred, the extrahuman zone where an abundance of revelations are manifested but where the revelation of the process of private appropriation is carefully suppressed. Nietzsche saw this when he wrote “All becoming is a criminal revolt from eternal being, and its price is death.” When the bourgeoisie claimed to replace the pure Being of feudalism with Becoming, all it really did was to desacralize Being and resacralize Becoming to its own profit. It elevated its own Becoming to the status of Being, no longer that of absolute ownership but rather that of relative appropriation: a petty democratic and mechanical Becoming, with its notions of progress, merit and causal succession. The owner’s life hides him from himself; bound to myth by a life-and-death pact, he cannot see himself in the positive and exclusive enjoyment of any good except through the lived experience of his own exclusion. (And isn’t it through this mythical exclusion that the nonowners will come to grasp the reality of their own exclusion?) He bears the responsibility for a group, he takes on the burden of a god. Submitting himself to its benediction and its retribution, he swathes himself in austerity and wastes away. Model of gods and heroes, the master, the owner, is the true reality of Prometheus, of Christ, of all those whose spectacular sacrifice has made it possible for “the vast majority of people” to continue to sacrifice themselves to the extreme minority, to the masters. (Analysis of the owner’s sacrifice should be examined more carefully: isn’t the case of Christ really the sacrifice of the owner’s son? If the owner can never sacrifice himself except on the level of appearances, then Christ stands for the real immolation of the owner’s son when circumstances leave no other alternative. As a son he is only an owner at an early stage of development, an embryo, little more than a dream of future ownership. In this mythic dimension belongs Maurice Barrès’s famous remark in 1914, when war had arrived and made his dreams come true at last: “Our youth, as is proper, has gone to shed torrents of our blood.”) This rather distasteful little game, before it became transformed into a symbolic rite, knew a heroic period when kings and tribal chiefs were ritually put to death according to their “will.” Historians assure us that these august martyrs were soon replaced by prisoners, slaves or criminals. The penalty was delegated, but the rulers kept the halo.</br></br>
                        10</br>
                        The concept of a common fate is based on the sacrifice of the owner and the nonowner. Put another way, the notion of a “human condition” is based on an ideal and tormented image whose purpose is to try to resolve the irresolvable opposition between the mythical sacrifice of the minority and the really sacrificed life of everyone else. The function of myth is to unify and eternalize, in a succession of static moments, the dialectic of “will-to-live” and its opposite. This universally dominant factitious unity attains its most tangible and concrete representation in communication, particularly in language. Ambiguity is most manifest at this level; it leads to a lack of real communication, it puts the analyst at the mercy of ridiculous phantoms, at the mercy of words — eternal and changing instants — whose content varies according to who pronounces them, as does the notion of sacrifice. When language is put to the test, it can no longer dissimulate the misrepresentation and thus it provokes the crisis of participation. In the language of an era one can follow the traces of total revolution, unfulfilled but always imminent. They are the exalting and terrifying signs of the upheavals they foreshadow, but who takes them seriously? The discredit striking language is as deeply rooted and instinctive as the suspicion with which myths are viewed by people who at the same time remain firmly attached to them. How can key words be defined by other words? How can phrases be used to point out the signs that refute the phraseological organization of appearances? The best texts still await their justification. When a poem by Mallarmé becomes the sole explanation for an act of revolt, then poetry and revolution will have overcome their ambiguity. To await and prepare for that moment is to manipulate information not as the last shock wave whose significance escapes everyone, but as the first repercussion of an act still to come.</br></br>
                        11</br>
                        Born of man’s will to survive the uncontrollable forces of nature, myth is a public welfare policy that has outlived its necessity. It has consolidated its tyrannical force by reducing life to the sole dimension of survival, by negating it as movement and totality.</br></br> 
                        When contested, myth homogenizes the diverse attacks on it; sooner or later it engulfs and assimilates them. Nothing can withstand it, no image or concept that attempts to destroy the dominant spiritual structures. It reigns over the expression of facts and of lived experience, on which it imposes its own interpretive structure (dramatization). Private consciousness is the consciousness of lived experience that finds its expression on the level of organized appearances.</br></br> 
                        Myth is sustained by rewarded sacrifice. Since every individual life is based on its own renunciation, lived experience must be defined as sacrifice and recompense. As a reward for his asceticism, the initiate (the promoted worker, the specialist, the manager — new martyrs canonized democratically) is granted a niche in the organization of appearances; he is made to feel at home in alienation. But collective shelters disappeared with unitary societies, all that’s left is their later concrete embodiments for the use of the general public: temples, churches, palaces . . . memorials of a universal protection. Shelters are private nowadays, and even if their protection is far from certain there can be no mistaking their price.</br></br>
                        12</br>
                        “Private” life is defined primarily in a formal context. It is, to be sure, engendered by the social relations created by private appropriation, but its essential form is determined by the expression of those relations. Universal, incontestable but constantly contested, this form makes appropriation a right belonging to everyone and from which everyone is excluded, a right one can obtain only by renouncing it. As long as it fails to break free of the context imprisoning it (a break that is called revolution), the most authentic experience can be grasped, expressed and communicated only by way of an inversion through which its fundamental contradiction is dissimulated. In other words, if a positive project fails to sustain a praxis of radically overthrowing the conditions of life — which are nothing other than the conditions of private appropriation — it does not have the slightest chance of escaping being taken over by the negativity that reigns over the expression of social relationships: it is coopted like an inverted mirror image. In the totalizing perspective in which it conditions the whole of everyone’s life, and in which its real and its mythic power can no longer be distinguished (both powers being both real and mythical), the process of private appropriation has made it impossible to express life any way except negatively. Life in its entirety is immersed in a negativity that corrodes it and formally defines it. To talk of life today is like talking of rope in the house of a hanged man. Since the key of will-to-live has been lost we have been wandering in the corridors of an endless mausoleum. The dialogue of chance and the throw of the dice no longer suffices to justify our lassitude; those who still accept living in well-furnished weariness picture themselves as leading an indolent existence while failing to notice in each of their daily gestures a living denial of their despair, a denial that should rather make them despair only of the poverty of their imagination. Forgetting life, one can identify with a range of images, from the brutish conqueror and brutish slave at one pole to the saint and the pure hero at the other. The air in this shithouse has been unbreathable for a long time. The world and man as representation stink like carrion and there’s no longer any god around to turn the charnel houses into beds of lilies. After all the ages men have died while accepting without notable change the explanations of gods, of nature and of biological laws, it wouldn’t seem unreasonable to ask if we don’t die because so much death enters — and for very specific reasons — into every moment of our lives.</br></br>
                        13</br>
                        Private appropriation can be defined notably as the appropriation of things by means of the appropriation of people. It is the spring and the troubled water where all reflections mingle and blur. Its field of action and influence, spanning the whole of history, seems to have been characterized until now by a fundamental double behavioral determination: an ontology based on sacrifice and negation of self (its subjective and objective aspects respectively) and a fundamental duality, a division between particular and general, individual and collective, private and public, theoretical and practical, spiritual and material, intellectual and manual, etc. The contradiction between universal appropriation and universal expropriation implies that the master has been seen for what he is and isolated. This mythical image of terror, destitution and renunciation presents itself to slaves, to servants, to all those who can’t stand living as they do; it is the illusory reflection of their participation in property, a natural illusion since they really do participate in it through the daily sacrifice of their energy (what the ancients called pain or torture and we call labor or work) since they themselves produce this property in a way that excludes them. The master can only cling to the notion of work-as-sacrifice, like Christ to his cross and his nails; it is up to him to authenticate sacrifice, to apparently renounce his right to exclusive enjoyment and to cease to expropriate with purely human violence (that is, violence without mediation). The sublimity of the gesture obscures the initial violence, the nobility of the sacrifice absolves the commando, the brutality of the conqueror is bathed in the light of a transcendence whose reign is internalized, the gods are the intransigent guardians of rights, the short-tempered shepherds of a peaceful, law-abiding flock of owners and owner wannabes. The gamble on transcendence and the sacrifice it implies are the masters’ greatest conquest, their most accomplished submission to the necessity of conquest. Anyone who intrigues for power while refusing the purification of renunciation (the brigand or the tyrant) will sooner or later be tracked down and killed like a mad dog, or worse: as someone who only pursues his own ends and whose blunt disdain for “work” lacks any tact toward others’ feelings: serial killers like Troppmann, Landru, Petiot were doomed to defeat because they murdered people without justifying it in the name of defending the Free World, the Christian West, the State or Human Dignity. By refusing to play the rules of the game, pirates, gangsters and outlaws disturb those with good consciences (whose consciences are a reflection of myth); but the masters, by killing the encroacher or enrolling him as a cop, reestablish the omnipotence of the “eternal truth”: namely, that those who don’t sell themselves lose their right to survive and those who do sell themselves lose their right to live. The sacrifice of the master is the essence of humanism, which is what makes humanism — and let this be understood once and for all — the miserable negation of everything human. Humanism is the master taken seriously at his own game, acclaimed by those who see in his apparent sacrifice (that caricatural reflection of their real sacrifice) a reason to hope for salvation. Justice, Dignity, Nobility, Freedom... these words that yap and howl, are they anything but household pets who have continued to reliably return home to their masters since the time when heroic lackeys won the right to walk them on the streets? To use them is to forget that they are the ballast that enables power to rise out of reach. And if we imagine a regime deciding that the mythical sacrifice of the masters should not be promoted in such universal forms, and setting about tracking down these word-concepts and wiping them out, we could well expect the Left to be incapable of combating it with anything more than a plaintive battle of words whose every phrase, invoking the “sacrifice” of a previous master, calls for an equally mythical sacrifice of a new one (a leftist master, a regime mowing down workers in the name of the proletariat). Bound to the notion of sacrifice, humanism is born of the mutual fear of masters and slaves: it is nothing but the solidarity of a shit-scared humanity. But those who reject all hierarchical power can use any word as a weapon to punctuate their action. Lautréamont and the illegalist anarchists were already aware of this; so were the dadaists.</br></br>
                        The appropriator thus becomes an owner from the moment he puts the ownership of people and things in the hands of God or of some universal transcendence, whose omnipotence is reflected back on him as a grace sanctifying his slightest gesture. To oppose an owner thus consecrated is to oppose God, nature, the fatherland, the people. In short, to exclude oneself from the whole physical and spiritual world. “We must neither govern nor be governed,” writes Marcel Havrenne so neatly. For those who add an appropriate violence to his humor, there is no longer any salvation or damnation, no place in the universal order, neither with Satan, the great coopter of the faithful, nor in any form of myth, since they are the living proof of the uselessness of all that. They were born for a life yet to be invented; insofar as they lived, it was on this hope that they finally came to grief.</br></br>
                        Two corollaries of singularization in transcendence:</br></br>
                        a) If ontology implies transcendence, it is clear that any ontology automatically justifies the being of the master and the hierarchical power wherein the master is reflected in degraded, more or less faithful images.</br></br>
                        b) Over the distinction between manual and intellectual work, between practice and theory, is superimposed the distinction between work-as-real-sacrifice and the organization of work in the form of apparent sacrifice.</br></br>
                        It would be tempting to explain fascism — among other reasons for it — as an act of faith, the auto-da-fé of a bourgeoisie haunted by the murder of God and the destruction of the great sacred spectacle, dedicating itself to the devil, to an inverted mysticism, a black mysticism with its rituals and its holocausts. Mysticism and high finance.</br></br>
                        It should not be forgotten that hierarchical power is inconceivable without transcendence, without ideologies, without myths. Demystification itself can always be turned into a myth: it suffices to “omit,” most philosophically, demystification by acts. Any demystification so neutralized, with the sting taken out of it, becomes painless, euthanasic, in a word, humanitarian. Except that the movement of demystification will ultimately demystify the demystifiers.</br></br>
                        14</br>
                        By directly attacking the mythical organization of appearances, the bourgeois revolutions unintentionally attacked the weak point not only of unitary power but of any hierarchical power whatsoever. Does this unavoidable mistake explain the guilt complex that is one of the dominant traits of bourgeois mentality? In any case, the mistake was undoubtedly inevitable.</br></br>
                        It was a mistake because once the cloud of lies covering private appropriation was pierced, myth was shattered, leaving a vacuum that could be filled only by a delirious freedom and a splendid poetry. Orgiastic poetry, to be sure, has not yet destroyed power. Its failure is easily explained and its ambiguous signs reveal the blows struck at the same time as they heal the wounds. And yet — let us leave the historians and aesthetes to their collections — one has only to pick at the scab of memory and the cries, words and gestures of the past make the whole body of power bleed again. The whole organization of the survival of memories will not prevent them from dissolving into oblivion as they come to life; just as our survival will dissolve in the construction of our everyday life.</br></br>
                        And it was an inevitable process: as Marx showed, the appearance of exchange-value and its symbolic representation by money opened a profound latent crisis in the heart of the unitary world. The commodity introduced into human relationships a universality (a 1000-franc bill represents anything I can obtain for that sum) and an egalitarianism (equal things are exchanged). This “egalitarian universality” partially escapes both the exploiter and the exploited, but they recognize each other through it. They find themselves face to face, confronting each other no longer within the mystery of divine birth and ancestry, as was the case with the nobility, but within an intelligible transcendence, the Logos, a body of laws that can be understood by everyone, even if such understanding remains cloaked in mystery. A mystery with its initiates: first of all priests struggling to maintain the Logos in the limbo of divine mysticism, but soon yielding to philosophers and then to technicians both their positions and the dignity of their sacred mission. From Plato’s Republic to the Cybernetic State.</br></br>
                        Thus, under the pressure of exchange-value and technology (what we might call “mediation at your fingertips”), myth was gradually secularized. Two facts should be noted, however:
                        a) As the Logos frees itself from mystical unity, it affirms itself both within and against that unity. Rational and logical structures of behavior are superimposed on the old magical and analogical ones, simultaneously negating and preserving them (mathematics, poetics, economics, aesthetics, psychology, etc.).</br></br>
                        b) Each time the Logos, the “organization of intelligible appearances,” becomes more autonomous, it tends to break away from the sacred and become fragmented. In this way it presents a double danger for unitary power. We have already seen that the sacred expresses power’s seizure of the totality, and that anyone wanting to accede to the totality must do so through the mediation of power — the repression of mystics, alchemists and gnostics is sufficient proof of this. This also explains why present-day power “protects” specialists (though without completely trusting them): it vaguely senses that they are the missionaries of a resacralized Logos. Various historical movements represent attempts within mystical unitary power to found a rival unitary power based on the Logos: Christian syncretism (which makes God psychologically explainable), the Renaissance, the Reformation and the Enlightenment.</br></br>
                        The masters who strove to maintain the unity of the Logos were well aware that only unity can stabilize power. Examined more closely, their efforts can be seen not to have been as vain as the fragmentation of the Logos in the nineteenth and twentieth centuries would seem to prove. In the general movement of atomization the Logos has been broken down into specialized techniques (physics, biology, sociology, papyrology, etc.), but at the same time the need to reestablish the totality has become more imperative. It should not be forgotten that all it would take would be an all-powerful technocratic power in order for there to be a totalitarian domination of the totality, for myth’s domination of the totality to be succeeded by the Logos’s unitary cybernetic power. In such an event the vision of the Encyclopédistes (strictly rationalized progress stretching indefinitely into the future) would have known only a two-century postponement before being realized. This is the direction in which the Stalino-cyberneticians are preparing the future. In this context, peaceful coexistence should be seen as a preliminary step toward a totalitarian unity. It is time everyone realized that they are already resisting it.</br></br>            
                        15</br>
                        We know the battlefield. The problem now is to prepare for battle before the pataphysician, armed with his totality without technique, and the cybernetician, armed with his technique without totality, consummate their political coitus.</br></br>
                        From the standpoint of hierarchical power, myth could be desacralized only if the Logos, or at least its desacralizing elements, were resacralized. Attacking the sacred was at the same time supposed to liberate the totality and thus destroy power. (We’ve heard that one before!) But the power of the bourgeoisie — fragmented, impoverished, constantly contested — maintains a relative stability by relying on the following ambiguity: Technology, which objectively desacralizes, subjectively appears as an instrument of liberation. Not a real liberation, which could be attained only by desacralization — that is, by the end of the spectacle — but a caricature, an imitation, an induced hallucination. What the unitary worldview previously transferred into the beyond (above), fragmentary power pro-jects (literally, “throws forward”) into a state of future well-being, of brighter tomorrows proclaimed from atop the dunghill of today — tomorrows that are nothing more than the present multiplied by the number of gadgets to be produced. From the slogan “Live in God” we have gone on to the humanistic motto “Survive until you are old,” euphemistically expressed as: “Stay young at heart and you’ll live a long time.”</br></br>
                        Once desacralized and fragmented, myth loses its grandeur and its spirituality. It becomes an impoverished form, retaining its former characteristics but revealing them in a concrete, harsh, tangible fashion. God doesn’t run the show anymore, and until the day the Logos takes over with its arms of technology and science, the phantoms of alienation will continue to materialize and sow disorder everywhere. Watch for those phantoms: they are the first signs of a future order. We must start to play right now if we want to avoid a future condemned to mere survival, or even a future in which survival itself will become impossible (the hypothesis of humanity destroying itself — and with it obviously the whole experiment of constructing everyday life). The vital objectives of a struggle for the construction of everyday life are the key, sensitive points of all hierarchical power. To build one is to destroy the other. Caught in the vortex of desacralization and resacralization, we aim above all to abolish (1) the organization of appearances as a spectacle in which everyone denies himself; (2) the separation on which private life is based, since it is there that the objective separation between owners and dispossessed is lived and reflected on every level; and (3) sacrifice. These three elements are obviously interdependent, just as are their opposites: participation, communication, and realization. The same applies to their respective contexts: nontotality (a bankrupt world, a controlled totality) and totality.</br></br>
                        16</br>
                        The human relationships that were formerly dissolved in divine transcendence (the totality crowned by the sacred) settled out and solidified as soon as the sacred stopped acting as a catalyst. Their materiality was revealed. As Providence was replaced by the capricious laws of the economy, the power of men began to appear behind the power of gods. Today a multitude of roles corresponds to the mythical role everyone once played under the divine spotlight. Though their masks are now human faces, these roles still require both actors and extras to deny their real lives in accordance with the dialectic of real and mythical sacrifice. The spectacle is nothing but secularized and fragmented myth. It forms the armor of a power (which could also be called essential mediation) that becomes vulnerable to every blow once it no longer succeeds in disguising (in the cacophonous harmony where all cries drown each other out) its nature as private appropriation, and the greater or lesser dose of misery it allots to everyone.</br></br>
                        Roles have become impoverished within the context of a fragmentary power eaten away by desacralization, just as the spectacle represents an impoverishment in comparison with myth. They betray its mechanisms and artifices so clumsily that power, to defend itself against popular denunciation of the spectacle, has no other alternative than to initiate such denunciation itself by even more clumsily replacing actors or ministers, or by organizing pogroms of prefabricated scapegoats (agents of Moscow, Wall Street, the Judeocracy or the Two Hundred Families). Which also means that the whole cast has been forced to become hams, that style has been replaced by mannerisms.</br></br>
                        Myth, as a motionless totality, encompassed all movement (pilgrimage can be considered as an example of adventure and fulfillment within immobility). On the one hand, the spectacle can seize the totality only by reducing it to a fragment or a series of fragments (psychological, sociological, biological, philological and mythological worldviews); on the other, it is situated at the point where the process of desacralization converges with the efforts at resacralization. Thus it can succeed in imposing immobility only within the real movement, the movement that changes it despite its resistance. In the era of fragmentation the organization of appearances makes movement a linear succession of motionless instants (this notch-to-notch progression is perfectly exemplified by Stalinist “Dialectical Materialism”). Under what we have called “the colonization of everyday life,” the only possible changes are changes of fragmentary roles. In terms of more or less inflexible conventions, one is successively citizen, parent, sexual partner, politician, specialist, professional, producer, consumer. Yet what boss doesn’t himself feel bossed? The proverb applies to everyone: You may sometimes get a fuck, but you always get fucked!</br></br>
                        The era of fragmentation has at least eliminated all doubt on one point: everyday life is the battlefield where the war between power and the totality takes place, with power having to use all its strength to control the totality.</br></br>
                        What do we demand in backing the power of everyday life against hierarchical power? We demand everything. We are taking our stand in a generalized conflict stretching from domestic squabbles to revolutionary war, and we have gambled on the will to live. This means that we must survive as antisurvivors. Fundamentally we are concerned only with the moments when life breaks through the glaciation of survival, whether those moments are unconscious or theorized, historical (e.g. revolution) or personal. But we must also recognize that we are prevented from freely following the course of such moments (except during the moment of revolution itself) not only by the general repression exerted by power, but also by the requirements of our own struggle and tactics. We have to find ways of compensating for this “margin of error” by broadening the scope of these moments and demonstrating their qualitative significance. What prevents what we say about the construction of everyday life from being coopted by the cultural and subcultural establishment (Arguments, academic thinkers with paid vacations) is the fact that all situationist ideas are faithful extensions of acts attempted constantly by thousands of people to try and prevent a day from being nothing but twenty-four hours of wasted time. Are we an avant-garde? If so, to be avant-garde means to move in step with reality.</br></br>
                        17</br>
                        We don’t claim to have a monopoly on intelligence, but only on its use. Our position is strategic, we are at the heart of every conflict. The qualitative is our striking force. People who half understand this journal ask us for an explanatory monograph thanks to which they will be able to convince themselves that they are intelligent and cultured — that is to say, idiots. Someone who gets exasperated and chucks it in the gutter is making a more meaningful gesture. Sooner or later it will have to be understood that the words and phrases we use are still lagging behind reality. The distortion and clumsiness in the way we express ourselves (which a man of taste called, not inaccurately, “a rather irritating kind of hermetic terrorism”) comes from our central position, our position on the ill-defined and shifting frontier where language captured by power (conditioning) and free language (poetry) fight out their infinitely complex war. To those who follow behind us we prefer those who reject us impatiently because our language is not yet authentic poetry — not yet the free construction of everyday life.</br></br>
                        Everything related to thought is related to the spectacle. Almost everyone lives in a state of terror at the possibility that they might awaken to themselves, and this fear is deliberately fostered by power. Conditioning, the special poetry of power, has extended its dominion so far (all material equipment belongs to it: press, television, stereotypes, magic, tradition, economy, technology — what we call captured language) that it has almost succeeded in dissolving what Marx called the undominated sector, replacing it with another, dominated one (see below our composite portrait of “the survivor”). But lived experience cannot so easily be reduced to a succession of empty roles. Resistance to the external organization of life, i.e. to the organization of life as survival, contains more poetry than any volume of verse or prose, and the poet (in the literary sense of the word) is one who has at least understood or sensed this fact. But such poetry is in a most dangerous situation. Certainly poetry in the situationist sense of the word is irreducible and cannot be coopted by power (as soon as an act is coopted it becomes a stereotype, something conditioned by the language of power). But it is encircled by power. Power contains the irreducible by isolating it. But such isolation cannot last; something has to give. The two pincers are, first, the threat of disintegration (insanity, illness, destitution, suicide), and second, remote-controlled therapeutics. The first grants death, the second grants a lifeless survival (empty communication, “togetherness” of family or friends, psychoanalysis in the service of alienation, medical care, ergotherapy). Sooner or later the SI must define itself as therapeutic: we are ready to defend the poetry made by all against the false poetry contrived by power (conditioning). Doctors and psychoanalysts better get it straight too, or they, along with architects and other apostles of survival, may one day have to take the consequences for what they have done.</br></br>
                        18</br>
                        All unresolved, unsuperseded antagonisms weaken. Such antagonisms can evolve only by remaining imprisoned in previous, unsuperseded forms (anticultural art within the cultural spectacle, for example). Any radical opposition that fails or that is partially successful (which amounts to the same thing) gradually degenerates into reformist opposition. Fragmentary oppositions are like the teeth on cogwheels, they mesh with each other and make the machine go round — the machine of the spectacle, the machine of power.</br></br>
                        Myth maintained all antagonisms within the archetype of Manicheanism. But what can function as an archetype in a fragmented society? The memory of previous antagonisms, presented in obviously devalued and unaggressive forms, appears today as the latest attempt to bring some coherence into the organization of appearances, so great is the extent to which the spectacle has become a spectacle of confusion and equivalences. We are ready to wipe out all trace of those memories by harnessing all the energy contained in previous antagonisms for a radical struggle soon to come. All the springs blocked by power will one day burst through to form a torrent that will change the face of the world.</br></br>
                        In a caricature of antagonisms, power urges everyone to be for or against Brigitte Bardot, the nouveau roman, the 4-horse Citroën, Italian cuisine, mescal, miniskirts, the UN, the classics, nationalization, thermonuclear war and hitchhiking. Everyone is asked their opinion about every detail in order to prevent them from forming one about the totality. However clumsy this maneuver may be, it might have worked if the salesmen in charge of peddling it from door to door were not themselves waking up to their own alienation. To the passivity imposed on the dispossessed masses is added the growing passivity of the directors and actors subjected to the abstract laws of the market and the spectacle and exercising less and less real power over the world. Signs of revolt are already appearing among the actors — stars trying to escape publicity, rulers criticizing their own power (Brigitte Bardot, Fidel Castro). The tools of power are wearing out; their desire for their own freedom is a factor that should be taken into account.</br></br>
                        19</br>
                        At the moment when slave revolts threatened to overthrow the power structure and reveal the relationship between transcendence and the mechanism of private appropriation, Christianity appeared with its grandiose reformism, whose central democratic demand was for the slaves to accede not to the reality of a human life — which would have been impossible without denouncing the exclusionary aspect of private appropriation — but rather to the unreality of an existence whose source of happiness is mythical (imitation of Christ as the price of the hereafter). What has changed since then? Anticipation of the hereafter has become anticipation of a brighter tomorrow; the sacrifice of real, immediate life is the price paid for the illusory freedom of an apparent life. The spectacle is the sphere where forced labor is transformed into voluntary sacrifice. Nothing is more suspect than the formula “To each according to his work” in a world where work is the blackmail of survival; to say nothing of “To each according to his needs” in a world where needs are determined by power. Any constructive project that tries to define itself autonomously and thus partially, and does not take into account that it is in fact defined by the negativity in which everything is suspended, becomes reformist. It is trying to build on quicksand as though it were a cement foundation. Ignoring or misunderstanding the context set by hierarchical power can only end up reinforcing that context. The spontaneous acts we see everywhere forming against power and its spectacle must be warned of all the obstacles in their path and must find a tactic taking into account the strength of the enemy and its means of cooption. This tactic, which we are going to popularize, is détournement.</br></br>
                        20</br>
                        Sacrifice must be rewarded. In exchange for their real sacrifice the workers receive the instruments of their liberation (comforts, gadgets), but this liberation remains purely fictitious since power controls the ways in which the material equipment can be used. Power uses to its own ends both the instruments and those who use them. The Christian and bourgeois revolutions democratized mythical sacrifice, the “sacrifice of the master.” Today there are countless initiates who receive crumbs of power for putting to public service the totality of their partial knowledge. They are no longer called “initiates” and not yet “priests of the Logos”; they are simply known as specialists.</br></br>
                        On the level of the spectacle their power is undeniable: the contestant on “Double Your Money” and the postal clerk chattering all day about all the mechanical features of his car both identify with the specialist, and we know how production managers use such identification to bring unskilled workers to heel. The true mission of the technocrats would be to unify the Logos — if only (due to one of the contradictions of fragmentary power) they themselves weren’t so absurdly compartmentalized and isolated. Each specialist is alienated by being out of phase with the others; each knows everything about one fragment and no one grasps the totality. What real control can the atomic technician, the strategist or the political specialist exercise over a nuclear weapon? What ultimate control can power hope to impose on all the gestures developing against it? The stage is so crowded with actors that chaos is the only master of the show. “Order reigns and doesn’t govern” (Internationale Situationniste #6).</br></br>
                        To the extent that the specialist takes part in the development of the instruments that condition and transform the world, he is preparing the way for the revolt of the privileged. Until now such revolt has been called fascism. It is essentially an operatic revolt — didn’t Nietzsche see Wagner as a precursor? — in which actors who have long been pushed aside and see themselves becoming less and less free suddenly insist on playing the leading roles. Clinically speaking, fascism is the hysteria of the spectacular world pushed to the point of climax. In this climax the spectacle momentarily ensures its unity while at the same time revealing its radical inhumanity. Through fascism and Stalinism, which constitute its romantic crises, the spectacle reveals its true nature: it is a disease.</br></br>
                        We are poisoned by the spectacle. All the elements necessary for a detoxification (that is, for our own construction of our everyday lives) are in the hands of specialists. We are thus highly interested in all these specialists, but in different ways. Some are hopeless cases: we are not, for example, going to try and show the specialists of power, the rulers, the extent of their delirium. On the other hand, we are ready to take into account the bitterness of specialists imprisoned in roles that are constricted, absurd or ignominious. We must confess, however, that our indulgence has its limits. If, in spite of all our efforts, they persist in putting their guilty conscience and their bitterness in the service of power by fabricating the conditioning that colonizes their own everyday lives; if they prefer an illusory representation in the hierarchy to true fulfillment; if they persist in ostentatiously brandishing their specializations (their painting, their novels, their equations, their sociometry, their psychoanalysis, their ballistics); finally, if, knowing perfectly well — and soon ignorance of this fact will be no excuse — that only power and the SI hold the key to using their specialization, they nevertheless still choose to serve power because power, battening on their inertia, has chosen them to serve it, then fuck them! There’s a limit to our generosity. They should understand all this, and especially the fact that the revolt of nonruling actors is henceforth linked to the revolt against the spectacle (see below the thesis on the SI and power).</br></br>
                        21</br>
                        The general disparagement of the lumpenproletariat stemmed from the use to which it was put by the bourgeoisie, which it served both as a regulating mechanism for power and as a source of recruits for the more dubious forces of order (cops, informers, hired thugs, artists...). Nevertheless, the lumpenproletariat embodies a remarkably radical implicit critique of the society of work. Its open contempt for both lackeys and bosses contains a good critique of work as alienation, a critique that has not been taken into consideration until now, not only because the lumpenproletariat was an ambiguous sector, but also because during the nineteenth and early twentieth century the struggle against natural alienation and the production of well-being still appeared as valid justifications for work.</br></br>
                        Once it became known that the abundance of consumer goods was nothing but the flip side of alienation in production, the lumpenproletariat took on a new dimension: it expressed a contempt for organized work which, in the age of the Welfare State, is gradually taking on the proportions of a demand that only the rulers still refuse to acknowledge. In spite of the constant attempts of power to coopt it, every experiment carried out on everyday life, that is, every attempt to construct it (an activity that has been illegal since the destruction of feudal power, where it was limited and reserved for the ruling minority), is concretized today in the critique of alienating work and the refusal to submit to forced labor. So much so that the new proletariat can be negatively defined as a “Front Against Forced Labor” bringing together all those who resist cooption by power. This is our field of action, the arena where we are gambling on the ruse of history against the ruse of power, backing the worker (whether steelworker or artist) who — consciously or not — rejects organized work and life against the worker who — consciously or not — accepts working at the dictates of power. In this perspective, it is not unreasonable to foresee a transitional period during which automation and the will of the new proletariat leave work solely to specialists, reducing managers and bureaucrats to the rank of temporary slaves. With the extension of automation, the “workers,” instead of supervising machines, could devote their attention to watching over the cybernetic specialists, whose sole task would be to increase a production that, through a reversal of perspective, will have ceased to be the priority sector, so as to serve the priority of life over survival.</br></br>
                        22</br>
                        Unitary power strove to dissolve individual existence in a collective consciousness in such a way that each social unit subjectively defined itself as a particle with a clearly determined weight suspended as though in oil. Everyone had to feel overwhelmed by the omnipresent evidence that everything was mere raw material in the hands of God, who used it for his own purposes, which were naturally beyond individual human comprehension. All phenomena were emanations of a supreme will; any seemingly unexplainable perturbation was presumed to be a means toward some larger, hidden harmony (the Four Kingdoms [of the Tarot], the Wheel of Fortune, trials sent by the gods). One can speak of a collective consciousness in the sense that it was simultaneously for each individual and for everyone: consciousness of myth and consciousness of particular-existence-within-myth. The power of the illusion was such that authentically lived life drew its meaning from what was not authentically lived. This is the reason for the priestly condemnation of life, the reduction of life to pure contingency, to sordid materiality, to vain appearance and to the lowest state of a transcendence that became increasingly degraded as it escaped mythical organization.</br></br>
                        God was the guarantor of space and time, whose coordinates defined unitary society. He was the common reference point for all mankind; space and time came together in him just as in him all beings became one with their destiny. In the era of fragmentation, man is torn between a time and a space that no transcendence can unify through the mediation of any centralized power. We are living in a space-time that is out of joint, deprived of any reference point or coordinate, as though we were never going to be able to come into contact with ourselves, although everything invites us to.</br></br>
                        There is a place where you create yourself and a time in which you play yourself. The space of everyday life, of our true realization, is encircled by every form of conditioning. The narrow space of our true realization defines us, yet we define ourselves in the time of the spectacle. To put it another way: our consciousness is no longer consciousness of myth and of particular-being-within-myth, but rather consciousness of the spectacle and of particular-role-within-the-spectacle. (I pointed out above the relationship between all ontology and unitary power; it should be recalled here that the crisis of ontology appears with the movement toward fragmentation.) Or to put it yet another way: in the space-time relation in which everyone and everything is situated, time has become the imaginary (the field of identifications); space defines us, although we define ourselves in the imaginary and although the imaginary defines us qua subjectivities.</br></br>
                        Our freedom is that of an abstract temporality in which we are named in the language of power (these names being the roles assigned to us), our only margin of choice being limited to finding officially accepted synonyms for ourselves. In contrast, the space of our authentic realization (the space of our everyday life) is under the dominion of silence. There is no name to name the space of lived experience except in poetry — in language liberating itself from the domination of power.</br></br>
                        23</br>
                        By desacralizing and fragmenting myth, the bourgeoisie was led to demand first of all independence of consciousness (demands for freedom of thought, freedom of the press, freedom of research, rejection of dogma). Consciousness thus ceased being more or less consciousness-reflecting-myth. It became consciousness of successive roles played within the spectacle. What the bourgeoisie demanded above all was the freedom of actors and extras in a spectacle no longer organized by God, his cops and his priests, but by natural and economic laws, “capricious and inexorable laws” defended by a new team of cops and specialists.</br></br>
                        God has been torn off like a useless bandage and the wound has stayed raw. The bandage may have prevented the wound from healing, but it justified suffering, it gave it a meaning well worth a few shots of morphine. Now suffering has no justification whatsoever and morphine is far from cheap. Separation has become concrete. Anyone at all can put their finger on it, and the only answer cybernetic society has to offer us is to become spectators of the gangrene and decay, spectators of survival.</br></br>
                        The drama of consciousness to which Hegel referred is actually the consciousness of drama. Romanticism resounds like the cry of the soul torn from the body, a suffering all the more acute as each of us finds himself alone in facing the fall of the sacred totality and of all the Houses of Usher.</br></br>
                        24</br>
                        The totality is objective reality, in the movement of which subjectivity can participate only in the form of realization. Anything separate from the realization of everyday life rejoins the spectacle — a hibernation in which survival is frozen and served out in slices. There can be no authentic realization except in objective reality, in the totality. Anything else is a farce. The objective realization that functions within the mechanism of the spectacle is nothing but the success of power-manipulated objects (the “objective realization in subjectivity” of famous artists, stars, personalities of Who’s Who). On the level of the organization of appearances, every success — and even every failure — is inflated until it becomes a stereotype, and is broadcast as though it were the only possible success or failure. So far power has been the only judge, though its judgment has been subjected to various pressures. Its criteria are the only valid ones for those who accept the spectacle and are satisfied to play a role in it. But there are no more artists on that stage, there are only extras.</br></br>
                        25</br>
                        The space-time of private life was harmonized in the space-time of myth. Fourier’s harmony responds to this perverted harmony. As soon as myth no longer encompasses the individual and the partial in a totality dominated by the sacred, each fragment sets itself up as a totality. The fragment set up as a totality is, in fact, the totalitarian. In the dissociated space-time that constitutes private life, time — made absolute in the form of abstract freedom, the freedom of the spectacle — consolidates by its very dissociation the spatial absolute of private life, its isolation, its constriction. The mechanism of the alienating spectacle wields such force that private life reaches the point of being defined as that which is deprived of spectacles: the fact that someone escapes roles and spectacular categories is felt as an additional deprivation, a distressful feeling which power uses as a pretext to reduce everyday life to insignificant gestures (sitting down, washing, opening a door).</br></br>
                        26</br>
                        The spectacle that imposes its norms on lived experience itself arises out of lived experience. Spectacular time, lived in the form of successive roles, makes the space of authentic experience the area of objective powerlessness, while at the same time the objective powerlessness that stems from the conditioning of private appropriation makes the spectacle the ultimate of potential freedom.</br></br>
                        Elements born of lived experience are acknowledged only on the level of the spectacle, where they are expressed in the form of stereotypes, although such expression is constantly contested and refuted in and by lived experience. The composite portrait of the survivors — those whom Nietzsche referred to as the “small ones” or the “last men” — can be conceived only in terms of the following dialectic of possibility/impossibility:</br></br>
                        a) Possibility on the level of the spectacle (variety of abstract roles) reinforces impossibility on the level of authentic experience.</br></br>
                        b) Impossibility (that is, limits imposed on real experience by private appropriation) determines the field of abstract possibilities.</br></br>
                        Survival is two-dimensional. Against such a reduction, what forces can bring out what constitutes the daily problem of all human beings: the dialectic of survival and life? Either the specific forces the SI has counted on will make possible the supersession of these contraries, reuniting space and time in the construction of everyday life; or life and survival will become locked in an antagonism growing weaker and weaker until the point of ultimate confusion and ultimate poverty is reached.</br></br>
                        27</br>
                        Lived reality is spectacularly fragmented and labeled in biological, sociological or other categories which, while being related to the communicable, never communicate anything but facts emptied of their authentically lived content. It is in this sense that hierarchical power, imprisoning everyone in the objective mechanism of private appropriation (admission/exclusion, see section #3), is also a dictatorship over subjectivity. It is as a dictator over subjectivity that it strives, with limited success, to force each individual subjectivity to become objectified, that is, to become an object it can manipulate. This extremely interesting dialectic should be analyzed in greater detail (objective realization in subjectivity — the realization of power — and objective realization in objectivity — which enters into the praxis of constructing everyday life and destroying power).</br></br>
                        Facts are deprived of content in the name of the communicable, in the name of an abstract universality, in the name of a perverted harmony in which everyone realizes himself in an inverted perspective. In this context the SI is in the line of contestation that runs through Sade, Fourier, Lewis Carroll, Lautréamont, surrealism and lettrism — at least in its least-known currents, which were the most extreme.</br></br>
                        Within a fragment set up as a totality, each further fragment is itself totalitarian. Individualism treated sensitivity, desire, will, intelligence, good taste, the subconscious and all the categories of the ego as absolutes. Today sociology is enriching the categories of psychology, but the introduction of variety into the roles merely accentuates the monotony of the identification reflex. The freedom of the “survivor” will be to assume the abstract constituent to which he has “chosen” to reduce himself. Once any real fulfillment has been put out of the picture, all that remains is a psycho-sociological dramaturgy in which interiority functions as a safety valve to drain off the effects one has worn for the daily exhibition. Survival becomes the ultimate stage of life organized as the mechanical reproduction of memory.</br></br>
                        28</br>
                        Until now the approach to the totality has been falsified. Power has parasitically interposed itself as an indispensable mediation between man and nature. But the relation between man and nature is based only on praxis. It is praxis which constantly breaks through the coherent veneer of lies that myth and its replacements try to maintain. It is praxis, even alienated praxis, which maintains contact with the totality. By revealing its own fragmentary character, praxis at the same time reveals the real totality (reality): it is the totality being realized by way of its opposite, the fragment.</br></br>
                        In the perspective of praxis, every fragment is totality. In the perspective of power, which alienates praxis, every fragment is totalitarian. This should be enough to wreck the attempts that cybernetic power will make to envelop praxis in a mystique, although the seriousness of these attempts should not be underestimated.</br></br>
                        All forms of praxis enter our project. They enter with their share of alienation, with the impurities of power; but we are capable of filtering them. We will elucidate the force and purity of acts of refusal as well as the manipulative maneuvers of power, not in a Manichean perspective, but as a means of developing, through our own strategy, this combat in which everywhere, at every moment, the adversaries are seeking to come to grips with one another but only clashing accidentally, lost in irremediable darkness and uncertainty.</br></br>
                        29</br>
                        Everyday life has always been drained to the advantage of apparent life, but appearance, in its mythical cohesion, was powerful enough to repress any mention of everyday life. The poverty and emptiness of the spectacle, revealed by all the varieties of capitalism and all the varieties of bourgeoisie, has revealed both the existence of everyday life (a shelter life, but a shelter for what and from what?) and the poverty of everyday life. As reification and bureaucratization grow stronger, the debility of the spectacle and of everyday life is the only thing that remains clear. The conflict between the human and the inhuman has been transferred to the plane of appearances. As soon as Marxism became an ideology, Marx’s struggle against ideology in the name of the richness of life was transformed into an ideological anti-ideology, an antispectacle spectacle. (Just as in avant-garde culture the antispectacular spectacle is restricted to actors alone, antiartistic art being created and understood only by artists, so the relationship between this ideological anti-ideology and the function of the professional revolutionary in Leninism should be examined.) Manicheanism has thus found itself momentarily revived. Why did St. Augustine attack the Manicheans so relentlessly? It was because he recognized the danger of a myth offering only one solution, the victory of good over evil; he saw that the impossibility of such a solution threatened to provoke the collapse of all mythical structures and bring into the open the contradiction between mythical and authentic life. Christianity offered a third way, the way of sacred confusion. What Christianity accomplished through the force of myth is accomplished today through the force of things. There can no longer be any antagonism between Soviet workers and capitalist workers or between the bomb of the Stalinist bureaucrats and the bomb of the non-Stalinist bureaucrats; there is no longer anything but unity in the chaos of reified beings.</br></br>
                        Who is responsible? Who should be shot? We are dominated by a system, by an abstract form. Degrees of humanity and inhumanity are measured by purely quantitative variations of passivity. The quality is the same everywhere: we are all proletarianized or well on the way to becoming so. What are the traditional “revolutionaries” doing? They are struggling to eliminate certain distinctions, making sure that no proletarians are any more proletarian than all the others. But what party is calling for the end of the proletariat?</br></br>
                        The perspective of survival has become intolerable. What is weighing us down is the weight of things in a vacuum. That’s what reification is: everyone and everything falling at an equal speed, everyone and everything stigmatized with an equal value. The reign of equal values has realized the Christian project, but it has realized it outside Christianity (as Pascal surmised) and more importantly, it has realized it over God’s dead body, contrary to Pascal’s expectations.</br></br>
                        The spectacle and everyday life coexist in the reign of equal values. People and things are interchangeable. The world of reification is a world without a center, like the new prefabricated cities that are its decor. The present fades away before the promise of an eternal future that is nothing but a mechanical extension of the past. Time itself is deprived of a center. In this concentration-camp world, victims and torturers wear the same mask and only the torture is real. No new ideology can soothe the pain, neither the ideology of the totality (Logos) nor that of nihilism — which will be the two crutches of the cybernetic society. The tortures condemn all hierarchical power, however organized or dissimulated it may be. The antagonism the SI is going to revive is the oldest of all, it is radical antagonism and that is why it is taking up again and assimilating all that has been left by the insurrectionary movements and great individuals in the course of history.</br></br>
                        30</br>
                        So many other banalities could be examined and reversed. The best things never come to an end. Before rereading this text (which even the most mediocre intelligence will be able to understand by the third attempt) the reader would be well advised to pay particular attention to the following points — points as fragmentary as the preceding ones, but which must be discussed in detail and implemented. They concern a central question: the SI and revolutionary power.</br></br>
                        Being aware of the crises of both mass parties and “elites,” the SI must embody the supersession of both the Bolshevik Central Committee (supersession of the mass party) and of the Nietzschean project (supersession of the intelligentsia).</br></br>
                        (a) Every time a power has presented itself as directing a revolutionary upsurge, it has automatically undermined the power of the revolution. The Bolshevik Central Committee defined itself simultaneously as concentration and as representation. Concentration of a power antagonistic to bourgeois power and representation of the will of the masses. This duality led it rapidly to become no more than an empty power, a power of empty representation, and consequently to merge into a common form (bureaucracy) with a bourgeois power that was being pressured (by the Bolshevik threat) into following a similar evolution. The conditions for a concentrated power and mass representation exist potentially in the SI when it notes that it possesses the qualitative and that its ideas are in everyone’s mind. Nevertheless we refuse both concentrated power and the right of representation, conscious that we are now taking the only public attitude (for we cannot avoid being known to some extent in a spectacular manner) enabling those who find that they share our theoretical and practical positions to accede to revolutionary power: power without mediation, power entailing the direct action of everyone. Our guiding image could be the Durruti Column, moving from town to village, liquidating the bourgeois elements and leaving the workers to see to their own self-organization.</br></br>
                        (b) The intelligentsia is power’s hall of mirrors. Opposing power, it never offers anything but passive cathartic identification to those whose every gesture gropingly expresses real opposition. The radicalism — not of theory, obviously, but of gesture — that could be glimpsed in the “Declaration of the 121,” however, suggests some different possibilities. We are capable of precipitating this crisis, but we can do so only by entering the intelligentsia as a power against the intelligentsia. This phase — which must precede and be contained within the phase described in paragraph (a) — will put us in the perspective of the Nietzschean project. We will form a small, almost alchemical, experimental group within which the realization of the total man can be started. Nietzsche could conceive of such an undertaking only within the framework of the hierarchical principle. It is, in fact, within such a framework that we find ourselves. It is therefore of the utmost importance that we present ourselves without the slightest ambiguity (at the group level, the purification of the nucleus and the elimination of residues now seems to be completed). We accept the hierarchical framework in which we are placed only while impatiently working to abolish our domination over those whom we cannot avoid dominating on the basis of our criteria for mutual recognition.</br></br>
                        (c) Tactically our communication should be a diffusion emanating from a more or less hidden center. We will establish nonmaterialized networks (direct relationships, episodic ones, contacts without ties, development of embryonic relations based on affinity and understanding, in the manner of red agitators before the arrival of revolutionary armies). We will claim radical gestures (actions, writings, political attitudes, works) as our own by analyzing them, and we will consider that our own acts and analyses are supported by the majority of people.
                        Just as God constituted the reference point of past unitary society, we are preparing to create the central reference point for a new unitary society now possible. But this point cannot be fixed. As opposed to the ever-renewed confusion that cybernetic power draws from the inhuman past, it stands for the game that everyone will play, “the moving order of the future.”</br></br>
                        </br></br>
                        </P>
                        </div>
                    </div>
                    <a href="" id='backW'>
                         <img src='img/back.png'>
                    </a>
                    <div id="banal">BASIC BANALITIES (RAOUL VANEIGEM, 1963)</div>
                    <div id="underl"></div>
                </div>`;
    });
    $("#items").hide();
    $("#nav").hide();
    $("#backg").hide();
    // let ht = $("p").height() * 1.1;
    // $("#backgW").css("height", ht + "px");
    $("body").css({
      height: "auto",
      overflowY: "scroll",
    });
    $("body,html").animate({ scrollTop: 0 }, 1);
    if ($("#idd a").css("visibility") === "visible") {
      $("#backW").on("click", function () {});
    } else {
      $("#backW").on("click", function (e) {
        e.preventDefault();
        $("#backgW").remove();
        $("#nav").show();
        $("#backg").show();
        $("body").css("overflowY", "scroll");
        $("body,html").animate({ scrollTop: 0 }, 1);
        // $("body,html").animate({ scrollLeft: 0 }, 1);
      });
    }

    function turnpage() {
      let page = $("#banas").find("div").length;
      let i = 0;
      $("#right1").click(function (e) {
        e.preventDefault();
        let curtp = $(this).siblings("div").find("div")[i];
        if (i < page - 1) {
          $("#left1").fadeIn();
          $("#right1").fadeIn();
          $(curtp).css("display", "none");
          i++;
        } else {
          $("#right1").fadeOut();
          curtp = $(this).siblings("div").find("div")[i];
          $(curtp).css("display", "block");
        }
      });

      $("#left1").click(function (e) {
        e.preventDefault();
        let curtp = $(this).siblings("div").find("div")[i - 1];
        if (i > 0) {
          $("#right1").fadeIn();
          $("#left1").fadeIn();
          $(curtp).css("display", "block");
          i = i - 1;
        } else {
          $("#left1").fadeOut();
        }
      });
    }
  });

  // #nques
  $("#nques").on("click", function () {
    $("body,html").animate({ scrollTop: 0 }, 1);
    $("#wrapper").after(function () {
      return `<div id='backgW'>
                    <div id='question'>
                      <div id='quetext'>
                        <p>
                            1</br>
                            What does the word “situationist” mean?</br>
                            It denotes an activity aimed at creating situations, as opposed to passively recognizing them in academic or other separate terms. At all levels of social practice or individual history. We replace existential passivity with the construction of moments of life, and doubt with playful affirmation. Up till now philosophers and artists have only  interpreted situations; the point now is to transform them. Since human beings are molded by the situations they go through, it is essential to create human situations. Since individuals are defined by their situation, they need the power to create situations worthy of their desires. This is the perspective in which poetry (communication fulfilled in concrete situations), the appropriation of nature, and complete social liberation must all merge and be realized. Our era is going to replace the fixed frontier of the extreme situations that phenomenology has limited itself to describing with the practical creation of situations; it is going to continually shift this frontier with the development of our realization. We want a phenomeno-praxis. We have no doubt that this will be the first banality of the movement toward the liberation that is now possible. What situations are to be transformed? At different levels it could be the whole planet, or an era (a civilization in Burckhardt’s sense, for example), or a moment of individual life. On with the show! It is only in this way that the values of past culture and the hopes of realizing reason in history can find their true fulfillment. Everything else is in decay. The term situationist in the SI’s sense is the total opposite of the current usage in Portugal, where “situationists” means supporters of the existing situation (i.e. supporters of Salazar’s dictatorship).</br></br>
                            2</br>
                            Is the SI a political movement?</br>
                            The words “political movement” today connote the specialized activity of group and party bosses who derive the oppressive force of their future power from the organized passivity of their militants. The SI wants nothing to do with any form of hierarchical power whatsoever. The SI is neither a political movement nor a sociology of political mystification. The SI aims to represent the highest degree of international revolutionary consciousness. This is why it strives to illuminate and coordinate the gestures of refusal and the signs of creativity that are defining the new contours of the proletariat, the irreducible desire for freedom. Centered on the spontaneity of the masses, such activity is undeniably “political” in the sense that those rebellious masses are themselves political. Whenever new radical currents appear — as recently in Japan (the extremist wing of the Zengakuren), in the Congo, and in the Spanish underground — the SI gives them critical support and thereby aids them practically. But in contrast to all the “transitional programs” of specialized politics, the SI insists on a permanent revolution of everyday life.</br></br>
                            3</br>
                            Is the SI an artistic movement?</br>
                            A large part of the situationist critique of consumer society consists in showing to what extent contemporary artists, by abandoning the richness of supersession implicitly present (though not fully realized) in the 1910-1925 period, have condemned themselves to doing art as one does business. Since that time artistic movements have only been imaginary repercussions from an explosion that never took place, an explosion that threatened and still threatens the structures of this society. The SI’s awareness of this abandonment and of its contradictory implications (emptiness and a desire to return to the initial violence) makes the SI the only movement able, by incorporating the survival of art into the art of life, to speak to the project of the authentic artist. We are artists only insofar as we are no longer artists: we come to fulfill art.</br></br>
                            4</br>
                            Is the SI an expression of nihilism?</br>
                            The SI refuses the role that would be readily granted it in the spectacle of decomposition. The supersession of nihilism is reached by way of the decomposition of the spectacle; which is precisely what the SI is working on. Whatever is elaborated and constructed outside such a perspective will collapse of its own dead weight without needing any help from the SI. But it is also true that everywhere in consumer society wastelands of spontaneous collapse are offering a terrain of experimentation for new values that the SI cannot do without. We can build only on the ruins of the spectacle. Moreover, the fully justified anticipation of a total destruction precludes any construction that is not carried out in the perspective of the totality.</br></br>
                            5</br>
                            Are the situationist positions utopian?</br>
                            Reality is superseding utopia. There is no longer any point in projecting imaginary bridges between the wealth of present technological potentials and the poverty of their use by the rulers of every variety. We want to put the material equipment at the service of everyone’s creativity, as the masses themselves always strive to do in revolutionary situations. It’s simply a matter of coordination or tactics. Everything we deal with is realizable, either immediately or in the short term, once our methods of research and activity begin to be put in practice.</br></br>
                            6</br>
                            Do you consider it necessary to call yourselves “situationists”?</br>
                            In the existing order, where things take the place of people, any label is compromising. The one we have chosen, however, embodies its own critique, in that it is automatically opposed to any “situationism,” the label that others would like to saddle us with. Moreover, it will disappear when all of us have become fully situationist and are no longer proletarians struggling for the end of the proletariat. For the moment, however ridiculous a label may be, ours has the merit of drawing a sharp line between the previous incoherence and a new level of rigor. Such incisiveness is just what has been most lacking in the thought of the last few decades.</br></br>
                            7</br>
                            What is original about the situationists, considered as a distinct group?</br>
                            It seems to us that three notable points justify the importance that we attribute to ourselves as an organized group of theorists and experimenters. First, we are developing for the first time, from a revolutionary perspective, a new, coherent critique of this society as it is developing now. This critique is deeply anchored in the culture and art of our time, which can in fact be truly grasped only by means of such a critique (this work is obviously a long way from completion). Second, we make a practice of breaking completely and definitively with all those who oblige us to do so, and with anyone else who remains in solidarity with them. Such polarization is vital in a time when the diverse forms of resignation are so subtly intertwined and interdependent. Third, we are initiating a new style of relation with our “partisans”: we absolutely refuse disciples. We are interested only in participation at the highest level, and in setting autonomous people loose in the world.</br></br>
                            8</br>
                            Why don’t people talk about the SI?</br>
                            The SI is talked about often enough among the specialized owners of decomposing modern thought; but they write about it very little. In the broadest sense this is because we refuse the term “situationism,” which would be the only pigeonhole enabling us to be introduced into the reigning spectacle, incorporated in the form of a doctrine petrified against us, in the form of an ideology in Marx’s sense. It is natural that the spectacle we reject rejects us in turn. Situationists are more readily discussed as individuals in an effort to separate them from the collective contestation, although this collective contestation is in fact the only thing that makes them “interesting” individuals. Situationists are talked about the moment they cease to be situationists (as with the rival varieties of “Nashism” in several countries, whose only common claim to fame is that they lyingly pretend to have some sort of relationship with the SI). The spectacle’s watchdogs appropriate fragments of situationist theory without acknowledgment in order to turn it against us. It is quite natural that they get ideas from us in their struggle for the survival of the spectacle. But they have to conceal their source, not merely to protect their reputation for originality from charges of plagiarism, but because this source implies the broader, coherent context of these “ideas.” Moreover, many hesitant intellectuals do not dare to speak openly of the SI because to speak of it entails taking a minimum position — saying what one rejects of it and what one accepts of it. Many of them believe, quite mistakenly, that to feign ignorance of it in the meantime will suffice to clear them of responsibility later.</br></br>
                            9</br>
                            What support do you give to the revolutionary movement?</br>
                            Unfortunately there isn’t one. The society certainly contains contradictions and is undergoing changes; this is what, in continually new ways, is making revolutionary activity possible and necessary. But such activity no longer exists — or does not yet exist — in the form of an organized movement. It is therefore not a matter of “supporting” such a movement, but of creating it: of inseparably defining it and experimenting with it. Admitting that there is no revolutionary movement is the first precondition for developing such a movement. Anything else is a ridiculous patching up of the past.</br></br>
                            10</br>
                            Are you Marxists?</br>
                            Just as much as Marx was when he said, “I am not a Marxist.”</br></br>
                            11</br>
                            Is there a relation between your theories and your actual way of life?</br>
                            Our theories are nothing other than the theory of our real life and of the possibilities experienced or perceived in it. As fragmented as the available terrains of activity may be for the moment, we make the most of them. We treat enemies as enemies, a first step we recommend to everyone as an accelerated apprenticeship in learning how to think. It also goes without saying that we unconditionally support all forms of liberated behavior, everything that the bourgeois and bureaucratic scum call debauchery. It is obviously out of the question that we should pave the way for the revolution of everyday life with asceticism.</br></br>
                            12</br>
                            Are the situationists in the vanguard of leisure society?</br>
                            Leisure society is an appearance that veils a particular type of production/consumption of social space-time. If the time of productive work in the strict sense is reduced, the reserve army of industrial life works in consumption. Everyone is successively worker and raw material in the industry of vacations, of leisure, of spectacles. Present work is the alpha and omega of present life. The organization of consumption plus the organization of leisure must exactly counterbalance the organization of work. “Free time” is a most ironic quantity in the context of the flow of a prefabricated time. Alienated work can only produce alienated leisure, for the idle (increasingly, in fact, merely semi-idle) elite as well as for the masses who are obtaining access to brief periods of leisure. No lead shielding can insulate either a fragment of time or the entire time of a fragment of society from the radiation of alienated labor, because that labor shapes the totality of products and of social life in its own image.</br></br>
                            13</br>
                            Who finances you?</br>
                            We have never been able to be financed except, in a very precarious manner, by working in the present cultural economy. This employment is subject to the following contradiction: we have such creative abilities that we can be virtually assured of “success” in any field; yet we have such a rigorous insistence on independence and complete consistency between our project and each of our present creations (see our definition of antisituationist artistic production) that we are almost totally unacceptable to the dominant cultural organization, even in the most secondary activities. The state of our resources follows from these conditions. In this connection, see what we wrote in issue #8 of this journal (p. 26) about “the capital that is never lacking for Nashist enterprises” and, in contrast, our conditions (on the last page of this issue).</br></br>
                            14</br>
                            How many of you are there?</br>
                            A few more than the original guerrilla nucleus in the Sierra Madre, but with fewer weapons. A few less than the delegates in London in 1864 who founded the International Working Men’s Association, but with a more coherent program. As unyielding as the Greeks at Thermopylae (“Passerby, go tell them at Lakedaimon...”), but with a brighter future.</br></br>
                            15</br>
                            What value can you attribute to a questionnaire? To this one?</br>
                            Questionnaires are an obvious form of the pseudodialogue that is becoming obsessively used in all the psychotechniques of integration into the spectacle so as to elicit people’s gleeful acceptance of passivity under the crude guise of “participation” and pseudoactivity. Taking such an incoherent, reified form of questioning as a point of departure, however, enables us to express precise positions. These positions are not really “answers,” because they don’t stick to the questions; they reply by posing new questions that supersede the old ones. Thus, real dialogue could begin after these responses. In the present questionnaire all the questions are false; our responses, however, are true.
                            </br></br>
                            </p>
                        </div>
                    </div>
                    <a href="" id='backW'>
                         <img src='img/back.png'>
                    </a>
                    <div id="que">QUESTIONNAIRE (1964)</div>
                    <div id="qunderl"></div>
                </div>`;
    });
    $("#items").hide();
    $("#nav").hide();
    $("#backg").hide();
    // let ht = $("p").height() * 1.1825;
    // $("#backgW").css("height", ht + "px");
    $("body").css({
      height: "auto",
      overflowY: "scroll",
    });
    if ($("#idd a").css("visibility") === "visible") {
      $("#backW").on("click", function () {});
    } else {
      $("#backW").on("click", function (e) {
        e.preventDefault();
        $("#backgW").remove();
        $("#nav").show();
        $("#backg").show();
        $("body").css("overflowY", "scroll");
        $("body,html").animate({ scrollTop: 0 }, 1);
        $("body,html").animate({ scrollLeft: 0 }, 1);
      });
    }
  });

  // #nword
  $("#nword").on("click", function () {
    $("body,html").animate({ scrollTop: 0 }, 1);
    $("#wrapper").after(function () {
      return `<div id='backgW'>
                    <div id='capti'>
                      <div id='catext'>
                        <p>
                        Popular assumptions, due to what they conceal, work for the dominant organization of life. One such assumption is the notion that language is not dialectical, thereby implying that all use of dialectics should be rejected. But in fact nothing is more clearly subject to dialectics than language, since it is a living reality. Thus, every critique of the old world has been made in the language of that world, yet directed against it and therefore automatically in a different language. Every revolutionary theory has had to invent its own terms, to destroy the dominant sense of other terms and establish new meanings in the “world of meanings” corresponding to the new embryonic reality needing to be liberated from the dominant trash heap. The same reasons that prevent our adversaries (the masters of the Dictionary) from definitively fixing language enable us to assert alternative positions that negate existing meanings. But we already know that these same reasons also prevent us from proclaiming any definitive certitudes. A definition is always open, never definitive. Ours have a historical value, they are applicable during a specific period, linked to a specific historical practice.</br></br>
                        It is impossible to get rid of a world without getting rid of the language that conceals and protects it, without laying bare its true nature. As the “social truth” of power is permanent falsification, language is its permanent guarantee and the Dictionary its universal reference. Every revolutionary praxis has felt the need for a new semantic field and for expressing a new truth; from the Encyclopédistes to the Polish intellectuals’ critique of Stalinist “wooden language” in 1956, this demand has continually been asserted. Because language is the house of power, the refuge of its police violence. Any dialogue with power is violence, whether passively suffered or actively provoked. When power wants to avoid resorting to its material arms, it relies on language to guard the oppressive order. This collaboration is in fact the most natural expression of all power.</br></br>
                        From words to ideas is only a step — a step always taken by power and its theorists. All theories of language, from the simple-minded mysticism of Being to the supreme (oppressive) rationality of the cybernetic machine, belong to the same world: the discourse of power considered as the sole possible frame of reference, as the universal mediation. Just as the Christian God is the necessary mediation between two souls and between the soul and the self, the discourse of power establishes itself at the heart of all communication, becoming the necessary mediation between self and self. This is how it is able to coopt oppositional movements, diverting them onto its own terrain, infiltrating them and controlling them from within. The critique of the dominant language, the détournement of it, is going to become a permanent practice of the new revolutionary theory.</br></br>
                        Since any new interpretation is called a misinterpretation by the authorities, the situationists are going to establish the legitimacy of such misinterpretation and denounce the fraudulence of the interpretations given and authorized by power. Since the dictionary is the guardian of present meaning, we propose to destroy it systematically. The replacement of the dictionary, that master reference of all inherited and domesticated language, will find its adequate expression in the revolutionary infiltration of language, in the détournement extensively used by Marx, systematized by Lautréamont, and now being put within everyone’s reach by the SI.</br></br>
                        Détournement, which Lautréamont called plagiarism, confirms the thesis, long demonstrated by modern art, that word are insubordinate, that it is impossible for power to totally coopt created meanings, to fix an existing meaning once and for all. Which means that it is objectively impossible to create a “Newspeak.” The new revolutionary theory cannot advance without redefining its fundamental concepts. “Ideas improve,” says Lautréamont. “The meaning of words plays a role in that improvement. Plagiarism is necessary. Progress depends on it. It sticks close to an author’s phrase, exploits his expressions, deletes a false idea, replaces it with the right one.” To salvage Marx’s thought it is necessary to continually make it more precise, to correct it and reformulate it in the light of a hundred years of reinforcement of alienation and of the possibilities of negating alienation. Marx needs to be detourned by those who are continuing on this historical path, not moronically quoted by the thousand varieties of coopters. On the other hand, power’s own thought is becoming in our hands a weapon against power. Ever since it came to power, the bourgeoisie has dreamed of a universal language, a language which the cyberneticians of today are trying to implement electronically. Descartes dreamed of a language (a forerunner of Newspeak) in which thought would follow thought with mathematical rigor: the mathesis universalis or perpetuity of bourgeois categories. The Encyclopédistes,(2) dreaming (under feudal power) of “definitions so rigorous that tyranny could not tolerate them,” paved the way for an eternal future power that would be the ultimate goal of history.</br></br>
                        The insubordination of words, during the experimental phase from Rimbaud to the surrealists, has shown that the theoretical critique of the world of power is inseparable from a practice that destroys it. Power’s cooption of all modern art and its transformation of it into oppressive categories of its reigning spectacle is a sad confirmation of this. “Whatever doesn’t kill power is killed by it.” The dadaists were the first to express their distrust in words, a distrust inseparable from the desire to “change life.” Following Sade, they asserted the right to say everything, to liberate words and “replace the Alchemy of the Word with a real chemistry” (Breton). The innocence of words is henceforth consciously refuted and language is revealed as “the worst of conventions,” something that should be destroyed, demystified, liberated. Whenever separate power replaces the autonomous action of the masses, whenever bureaucracy seizes control of all aspects of social life, it attacks language and reduces its poetry to the vulgar prose of its information. Bureaucracy appropriates language for its own use, just as it does everything else, and imposes it on the masses. Language — the material support of its ideology — is then presumed to communicate its messages and reflect its thought. Bureaucracy represses the fact that language is first of all a means of communication between people. Since all communication is channeled through bureaucracies, people no longer even need to talk to each other: their first duty is to play their role as receivers in the network of informationist communication to which the whole society is reduced, receivers of orders they must carry out.</br>
                        Dada’s contemporaries did not fail to stress its will to destroy everything, the danger it represented to the dominant sense. (Gide uneasily referred to it as a “demolition job.”) After Dada it has become impossible to believe that a word is forever bound to an idea. Dada realized all the possibilities of language and forever closed the door on art as a specialty; it posed once and for all the problem of the realization of art. Surrealism was of value only insofar as it continued and extended this project; in its literary productions it was reactionary. The realization of art — poetry in the situationist sense — means that one cannot realize oneself in a “work,” but rather realizes oneself, period. Sade’s inauguration of “saying everything” already implied the abolition of literature as a separate domain (where only what is literary may be said). But this abolition, consciously asserted by the dadaists after Rimbaud and Lautréamont, was not a supersession. There is no supersession without realization, one cannot supersede art without realizing it. In fact, there has not even been any actual abolition, since even after Joyce, Duchamp and Dada a new spectacular literature continues to thrive. This is because there can be no “saying everything” without the freedom to do everything. Dada had a chance for realization with the Spartakists, with the revolutionary practice of the German proletariat. The latter’s failure made the failure of Dada inevitable. With its cooption (including that of virtually all its original protagonists) into subsequent artistic movements, Dada has become the literary expression of the nothingness of poetic activity, the art of expressing the nothingness of everyday freedom. The ultimate expression of this art of “saying everything” deprived of any doing is the blank page.
                        Modern poetry (experimental, permutational, spatialist, surrealist or neodadaist) is the antithesis of poetry, it is the artistic project coopted by power. It abolishes poetry without realizing it, living off its own continual self-destruction. “What’s the point of saving language,” Max Bense asks resignedly, “when there is no longer anything to say?” Confession of a specialist! Muteness or mindless chatter are the sole alternatives of the specialists of permutation. Modern thought and art, guaranteeing power and guaranteed by it, move in the realm of what Hegel called “the language of flattery.” Both contribute to the eulogy of power and its products, perfecting reification while banalizing it. Asserting that “reality consists of language” or that “language can only be considered in and for itself,” the specialists of language arrive at the concepts of “language-object” and “word-thing” and revel in the panegyrics of their own reification. The thing becomes the dominant model and once again the commodity finds its realization and its poets. The theory of the state, of the economy, of law, of philosophy, of art — everything now has this apologetic character.</br></br>
                        This language’s mode of existence is bureaucracy, its becoming is bureaucratization. The Bolshevik order born out of the failure of the soviet revolution imposed a whole series of more or less magical and impersonal expressions in the image of the bureaucracy in power. “Politburo,” “Comintern,” “Cavarmy,” “Agitprop” — mysterious names of specialized agencies that really are mysterious, operating in the nebulous sphere of the state (or of the Party leadership) without any relation to the masses except insofar as they reinforce their subjection. Language colonized by bureaucracy is reduced to a series of blunt, inflexible formulas in which the same nouns are always accompanied by the same adjectives and participles. The noun governs; each time it appears the other words automatically fall in around it in the correct order. This “regimentation” of words reflects a more profound militarization of the whole society, its division into two basic categories: the caste of rulers and the great mass of people who carry out their orders. But the same words are also called on to play other roles, invested with the magic power to reinforce the oppressive reality, to cloak it and present it as the only possible truth. Thus there are no more “Trotskyists” but only “Hitlero-Trotskyists”; one never hears of Marxism but only of “Marxism-Leninism,” and the opposition is automatically “reactionary” in the “Soviet regime.” The rigidity with which these ritualistic formulas are sanctified is aimed at preserving the purity of this “substance” in the face of obviously contradictory facts. In this way the language of the masters is everything, reality nothing, or at most the shell of this language. People are required in their acts, their thoughts and their feelings to behave as if the state was that reason, justice and freedom proclaimed by the ideology. The ritual (and the police) are there to ensure conformity to this behavior (see Marcuse’s Soviet Marxism).</br></br>
                        The decline of radical thought considerably increases the power of words, the words of power. “Power creates nothing; it coopts” (Internationale Situationniste #8). Words forged by revolutionary criticism are like partisans’ weapons: abandoned on the battlefield, they fall into the hands of the counterrevolution. And like prisoners of war, they are subjected to forced labor. Our most direct enemies are the proponents and established functionaries of false critique. The divorce between theory and practice provides the central basis for cooption, for the petrification of revolutionary theory into ideology, which transforms real practical demands (for whose realization the premonitory signs are already appearing in the present society) into systems of ideas, into demands of reason. The ideologues of every variety, the watchdogs of the reigning spectacle, carry out this task, emptying the content from most corrosive concepts and putting them back into circulation in the service of maintaining alienation: dadaism in reverse. They become advertising slogans (see the recent Club Med prospectus). Concepts of radical critique suffer the same fate as the proletariat: they are deprived of their history, cut off from their roots. They become grist for power’s thinking machines.</br></br>
                        Our project of liberating words is historically comparable to the Encyclopédiste enterprise. The Enlightenment’s language of “tearing apart” (to continue the Hegelian image) lacked the conscious historical dimension; it was a real critique of the decrepit feudal world, but it had no idea of what would emerge from it (none of the Encyclopédistes were republicans). It was, rather, an expression of the bourgeois thinkers’ own internal tearing apart. Our language aims first of all at a practice that tears the world apart, beginning with tearing apart the veils that cloak it. Whereas the Encyclopédistes sought a quantitative enumeration, the enthusiastic description of a world of objects in which the bourgeoisie and the commodity were already victorious, our dictionary will express the qualitative, the possible but still absent victory, the repressed of modern history (the proletariat) and the return of the repressed. We propose the real liberation of language because we propose to put it into a practice free of all constraints. We reject any authority, linguistic or otherwise: only real life allows a meaning and only praxis verifies it. Debates over the reality or unreality of the meaning of a word, isolated from practice, are purely academic. We place our dictionary in that libertarian region which is still beyond the reach of power, but which is its only possible global successor.</br></br>
                        Language remains the necessary mediation for comprehending the world of alienation (Hegel would say: the necessary alienation), the instrument of the radical theory that will eventually seize the masses because it is theirs. Only then will it find its own truth. It is thus essential that we forge our own language, the language of real life, against the ideological language of power, the terrain of justification of all the categories of the old world. From now on we must prevent the falsification or cooption of our theories. We use specific concepts already used by the specialists, but we give them a new content, turning them against the specialists that they support and against future salaried thinkers who might be tempted to besmear situationist theory with their own shit (as Claudel did with Rimbaud and Klossowski with Sade). Future revolutions must invent their own language. Concepts of radical critique will be reexamined one by one in order to rediscover their truth. The word alienation, for example, one of the key concepts for the comprehension of modern society, must be disinfected after having passed through the mouths of people like Axelos [editor of Arguments]. All words have the same relation with power as does the proletariat: they are both its present servants and the instruments and agents of future liberation from it. Poor Revel! There are no forbidden words; in language, as it will be in every other domain, everything is permitted. To deny ourselves the use of a word is to deny ourselves a weapon used by our adversaries.</br></br>
                        Our dictionary will be a sort of code book enabling one to decipher the news and rend the ideological veils that cover reality. We will give possible translations that will enable people to grasp the different aspects of the society of the spectacle, and show how the slightest signs and indications contribute to maintaining it. In a sense it will be a bilingual dictionary, since each word has an “ideological” meaning for power and a real meaning that we think corresponds to real life in the present historical phase. Thus we will be able at each step to determine the various positions of words in the social war. If the problem of ideology is how to descend from the heaven of ideas to the real world, our dictionary will be a contribution to the elaboration of the new revolutionary theory where the problem is how to effect the transition from language to life. The real appropriation of the words that work cannot be realized outside the appropriation of work itself. The inauguration of free creative activity will at the same time be the inauguration of true communication, freed at last. The transparency of human relations will replace the poverty of words under the old regime of opacity. Words will not cease to work until people do.
                        </br></br>
                        </p>
                      </div>
                    </div>
                    
                    <a href="" id='backW'>
                         <img src='img/back.png'>
                    </a>
                    <div id="cap">CAPTIVE WORDS (MUSTAPHA KHAYATI, 1966)</div>
                    <div id="cunderl"></div>
              </div>`;
    });
    $("#items").hide();
    $("#nav").hide();
    $("#backg").hide();
    // let ht = $("p").height() * 1.1875;
    // $("#backgW").css("height", ht + "px");
    $("body").css({
      height: "auto",
      overflowY: "scroll",
    });
    if ($("#idd a").css("visibility") === "visible") {
      $("#backW").on("click", function () {});
    } else {
      $("#backW").on("click", function (e) {
        $("body").css("overflowY", "scroll");
        e.preventDefault();
        $("#backgW").remove();
        $("#nav").show();
        $("#backg").show();
        $("body,html").animate({ scrollTop: 0 }, 1);
        $("body,html").animate({ scrollLeft: 0 }, 1);
      });
    }
  });

  // #index
  $("#idd a").on("click", function () {
    $("#items").remove();
    $("body").css("height", "auto");
    $("#nav").css("height", "100vh");
    $(this).css("visibility", "hidden");
    $("#sit a").css("visibility", "visible");
    $("#wrapper").after(function () {
      return `<div id='backg'>
                      <div class="grid">
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/SI1/1.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/SI2/1‘.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/SI3/1‘.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/SI4/1‘.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/SI5/1‘.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/SI6/1‘.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/SI7/1‘.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/SI8/1‘.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/SI9/1‘.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/SI10/1‘.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/SI11/1‘.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/SI12/1‘.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/ST1/1.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/ST2/1.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/ST3/1.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/ST4/1.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/ST5/1.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/ST6/1.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/cinema.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/theNakedCity.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/mise.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/pcd/1.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/allw/1.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/fin/1.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/sp/1.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/com/1.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/allwork.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/rsg6/1.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/student.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/stud/1.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/nouveau.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/nerve.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/guide.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/memo/1.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/porstu/1.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/sujet.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/sansc/1.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/trait.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/rappor.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/lib.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/rapporto/1.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/dec/1.jpg'>
                          </a>
                          </div>
                          <div class="grid-item">
                          <a herf="" class='imga'>
                          <img class='indimg' src='img/nich/1.jpg'>
                          </a>
                          </div>
                      </div>
                   </div>`;
    });
    // let ht = $("#backg").height();
    // console.log(ht);
    // setTimeout(function () {
    //   $("body").css({
    //     height: ht,
    //   });
    //   100;
    // });

    var angder = $("#index #nderive a").rotationInfo();
    $("#index #nderive a").animateRotate(angder.deg);
    $("#index #nderive a").animate(
      {
        left: "1.5vw",
        top: "25vh",
      },
      400
    );
    var angdeto = $("#index #ndeto a").rotationInfo();
    $("#index #ndeto a").animateRotate(angdeto.deg);
    $("#index #ndeto a").animate(
      {
        left: "1.5vw",
        top: "30vh",
      },
      400
    );
    var angurba = $("#index #nurban a").rotationInfo();
    $("#index #nurban a").animateRotate(angurba.deg);
    $("#index #nurban a").animate(
      {
        left: "1.5vw",
        top: "35vh",
      },
      400
    );
    var angbana = $("#index #nbana a").rotationInfo();
    $("#index #nbana a").animateRotate(angbana.deg);
    $("#index #nbana a").animate(
      {
        left: "1.5vw",
        top: "20vh",
      },
      400
    );
    var angques = $("#index #nques a").rotationInfo();
    $("#index #nques a").animateRotate(angques.deg);
    $("#index #nques a").animate(
      {
        left: "1.5vw",
        top: "15vh",
      },
      400
    );
    var angwor = $("#index #nword a").rotationInfo();
    $("#index #nword a").animateRotate(angwor.deg);
    $("#index #nword a").animate(
      {
        left: "1.5vw",
        top: "10vh",
      },
      400
    );

    var t_img;
    var isLoad = true;
    isImgLoad(function () {
      $(".grid")
        .masonry({
          itemSelector: ".grid-item",
          columnWidth: 30.15,
        })
        .fadeIn("slow");
    });
    function isImgLoad(callback) {
      $(".indimg").each(function () {
        if (this.height === 0) {
          isLoad = false;
          return false;
        }
      });
      if (isLoad) {
        clearTimeout(t_img);
        callback();
      } else {
        isLoad = true;
        t_img = setTimeout(function () {
          isImgLoad(callback);
        }, 10);
      }
    }
    $(".indimg").click(function () {
      $("body,html").animate({ scrollTop: 0 }, 1);
      $("body,html").animate({ scrollLeft: 0 }, 1);
      $("body").css("overflow", "hidden");
      $("#backg").css("height", "100%");
      $("#backg").css("overflow", "hidden");

      var txt = "";
      var src = $(this).attr("src");
      var pos = src.lastIndexOf(".");
      var filename = src.substr(4, pos - 4);
      var filepath = src.substr(0, pos - 1);

      if (filepath == "img/memo/") {
        txt = "Mémoires: Structures Portantes d'Asger Jorn, 1958";
      } else if (filepath == "img/SI1/") {
        txt = "Internationale Situationniste #1, 1958";
      } else if (filepath == "img/SI2/1") {
        txt = "Internationale Situationniste #2, 1958";
      } else if (filepath == "img/SI3/1") {
        txt = "Internationale Situationniste #3, 1959";
      } else if (filepath == "img/SI4/1") {
        txt = "Internationale Situationniste #4, 1960";
      } else if (filepath == "img/SI5/1") {
        txt = "Internationale Situationniste #5, 1960";
      } else if (filepath == "img/SI6/1") {
        txt = "Internationale Situationniste #6, 1961";
      } else if (filepath == "img/SI7/1") {
        txt = "Internationale Situationniste #7, 1962";
      } else if (filepath == "img/SI8/1") {
        txt = "Internationale Situationniste #8, 1963";
      } else if (filepath == "img/SI9/1") {
        txt = "Internationale Situationniste #9, 1964";
      } else if (filepath == "img/SI10/1") {
        txt = "Internationale Situationniste #10, 1966";
      } else if (filepath == "img/SI11/1") {
        txt = "Internationale Situationniste #11, 1967";
      } else if (filepath == "img/SI12/1") {
        txt = "Internationale Situationniste #12, 1969";
      } else if (filepath == "img/sp/") {
        txt = "Society of the Spectacle (English), 1970";
      } else if (filepath == "img/allw/") {
        txt = "Address to All Workers, 1968";
      } else if (filepath == "img/com/") {
        txt = "Sur la Commune, 1962";
      } else if (filepath == "img/com/") {
        txt = "Adresse à Tous les Travailleurs, 1968";
      } else if (filepath == "img/dec/") {
        txt = "Déclaration, 1962";
      } else if (filepath == "img/fin/") {
        txt = "Fin de Copenhague, 1957";
      } else if (filepath == "img/nich/") {
        txt = "Nicht Hinauslehnen, 1962";
      } else if (filepath == "img/pcd/") {
        txt = "Postcards and Letters, 1962-1965";
      } else if (filepath == "img/porstu/") {
        txt = "Of Student Poverty, 1967";
      } else if (filepath == "img/rapporto/") {
        txt = "Secondo Rapporto (Italian), 1977";
      } else if (filepath == "img/rsg6/") {
        txt = "Destruktion af RSG-6, 1963";
      } else if (filepath == "img/sansc/") {
        txt = "La Société Sans Classes a Trouvé ses Artistes, 1958";
      } else if (filepath == "img/ST1/") {
        txt = "The Situationist Times #1 (partial), 1962";
      } else if (filepath == "img/ST2/") {
        txt = "The Situationist Times #2, 1962";
      } else if (filepath == "img/ST3/") {
        txt = "The Situationist Times #3 (cover), 1963";
      } else if (filepath == "img/ST4/") {
        txt = "The Situationist Times #4 (cover), 1963";
      } else if (filepath == "img/ST5/") {
        txt = "The Situationist Times #5 (cover), 1964";
      } else if (filepath == "img/ST6/") {
        txt = "The Situationist Times #6 (cover), 1967";
      } else if (filepath == "img/stud/") {
        txt =
          "Enragés et Situationnistes dans le Mouvement des Occupations, 1968";
      } else if (filename == "allwork") {
        txt = "Adresse a Tous les Travailleurs, 1968";
      } else if (filename == "cinema") {
        txt = "Contre le Cinéma, 1964";
      } else if (filename == "guide") {
        txt = "Guide Psychogeographique de Paris, 1957";
      } else if (filename == "lib") {
        txt = "Difendiamo la Libertà (Italian), 1959";
      } else if (filename == "mise") {
        txt = "De la Misère en Milieu Étudiant (cover), 1967";
      } else if (filename == "nerve") {
        txt = "Nervenruh! Keine Experimente!, 1958";
      } else if (filename == "nouveau") {
        txt = "Nouveau Théâtre d’Opérations dans la Culture, 1958";
      } else if (filename == "rappor") {
        txt = "Rapport (cover), 1957";
      } else if (filename == "student") {
        txt = "Das Elend der Studenten (German), 1968";
      } else if (filename == "sujet") {
        txt = "Le Prolétariat Comme Sujet et Comme Représentation, 1968";
      } else if (filename == "theNakedCity") {
        txt = "The Naked City, 1957";
      } else if (filename == "trait") {
        txt =
          "Traité de Savoir-vivre A l’Usage des Jeunes Générations (cover), 1967";
      }
      $("#backg").after(function () {
        return `<div id='backgI'>
                  <img id='selected' src='${src}'>
                  <a href="" id='backI'>
                     <img src='img/back.png'>
                  </a>
                  <a href="" id='left'>
                     <img src='img/left.png'>
                  </a>
                  <a href="" id='right'>
                     <img src='img/right.png'>
                  </a>
                  <div id='capt'>
                    ${txt}
                  </div>
                </div>`;
      });
      $("#backI").click(function (e) {
        let ht = $(".grid").height();
        e.preventDefault();
        $(this).parent().remove();
        $("body").css("overflow", "scroll");
        $("#backg").css("overflow", "scroll");
        $("#nav").css("overflow", "scroll");
        $("body,html").animate({ scrollTop: 0 }, 1);
        $("body,html").animate({ scrollLeft: 0 }, 1);
      });

      if (filepath == "img/allwor") {
        $("#selected")
          .css("width", "80vw")
          .css("top", "50vh")
          .css("left", "50vw")
          .css("transform", "translate(-50%,-50%)");
      } else {
        $("#selected")
          .css("height", "92vh")
          .css("left", "50vw")
          .css("top", "50vh")
          .css("transform", "translate(-50%,-51%)");
      }

      if (filepath == "img/memo/") {
        let i = 1;
        $("#right").click(function (e) {
          e.preventDefault();
          if (i < 39) {
            $("#left").fadeIn();
            $("#right").fadeIn();
            $(this)
              .siblings("img")
              .attr("src", filepath + (i + 1) + ".jpg");
            i = i + 1;
          } else {
            $("#right").fadeOut();
          }
        });
        $("#left").click(function (e) {
          e.preventDefault();
          if (i > 1) {
            $("#right").fadeIn();
            $("#left").fadeIn();
            $(this)
              .siblings("img")
              .attr("src", filepath + (i - 1) + ".jpg");
            i = i - 1;
          } else {
            $("#left").fadeOut();
          }
        });
      } else if (filepath == "img/SI1/") {
        let i = 1;
        $("#right").click(function (e) {
          e.preventDefault();
          if (i < 19) {
            $("#left").fadeIn();
            $("#right").fadeIn();
            $(this)
              .siblings("img")
              .attr("src", filepath + (i + 1) + ".jpg");
            i = i + 1;
          } else {
            $("#right").fadeOut();
          }
        });
        $("#left").click(function (e) {
          e.preventDefault();
          if (i > 1) {
            $("#right").fadeIn();
            $("#left").fadeIn();
            $(this)
              .siblings("img")
              .attr("src", filepath + (i - 1) + ".jpg");
            i = i - 1;
          } else {
            $("#left").fadeOut();
          }
        });
      } else if (filepath == "img/SI2/1") {
        let i = 1;
        $("#right").click(function (e) {
          e.preventDefault();
          if (i < 21) {
            $("#left").fadeIn();
            $("#right").fadeIn();
            $(this)
              .siblings("img")
              .attr(
                "src",
                filepath.substr(0, filepath.length - 1) + (i + 1) + ".jpg"
              );
            i = i + 1;
          } else {
            $("#right").fadeOut();
          }
        });
        $("#left").click(function (e) {
          e.preventDefault();
          if (i > 1) {
            $("#right").fadeIn();
            $("#left").fadeIn();
            $(this)
              .siblings("img")
              .attr(
                "src",
                filepath.substr(0, filepath.length - 1) + (i - 1) + ".jpg"
              );
            i = i - 1;
          } else {
            $("#left").fadeOut();
          }
        });
      } else if (filepath == "img/SI3/1") {
        let i = 1;
        $("#right").click(function (e) {
          e.preventDefault();
          if (i < 23) {
            $("#left").fadeIn();
            $("#right").fadeIn();
            $(this)
              .siblings("img")
              .attr(
                "src",
                filepath.substr(0, filepath.length - 1) + (i + 1) + ".jpg"
              );
            i = i + 1;
          } else {
            $("#right").fadeOut();
          }
        });
        $("#left").click(function (e) {
          e.preventDefault();
          if (i > 1) {
            $("#right").fadeIn();
            $("#left").fadeIn();
            $(this)
              .siblings("img")
              .attr(
                "src",
                filepath.substr(0, filepath.length - 1) + (i - 1) + ".jpg"
              );
            i = i - 1;
          } else {
            $("#left").fadeOut();
          }
        });
      } else if (filepath == "img/SI4/1") {
        let i = 1;
        $("#right").click(function (e) {
          e.preventDefault();
          if (i < 23) {
            $("#left").fadeIn();
            $("#right").fadeIn();
            $(this)
              .siblings("img")
              .attr(
                "src",
                filepath.substr(0, filepath.length - 1) + (i + 1) + ".jpg"
              );
            i = i + 1;
          } else {
            $("#right").fadeOut();
          }
        });
        $("#left").click(function (e) {
          e.preventDefault();
          if (i > 1) {
            $("#right").fadeIn();
            $("#left").fadeIn();
            $(this)
              .siblings("img")
              .attr(
                "src",
                filepath.substr(0, filepath.length - 1) + (i - 1) + ".jpg"
              );
            i = i - 1;
          } else {
            $("#left").fadeOut();
          }
        });
      } else if (filepath == "img/SI5/1") {
        let i = 1;
        $("#right").click(function (e) {
          e.preventDefault();
          if (i < 29) {
            $("#left").fadeIn();
            $("#right").fadeIn();
            $(this)
              .siblings("img")
              .attr(
                "src",
                filepath.substr(0, filepath.length - 1) + (i + 1) + ".jpg"
              );
            i = i + 1;
          } else {
            $("#right").fadeOut();
          }
        });
        $("#left").click(function (e) {
          e.preventDefault();
          if (i > 1) {
            $("#right").fadeIn();
            $("#left").fadeIn();
            $(this)
              .siblings("img")
              .attr(
                "src",
                filepath.substr(0, filepath.length - 1) + (i - 1) + ".jpg"
              );
            i = i - 1;
          } else {
            $("#left").fadeOut();
          }
        });
      } else if (filepath == "img/SI6/1") {
        let i = 1;
        $("#right").click(function (e) {
          e.preventDefault();
          if (i < 24) {
            $("#left").fadeIn();
            $("#right").fadeIn();
            $(this)
              .siblings("img")
              .attr(
                "src",
                filepath.substr(0, filepath.length - 1) + (i + 1) + ".jpg"
              );
            i = i + 1;
          } else {
            $("#right").fadeOut();
          }
        });
        $("#left").click(function (e) {
          e.preventDefault();
          if (i > 1) {
            $("#right").fadeIn();
            $("#left").fadeIn();
            $(this)
              .siblings("img")
              .attr(
                "src",
                filepath.substr(0, filepath.length - 1) + (i - 1) + ".jpg"
              );
            i = i - 1;
          } else {
            $("#left").fadeOut();
          }
        });
      } else if (filepath == "img/SI7/1") {
        let i = 1;
        $("#right").click(function (e) {
          e.preventDefault();
          if (i < 31) {
            $("#left").fadeIn();
            $("#right").fadeIn();
            $(this)
              .siblings("img")
              .attr(
                "src",
                filepath.substr(0, filepath.length - 1) + (i + 1) + ".jpg"
              );
            i = i + 1;
          } else {
            $("#right").fadeOut();
          }
        });
        $("#left").click(function (e) {
          e.preventDefault();
          if (i > 1) {
            $("#right").fadeIn();
            $("#left").fadeIn();
            $(this)
              .siblings("img")
              .attr(
                "src",
                filepath.substr(0, filepath.length - 1) + (i - 1) + ".jpg"
              );
            i = i - 1;
          } else {
            $("#left").fadeOut();
          }
        });
      } else if (filepath == "img/SI8/1") {
        let i = 1;
        $("#right").click(function (e) {
          e.preventDefault();
          if (i < 37) {
            $("#left").fadeIn();
            $("#right").fadeIn();
            $(this)
              .siblings("img")
              .attr(
                "src",
                filepath.substr(0, filepath.length - 1) + (i + 1) + ".jpg"
              );
            i = i + 1;
          } else {
            $("#right").fadeOut();
          }
        });
        $("#left").click(function (e) {
          e.preventDefault();
          if (i > 1) {
            $("#right").fadeIn();
            $("#left").fadeIn();
            $(this)
              .siblings("img")
              .attr(
                "src",
                filepath.substr(0, filepath.length - 1) + (i - 1) + ".jpg"
              );
            i = i - 1;
          } else {
            $("#left").fadeOut();
          }
        });
      } else if (filepath == "img/SI9/1") {
        let i = 1;
        $("#right").click(function (e) {
          e.preventDefault();
          if (i < 27) {
            $("#left").fadeIn();
            $("#right").fadeIn();
            $(this)
              .siblings("img")
              .attr(
                "src",
                filepath.substr(0, filepath.length - 1) + (i + 1) + ".jpg"
              );
            i = i + 1;
          } else {
            $("#right").fadeOut();
          }
        });
        $("#left").click(function (e) {
          e.preventDefault();
          if (i > 1) {
            $("#right").fadeIn();
            $("#left").fadeIn();
            $(this)
              .siblings("img")
              .attr(
                "src",
                filepath.substr(0, filepath.length - 1) + (i - 1) + ".jpg"
              );
            i = i - 1;
          } else {
            $("#left").fadeOut();
          }
        });
      } else if (filepath == "img/SI10/1") {
        let i = 1;
        $("#right").click(function (e) {
          e.preventDefault();
          if (i < 45) {
            $("#left").fadeIn();
            $("#right").fadeIn();
            $(this)
              .siblings("img")
              .attr(
                "src",
                filepath.substr(0, filepath.length - 1) + (i + 1) + ".jpg"
              );
            i = i + 1;
          } else {
            $("#right").fadeOut();
          }
        });
        $("#left").click(function (e) {
          e.preventDefault();
          if (i > 1) {
            $("#right").fadeIn();
            $("#left").fadeIn();
            $(this)
              .siblings("img")
              .attr(
                "src",
                filepath.substr(0, filepath.length - 1) + (i - 1) + ".jpg"
              );
            i = i - 1;
          } else {
            $("#left").fadeOut();
          }
        });
      } else if (filepath == "img/SI11/1") {
        let i = 1;
        $("#right").click(function (e) {
          e.preventDefault();
          if (i < 39) {
            $("#left").fadeIn();
            $("#right").fadeIn();
            $(this)
              .siblings("img")
              .attr(
                "src",
                filepath.substr(0, filepath.length - 1) + (i + 1) + ".jpg"
              );
            i = i + 1;
          } else {
            $("#right").fadeOut();
          }
        });
        $("#left").click(function (e) {
          e.preventDefault();
          if (i > 1) {
            $("#right").fadeIn();
            $("#left").fadeIn();
            $(this)
              .siblings("img")
              .attr(
                "src",
                filepath.substr(0, filepath.length - 1) + (i - 1) + ".jpg"
              );
            i = i - 1;
          } else {
            $("#left").fadeOut();
          }
        });
      } else if (filepath == "img/SI12/1") {
        let i = 1;
        $("#right").click(function (e) {
          e.preventDefault();
          if (i < 63) {
            $("#left").fadeIn();
            $("#right").fadeIn();
            $(this)
              .siblings("img")
              .attr(
                "src",
                filepath.substr(0, filepath.length - 1) + (i + 1) + ".jpg"
              );
            i = i + 1;
          } else {
            $("#right").fadeOut();
          }
        });
        $("#left").click(function (e) {
          e.preventDefault();
          if (i > 1) {
            $("#right").fadeIn();
            $("#left").fadeIn();
            $(this)
              .siblings("img")
              .attr(
                "src",
                filepath.substr(0, filepath.length - 1) + (i - 1) + ".jpg"
              );
            i = i - 1;
          } else {
            $("#left").fadeOut();
          }
        });
      } else if (filepath == "img/fin/") {
        let i = 1;
        $("#right").click(function (e) {
          e.preventDefault();
          if (i < 21) {
            $("#left").fadeIn();
            $("#right").fadeIn();
            $(this)
              .siblings("img")
              .attr("src", filepath + (i + 1) + ".jpg");
            i = i + 1;
          } else {
            $("#right").fadeOut();
          }
        });
        $("#left").click(function (e) {
          e.preventDefault();
          if (i > 1) {
            $("#right").fadeIn();
            $("#left").fadeIn();
            $(this)
              .siblings("img")
              .attr("src", filepath + (i - 1) + ".jpg");
            i = i - 1;
          } else {
            $("#left").fadeOut();
          }
        });
      } else if (filepath == "img/rsg6/") {
        let i = 1;
        $("#right").click(function (e) {
          e.preventDefault();
          if (i < 32) {
            $("#left").fadeIn();
            $("#right").fadeIn();
            $(this)
              .siblings("img")
              .attr("src", filepath + (i + 1) + ".jpg");
            i = i + 1;
          } else {
            $("#right").fadeOut();
          }
        });
        $("#left").click(function (e) {
          e.preventDefault();
          if (i > 1) {
            $("#right").fadeIn();
            $("#left").fadeIn();
            $(this)
              .siblings("img")
              .attr("src", filepath + (i - 1) + ".jpg");
            i = i - 1;
          } else {
            $("#left").fadeOut();
          }
        });
      } else if (filepath == "img/sp/") {
        let i = 1;
        $("#right").click(function (e) {
          e.preventDefault();
          if (i < 62) {
            $("#left").fadeIn();
            $("#right").fadeIn();
            $(this)
              .siblings("img")
              .attr("src", filepath + (i + 1) + ".jpg");
            i = i + 1;
          } else {
            $("#right").fadeOut();
          }
        });
        $("#left").click(function (e) {
          e.preventDefault();
          if (i > 1) {
            $("#right").fadeIn();
            $("#left").fadeIn();
            $(this)
              .siblings("img")
              .attr("src", filepath + (i - 1) + ".jpg");
            i = i - 1;
          } else {
            $("#left").fadeOut();
          }
        });
      } else if (filepath == "img/allw/") {
        let i = 1;
        $("#right").click(function (e) {
          e.preventDefault();
          if (i < 2) {
            $("#left").fadeIn();
            $("#right").fadeIn();
            $(this)
              .siblings("img")
              .attr("src", filepath + (i + 1) + ".jpg");
            i = i + 1;
          } else {
            $("#right").fadeOut();
          }
        });
        $("#left").click(function (e) {
          e.preventDefault();
          if (i > 1) {
            $("#right").fadeIn();
            $("#left").fadeIn();
            $(this)
              .siblings("img")
              .attr("src", filepath + (i - 1) + ".jpg");
            i = i - 1;
          } else {
            $("#left").fadeOut();
          }
        });
      } else if (filepath == "img/dec/") {
        let i = 1;
        $("#right").click(function (e) {
          e.preventDefault();
          if (i < 3) {
            $("#left").fadeIn();
            $("#right").fadeIn();
            $(this)
              .siblings("img")
              .attr("src", filepath + (i + 1) + ".jpg");
            i = i + 1;
          } else {
            $("#right").fadeOut();
          }
        });
        $("#left").click(function (e) {
          e.preventDefault();
          if (i > 1) {
            $("#right").fadeIn();
            $("#left").fadeIn();
            $(this)
              .siblings("img")
              .attr("src", filepath + (i - 1) + ".jpg");
            i = i - 1;
          } else {
            $("#left").fadeOut();
          }
        });
      } else if (filepath == "img/com/") {
        let i = 1;
        $("#right").click(function (e) {
          e.preventDefault();
          if (i < 9) {
            $("#left").fadeIn();
            $("#right").fadeIn();
            $(this)
              .siblings("img")
              .attr("src", filepath + (i + 1) + ".jpg");
            i = i + 1;
          } else {
            $("#right").fadeOut();
          }
        });
        $("#left").click(function (e) {
          e.preventDefault();
          if (i > 1) {
            $("#right").fadeIn();
            $("#left").fadeIn();
            $(this)
              .siblings("img")
              .attr("src", filepath + (i - 1) + ".jpg");
            i = i - 1;
          } else {
            $("#left").fadeOut();
          }
        });
      } else if (filepath == "img/nich/") {
        let i = 1;
        $("#right").click(function (e) {
          e.preventDefault();
          if (i < 2) {
            $("#left").fadeIn();
            $("#right").fadeIn();
            $(this)
              .siblings("img")
              .attr("src", filepath + (i + 1) + ".jpg");
            i = i + 1;
          } else {
            $("#right").fadeOut();
          }
        });
        $("#left").click(function (e) {
          e.preventDefault();
          if (i > 1) {
            $("#right").fadeIn();
            $("#left").fadeIn();
            $(this)
              .siblings("img")
              .attr("src", filepath + (i - 1) + ".jpg");
            i = i - 1;
          } else {
            $("#left").fadeOut();
          }
        });
      } else if (filepath == "img/stud/") {
        let i = 1;
        $("#right").click(function (e) {
          e.preventDefault();
          if (i < 2) {
            $("#left").fadeIn();
            $("#right").fadeIn();
            $(this)
              .siblings("img")
              .attr("src", filepath + (i + 1) + ".jpg");
            i = i + 1;
          } else {
            $("#right").fadeOut();
          }
        });
        $("#left").click(function (e) {
          e.preventDefault();
          if (i > 1) {
            $("#right").fadeIn();
            $("#left").fadeIn();
            $(this)
              .siblings("img")
              .attr("src", filepath + (i - 1) + ".jpg");
            i = i - 1;
          } else {
            $("#left").fadeOut();
          }
        });
      } else if (filepath == "img/porstu/") {
        let i = 1;
        $("#right").click(function (e) {
          e.preventDefault();
          if (i < 19) {
            $("#left").fadeIn();
            $("#right").fadeIn();
            $(this)
              .siblings("img")
              .attr("src", filepath + (i + 1) + ".jpg");
            i = i + 1;
          } else {
            $("#right").fadeOut();
          }
        });
        $("#left").click(function (e) {
          e.preventDefault();
          if (i > 1) {
            $("#right").fadeIn();
            $("#left").fadeIn();
            $(this)
              .siblings("img")
              .attr("src", filepath + (i - 1) + ".jpg");
            i = i - 1;
          } else {
            $("#left").fadeOut();
          }
        });
      } else if (filepath == "img/pcd/") {
        let i = 1;
        $("#right").click(function (e) {
          e.preventDefault();
          if (i < 11) {
            $("#left").fadeIn();
            $("#right").fadeIn();
            $(this)
              .siblings("img")
              .attr("src", filepath + (i + 1) + ".jpg");
            i = i + 1;
          } else {
            $("#right").fadeOut();
          }
        });
        $("#left").click(function (e) {
          e.preventDefault();
          if (i > 1) {
            $("#right").fadeIn();
            $("#left").fadeIn();
            $(this)
              .siblings("img")
              .attr("src", filepath + (i - 1) + ".jpg");
            i = i - 1;
          } else {
            $("#left").fadeOut();
          }
        });
      } else if (filepath == "img/sansc/") {
        let i = 1;
        $("#right").click(function (e) {
          e.preventDefault();
          if (i < 2) {
            $("#left").fadeIn();
            $("#right").fadeIn();
            $(this)
              .siblings("img")
              .attr("src", filepath + (i + 1) + ".jpg");
            i = i + 1;
          } else {
            $("#right").fadeOut();
          }
        });
        $("#left").click(function (e) {
          e.preventDefault();
          if (i > 1) {
            $("#right").fadeIn();
            $("#left").fadeIn();
            $(this)
              .siblings("img")
              .attr("src", filepath + (i - 1) + ".jpg");
            i = i - 1;
          } else {
            $("#left").fadeOut();
          }
        });
      } else if (filepath == "img/rapporto/") {
        let i = 1;
        $("#right").click(function (e) {
          e.preventDefault();
          if (i < 5) {
            $("#left").fadeIn();
            $("#right").fadeIn();
            $(this)
              .siblings("img")
              .attr("src", filepath + (i + 1) + ".jpg");
            i = i + 1;
          } else {
            $("#right").fadeOut();
          }
        });
        $("#left").click(function (e) {
          e.preventDefault();
          if (i > 1) {
            $("#right").fadeIn();
            $("#left").fadeIn();
            $(this)
              .siblings("img")
              .attr("src", filepath + (i - 1) + ".jpg");
            i = i - 1;
          } else {
            $("#left").fadeOut();
          }
        });
      } else if (filepath == "img/ST1/") {
        let i = 1;
        $("#right").click(function (e) {
          e.preventDefault();
          if (i < 6) {
            $("#left").fadeIn();
            $("#right").fadeIn();
            $(this)
              .siblings("img")
              .attr("src", filepath + (i + 1) + ".jpg");
            i = i + 1;
          } else {
            $("#right").fadeOut();
          }
        });
        $("#left").click(function (e) {
          e.preventDefault();
          if (i > 1) {
            $("#right").fadeIn();
            $("#left").fadeIn();
            $(this)
              .siblings("img")
              .attr("src", filepath + (i - 1) + ".jpg");
            i = i - 1;
          } else {
            $("#left").fadeOut();
          }
        });
      } else if (filepath == "img/ST2/") {
        let i = 1;
        $("#right").click(function (e) {
          e.preventDefault();
          if (i < 21) {
            $("#left").fadeIn();
            $("#right").fadeIn();
            $(this)
              .siblings("img")
              .attr("src", filepath + (i + 1) + ".jpg");
            i = i + 1;
          } else {
            $("#right").fadeOut();
          }
        });
        $("#left").click(function (e) {
          e.preventDefault();
          if (i > 1) {
            $("#right").fadeIn();
            $("#left").fadeIn();
            $(this)
              .siblings("img")
              .attr("src", filepath + (i - 1) + ".jpg");
            i = i - 1;
          } else {
            $("#left").fadeOut();
          }
        });
      } else {
        $("#right").css("display", "none");
        $("#left").css("display", "none");
      }
    });
  });

  // #situation
  $("#sit a").on("click", function () {});

  //#item
  $("#items .item a").on("click", function () {
    $("body,html").animate({ scrollTop: 0 }, 1);
    $("body,html").animate({ scrollLeft: 0 }, 1);
    $("body").css("overflowY", "hidden");

    var txt = "";
    var src = $(this).children("img").attr("src");
    var pos = src.lastIndexOf(".");
    var filename = src.substr(4, pos - 4);
    var filepath = src.substr(0, pos - 1);
    console.log(filename);

    if (filepath == "img/memo/") {
      txt = "Mémoires: Structures Portantes d'Asger Jorn, 1958";
    } else if (filepath == "img/SI1/") {
      txt = "Internationale Situationniste #1, 1958";
    } else if (filepath == "img/SI2/") {
      txt = "Internationale Situationniste #2, 1958";
    } else if (filepath == "img/SI3/") {
      txt = "Internationale Situationniste #3, 1959";
    } else if (filepath == "img/SI4/") {
      txt = "Internationale Situationniste #4, 1960";
    } else if (filepath == "img/SI5/") {
      txt = "Internationale Situationniste #5, 1960";
    } else if (filepath == "img/SI6/") {
      txt = "Internationale Situationniste #6, 1961";
    } else if (filepath == "img/SI7/") {
      txt = "Internationale Situationniste #7, 1962";
    } else if (filepath == "img/SI8/") {
      txt = "Internationale Situationniste #8, 1963";
    } else if (filepath == "img/SI9/") {
      txt = "Internationale Situationniste #9, 1964";
    } else if (filepath == "img/SI10/") {
      txt = "Internationale Situationniste #10, 1966";
    } else if (filepath == "img/SI11/") {
      txt = "Internationale Situationniste #11, 1967";
    } else if (filepath == "img/SI12/") {
      txt = "Internationale Situationniste #12, 1969";
    } else if (filepath == "img/sp/") {
      txt = "Society of the Spectacle (English), 1970";
    } else if (filepath == "img/allw/") {
      txt = "Address to All Workers, 1968";
    } else if (filepath == "img/com/") {
      txt = "Sur la Commune, 1962";
    } else if (filepath == "img/com/") {
      txt = "Adresse à Tous les Travailleurs, 1968";
    } else if (filepath == "img/dec/") {
      txt = "Déclaration, 1962";
    } else if (filepath == "img/fin/") {
      txt = "Fin de Copenhague, 1957";
    } else if (filepath == "img/nich/") {
      txt = "Nicht Hinauslehnen, 1962";
    } else if (filepath == "img/pcd/") {
      txt = "Postcards and Letters, 1962-1965";
    } else if (filepath == "img/porstu/") {
      txt = "Of Student Poverty, 1967";
    } else if (filepath == "img/rapporto/") {
      txt = "Secondo Rapporto (Italian), 1977";
    } else if (filepath == "img/rsg6/") {
      txt = "Destruktion af RSG-6, 1963";
    } else if (filepath == "img/sansc/") {
      txt = "La Société Sans Classes a Trouvé ses Artistes, 1958";
    } else if (filepath == "img/ST1/") {
      txt = "The Situationist Times #1 (partial), 1962";
    } else if (filepath == "img/ST2/") {
      txt = "The Situationist Times #2, 1962";
    } else if (filepath == "img/ST3/") {
      txt = "The Situationist Times #3 (cover), 1963";
    } else if (filepath == "img/ST4/") {
      txt = "The Situationist Times #4 (cover), 1963";
    } else if (filepath == "img/ST5/") {
      txt = "The Situationist Times #5 (cover), 1964";
    } else if (filepath == "img/ST6/") {
      txt = "The Situationist Times #6 (cover), 1967";
    } else if (filepath == "img/stud/") {
      txt =
        "Enragés et Situationnistes dans le Mouvement des Occupations, 1968";
    } else if (filename == "allwork") {
      txt = "Adresse a Tous les Travailleurs, 1968";
    } else if (filename == "cinema") {
      txt = "Contre le Cinéma, 1964";
    } else if (filename == "guide") {
      txt = "Guide Psychogeographique de Paris, 1957";
    } else if (filename == "lib") {
      txt = "Difendiamo la Libertà (Italian), 1959";
    } else if (filename == "mise") {
      txt = "De la Misère en Milieu Étudiant (cover), 1967";
    } else if (filename == "nerve") {
      txt = "Nervenruh! Keine Experimente!, 1958";
    } else if (filename == "nouveau") {
      txt = "Nouveau Théâtre d’Opérations dans la Culture, 1958";
    } else if (filename == "rappor") {
      txt = "Rapport (cover), 1957";
    } else if (filename == "student") {
      txt = "Das Elend der Studenten (German), 1968";
    } else if (filename == "sujet") {
      txt = "Le Prolétariat Comme Sujet et Comme Représentation, 1968";
    } else if (filename == "theNakedCity") {
      txt = "The Naked City, 1957";
    } else if (filename == "trait") {
      txt =
        "Traité de Savoir-vivre A l’Usage des Jeunes Générations (cover), 1967";
    }

    $("#wrapper").after(function () {
      return `<div id='backgI'>
      <img id='selected' src='${src}'>
                            <div id='mag'></div>
                            <a href="" id='back'>
                                <img src='img/back.png'>
                            </a>
                            <a href="" id='left'>
                                <img src='img/left.png'>
                            </a>
                            <a href="" id='right'>
                                <img src='img/right.png'>
                            </a>
                            <div id='capt'>
                                ${txt}
                            </div>
                        </div>`;
    });
    // $("#selected").css("height", "100%");
    $("#mag").css("background-image", "url(" + `${src}` + ")");

    if ($("#idd a").css("visibility") === "visible") {
      $("#back").on("click", function () {});
    } else {
      $("#back").on("click", function (e) {
        $("body").css("overflowY", "scroll");
        e.preventDefault();
        $("#backgW").remove();
        $("body,html").animate({ scrollTop: 0 }, 1);
        $("body,html").animate({ scrollLeft: 0 }, 1);
      });
    }

    if (filepath == "img/allwor") {
      $("#selected")
        .css("width", "80vw")
        .css("top", "50vh")
        .css("left", "50vw")
        .css("transform", "translate(-50%,-50%)");
    } else {
      $("#selected")
        .css("height", "92vh")
        .css("left", "50vw")
        .css("top", "50vh")
        .css("transform", "translate(-50%,-51%)");
    }

    if (filepath == "img/memo/") {
      let i = 1;
      $("#right").click(function (e) {
        e.preventDefault();
        if (i < 39) {
          $("#left").fadeIn();
          $("#right").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i + 1) + ".jpg");
          i = i + 1;
        } else {
          $("#right").fadeOut();
        }
      });
      $("#left").click(function (e) {
        e.preventDefault();
        if (i > 1) {
          $("#right").fadeIn();
          $("#left").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i - 1) + ".jpg");
          i = i - 1;
        } else {
          $("#left").fadeOut();
        }
      });
    } else if (filepath == "img/SI1/") {
      let i = 1;
      $("#right").click(function (e) {
        e.preventDefault();
        if (i < 19) {
          $("#left").fadeIn();
          $("#right").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i + 1) + ".jpg");
          i = i + 1;
        } else {
          $("#right").fadeOut();
        }
      });
      $("#left").click(function (e) {
        e.preventDefault();
        if (i > 1) {
          $("#right").fadeIn();
          $("#left").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i - 1) + ".jpg");
          i = i - 1;
        } else {
          $("#left").fadeOut();
        }
      });
    } else if (filepath == "img/SI2/") {
      let i = 1;
      $("#right").click(function (e) {
        e.preventDefault();
        if (i < 21) {
          $("#left").fadeIn();
          $("#right").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i + 1) + ".jpg");
          i = i + 1;
        } else {
          $("#right").fadeOut();
        }
      });
      $("#left").click(function (e) {
        e.preventDefault();
        if (i > 1) {
          $("#right").fadeIn();
          $("#left").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i - 1) + ".jpg");
          i = i - 1;
        } else {
          $("#left").fadeOut();
        }
      });
    } else if (filepath == "img/SI3/") {
      let i = 1;
      $("#right").click(function (e) {
        e.preventDefault();
        if (i < 23) {
          $("#left").fadeIn();
          $("#right").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i + 1) + ".jpg");
          i = i + 1;
        } else {
          $("#right").fadeOut();
        }
      });
      $("#left").click(function (e) {
        e.preventDefault();
        if (i > 1) {
          $("#right").fadeIn();
          $("#left").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i - 1) + ".jpg");
          i = i - 1;
        } else {
          $("#left").fadeOut();
        }
      });
    } else if (filepath == "img/SI4/") {
      let i = 1;
      $("#right").click(function (e) {
        e.preventDefault();
        if (i < 23) {
          $("#left").fadeIn();
          $("#right").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i + 1) + ".jpg");
          i = i + 1;
        } else {
          $("#right").fadeOut();
        }
      });
      $("#left").click(function (e) {
        e.preventDefault();
        if (i > 1) {
          $("#right").fadeIn();
          $("#left").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i - 1) + ".jpg");
          i = i - 1;
        } else {
          $("#left").fadeOut();
        }
      });
    } else if (filepath == "img/SI5/") {
      let i = 1;
      $("#right").click(function (e) {
        e.preventDefault();
        if (i < 29) {
          $("#left").fadeIn();
          $("#right").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i + 1) + ".jpg");
          i = i + 1;
        } else {
          $("#right").fadeOut();
        }
      });
      $("#left").click(function (e) {
        e.preventDefault();
        if (i > 1) {
          $("#right").fadeIn();
          $("#left").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i - 1) + ".jpg");
          i = i - 1;
        } else {
          $("#left").fadeOut();
        }
      });
    } else if (filepath == "img/SI6/") {
      let i = 1;
      $("#right").click(function (e) {
        e.preventDefault();
        if (i < 24) {
          $("#left").fadeIn();
          $("#right").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i + 1) + ".jpg");
          i = i + 1;
        } else {
          $("#right").fadeOut();
        }
      });
      $("#left").click(function (e) {
        e.preventDefault();
        if (i > 1) {
          $("#right").fadeIn();
          $("#left").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i - 1) + ".jpg");
          i = i - 1;
        } else {
          $("#left").fadeOut();
        }
      });
    } else if (filepath == "img/SI7/") {
      let i = 1;
      $("#right").click(function (e) {
        e.preventDefault();
        if (i < 31) {
          $("#left").fadeIn();
          $("#right").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i + 1) + ".jpg");
          i = i + 1;
        } else {
          $("#right").fadeOut();
        }
      });
      $("#left").click(function (e) {
        e.preventDefault();
        if (i > 1) {
          $("#right").fadeIn();
          $("#left").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i - 1) + ".jpg");
          i = i - 1;
        } else {
          $("#left").fadeOut();
        }
      });
    } else if (filepath == "img/SI8/") {
      let i = 1;
      $("#right").click(function (e) {
        e.preventDefault();
        if (i < 37) {
          $("#left").fadeIn();
          $("#right").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i + 1) + ".jpg");
          i = i + 1;
        } else {
          $("#right").fadeOut();
        }
      });
      $("#left").click(function (e) {
        e.preventDefault();
        if (i > 1) {
          $("#right").fadeIn();
          $("#left").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i - 1) + ".jpg");
          i = i - 1;
        } else {
          $("#left").fadeOut();
        }
      });
    } else if (filepath == "img/SI9/") {
      let i = 1;
      $("#right").click(function (e) {
        e.preventDefault();
        if (i < 27) {
          $("#left").fadeIn();
          $("#right").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i + 1) + ".jpg");
          i = i + 1;
        } else {
          $("#right").fadeOut();
        }
      });
      $("#left").click(function (e) {
        e.preventDefault();
        if (i > 1) {
          $("#right").fadeIn();
          $("#left").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i - 1) + ".jpg");
          i = i - 1;
        } else {
          $("#left").fadeOut();
        }
      });
    } else if (filepath == "img/SI10/") {
      let i = 1;
      $("#right").click(function (e) {
        e.preventDefault();
        if (i < 45) {
          $("#left").fadeIn();
          $("#right").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i + 1) + ".jpg");
          i = i + 1;
        } else {
          $("#right").fadeOut();
        }
      });
      $("#left").click(function (e) {
        e.preventDefault();
        if (i > 1) {
          $("#right").fadeIn();
          $("#left").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i - 1) + ".jpg");
          i = i - 1;
        } else {
          $("#left").fadeOut();
        }
      });
    } else if (filepath == "img/SI11/") {
      let i = 1;
      $("#right").click(function (e) {
        e.preventDefault();
        if (i < 39) {
          $("#left").fadeIn();
          $("#right").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i + 1) + ".jpg");
          i = i + 1;
        } else {
          $("#right").fadeOut();
        }
      });
      $("#left").click(function (e) {
        e.preventDefault();
        if (i > 1) {
          $("#right").fadeIn();
          $("#left").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i - 1) + ".jpg");
          i = i - 1;
        } else {
          $("#left").fadeOut();
        }
      });
    } else if (filepath == "img/SI12/") {
      let i = 1;
      $("#right").click(function (e) {
        e.preventDefault();
        if (i < 63) {
          $("#left").fadeIn();
          $("#right").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i + 1) + ".jpg");
          i = i + 1;
        } else {
          $("#right").fadeOut();
        }
      });
      $("#left").click(function (e) {
        e.preventDefault();
        if (i > 1) {
          $("#right").fadeIn();
          $("#left").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i - 1) + ".jpg");
          i = i - 1;
        } else {
          $("#left").fadeOut();
        }
      });
    } else if (filepath == "img/fin/") {
      let i = 1;
      $("#right").click(function (e) {
        e.preventDefault();
        if (i < 21) {
          $("#left").fadeIn();
          $("#right").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i + 1) + ".jpg");
          i = i + 1;
        } else {
          $("#right").fadeOut();
        }
      });
      $("#left").click(function (e) {
        e.preventDefault();
        if (i > 1) {
          $("#right").fadeIn();
          $("#left").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i - 1) + ".jpg");
          i = i - 1;
        } else {
          $("#left").fadeOut();
        }
      });
    } else if (filepath == "img/rsg6/") {
      let i = 1;
      $("#right").click(function (e) {
        e.preventDefault();
        if (i < 32) {
          $("#left").fadeIn();
          $("#right").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i + 1) + ".jpg");
          i = i + 1;
        } else {
          $("#right").fadeOut();
        }
      });
      $("#left").click(function (e) {
        e.preventDefault();
        if (i > 1) {
          $("#right").fadeIn();
          $("#left").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i - 1) + ".jpg");
          i = i - 1;
        } else {
          $("#left").fadeOut();
        }
      });
    } else if (filepath == "img/sp/") {
      let i = 1;
      $("#right").click(function (e) {
        e.preventDefault();
        if (i < 62) {
          $("#left").fadeIn();
          $("#right").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i + 1) + ".jpg");
          i = i + 1;
        } else {
          $("#right").fadeOut();
        }
      });
      $("#left").click(function (e) {
        e.preventDefault();
        if (i > 1) {
          $("#right").fadeIn();
          $("#left").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i - 1) + ".jpg");
          i = i - 1;
        } else {
          $("#left").fadeOut();
        }
      });
    } else if (filepath == "img/allw/") {
      let i = 1;
      $("#right").click(function (e) {
        e.preventDefault();
        if (i < 2) {
          $("#left").fadeIn();
          $("#right").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i + 1) + ".jpg");
          i = i + 1;
        } else {
          $("#right").fadeOut();
        }
      });
      $("#left").click(function (e) {
        e.preventDefault();
        if (i > 1) {
          $("#right").fadeIn();
          $("#left").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i - 1) + ".jpg");
          i = i - 1;
        } else {
          $("#left").fadeOut();
        }
      });
    } else if (filepath == "img/dec/") {
      let i = 1;
      $("#right").click(function (e) {
        e.preventDefault();
        if (i < 3) {
          $("#left").fadeIn();
          $("#right").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i + 1) + ".jpg");
          i = i + 1;
        } else {
          $("#right").fadeOut();
        }
      });
      $("#left").click(function (e) {
        e.preventDefault();
        if (i > 1) {
          $("#right").fadeIn();
          $("#left").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i - 1) + ".jpg");
          i = i - 1;
        } else {
          $("#left").fadeOut();
        }
      });
    } else if (filepath == "img/com/") {
      let i = 1;
      $("#right").click(function (e) {
        e.preventDefault();
        if (i < 9) {
          $("#left").fadeIn();
          $("#right").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i + 1) + ".jpg");
          i = i + 1;
        } else {
          $("#right").fadeOut();
        }
      });
      $("#left").click(function (e) {
        e.preventDefault();
        if (i > 1) {
          $("#right").fadeIn();
          $("#left").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i - 1) + ".jpg");
          i = i - 1;
        } else {
          $("#left").fadeOut();
        }
      });
    } else if (filepath == "img/nich/") {
      let i = 1;
      $("#right").click(function (e) {
        e.preventDefault();
        if (i < 2) {
          $("#left").fadeIn();
          $("#right").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i + 1) + ".jpg");
          i = i + 1;
        } else {
          $("#right").fadeOut();
        }
      });
      $("#left").click(function (e) {
        e.preventDefault();
        if (i > 1) {
          $("#right").fadeIn();
          $("#left").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i - 1) + ".jpg");
          i = i - 1;
        } else {
          $("#left").fadeOut();
        }
      });
    } else if (filepath == "img/stud/") {
      let i = 1;
      $("#right").click(function (e) {
        e.preventDefault();
        if (i < 2) {
          $("#left").fadeIn();
          $("#right").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i + 1) + ".jpg");
          i = i + 1;
        } else {
          $("#right").fadeOut();
        }
      });
      $("#left").click(function (e) {
        e.preventDefault();
        if (i > 1) {
          $("#right").fadeIn();
          $("#left").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i - 1) + ".jpg");
          i = i - 1;
        } else {
          $("#left").fadeOut();
        }
      });
    } else if (filepath == "img/porstu/") {
      let i = 1;
      $("#right").click(function (e) {
        e.preventDefault();
        if (i < 19) {
          $("#left").fadeIn();
          $("#right").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i + 1) + ".jpg");
          i = i + 1;
        } else {
          $("#right").fadeOut();
        }
      });
      $("#left").click(function (e) {
        e.preventDefault();
        if (i > 1) {
          $("#right").fadeIn();
          $("#left").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i - 1) + ".jpg");
          i = i - 1;
        } else {
          $("#left").fadeOut();
        }
      });
    } else if (filepath == "img/pcd/") {
      let i = 1;
      $("#right").click(function (e) {
        e.preventDefault();
        if (i < 11) {
          $("#left").fadeIn();
          $("#right").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i + 1) + ".jpg");
          i = i + 1;
        } else {
          $("#right").fadeOut();
        }
      });
      $("#left").click(function (e) {
        e.preventDefault();
        if (i > 1) {
          $("#right").fadeIn();
          $("#left").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i - 1) + ".jpg");
          i = i - 1;
        } else {
          $("#left").fadeOut();
        }
      });
    } else if (filepath == "img/sansc/") {
      let i = 1;
      $("#right").click(function (e) {
        e.preventDefault();
        if (i < 2) {
          $("#left").fadeIn();
          $("#right").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i + 1) + ".jpg");
          i = i + 1;
        } else {
          $("#right").fadeOut();
        }
      });
      $("#left").click(function (e) {
        e.preventDefault();
        if (i > 1) {
          $("#right").fadeIn();
          $("#left").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i - 1) + ".jpg");
          i = i - 1;
        } else {
          $("#left").fadeOut();
        }
      });
    } else if (filepath == "img/rapporto/") {
      let i = 1;
      $("#right").click(function (e) {
        e.preventDefault();
        if (i < 5) {
          $("#left").fadeIn();
          $("#right").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i + 1) + ".jpg");
          i = i + 1;
        } else {
          $("#right").fadeOut();
        }
      });
      $("#left").click(function (e) {
        e.preventDefault();
        if (i > 1) {
          $("#right").fadeIn();
          $("#left").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i - 1) + ".jpg");
          i = i - 1;
        } else {
          $("#left").fadeOut();
        }
      });
    } else if (filepath == "img/ST1/") {
      let i = 1;
      $("#right").click(function (e) {
        e.preventDefault();
        if (i < 6) {
          $("#left").fadeIn();
          $("#right").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i + 1) + ".jpg");
          i = i + 1;
        } else {
          $("#right").fadeOut();
        }
      });
      $("#left").click(function (e) {
        e.preventDefault();
        if (i > 1) {
          $("#right").fadeIn();
          $("#left").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i - 1) + ".jpg");
          i = i - 1;
        } else {
          $("#left").fadeOut();
        }
      });
    } else if (filepath == "img/ST2/") {
      let i = 1;
      $("#right").click(function (e) {
        e.preventDefault();
        if (i < 21) {
          $("#left").fadeIn();
          $("#right").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i + 1) + ".jpg");
          i = i + 1;
        } else {
          $("#right").fadeOut();
        }
      });
      $("#left").click(function (e) {
        e.preventDefault();
        if (i > 1) {
          $("#right").fadeIn();
          $("#left").fadeIn();
          $(this)
            .siblings("img")
            .attr("src", filepath + (i - 1) + ".jpg");
          i = i - 1;
        } else {
          $("#left").fadeOut();
        }
      });
    } else {
      $("#right").css("display", "none");
      $("#left").css("display", "none");
    }
  });

  function init() {
    setSize();
    setPos();
    $(window).bind("resize", resizeHandler);
    $("#nav, #items").css({
      width: $(window).width(),
      height: $(window).height() * 7.5,
      overflow: "hidden",
    });
    shuffle();
  }

  function randRange(min, max) {
    var randomNum = Math.round(Math.random() * (max - min + 1) + (min - 0.5));
    return randomNum;
  }

  function resizeHandler(e) {
    setSize();
    setPos();
  }

  function setSize() {
    $("#nav, #items").css({
      width: $(window).width(),
      height: $(window).height() * 7,
      overflow: "hidden",
    });
  }

  function setPos() {}

  function navpos() {
    $("#nderive a").css({
      left:
        randRange(0, $(window).width() - $("#nderive a").width() / 2) + "px",
      top:
        randRange(0, $(window).height() * 6.8 - $("#nderive a").height() / 2) +
        "px",
      transform: "rotate(" + randRange(0, 360) + "deg)",
    });
    $("#ndeto a").css({
      left: randRange(0, $(window).width() - $("#ndeto a").width() / 2) + "px",
      top:
        randRange(0, $(window).height() * 6.8 - $("#ndeto a").height() / 2) +
        "px",
      transform: "rotate(" + randRange(0, 360) + "deg)",
    });
    $("#nurban a").css({
      left: randRange(0, $(window).width() - $("#nurban a").width() / 2) + "px",
      top:
        randRange(0, $(window).height() * 6.8 - $("#nurban a").height() / 2) +
        "px",
      transform: "rotate(" + randRange(0, 360) + "deg)",
    });
    $("#nbana a").css({
      left: randRange(0, $(window).width() - $("#nbana a").width() / 2) + "px",
      top:
        randRange(0, $(window).height() * 6.8 - $("#nbana a").height() / 2) +
        "px",
      transform: "rotate(" + randRange(0, 360) + "deg)",
    });
    $("#nques a").css({
      left: randRange(0, $(window).width() - $("#nques a").width() / 2) + "px",
      top:
        randRange(0, $(window).height() * 6.8 - $("#nques a").height() / 2) +
        "px",
      transform: "rotate(" + randRange(0, 360) + "deg)",
    });
    $("#nword a").css({
      left: randRange(0, $(window).width() - $("#nword a").width() / 2) + "px",
      top:
        randRange(0, $(window).height() * 6.8 - $("#nword a").height() / 2) +
        "px",
      transform: "rotate(" + randRange(0, 360) + "deg)",
    });
  }

  function shuffle() {
    $("#wrapper").css({ visibility: "visible" });
    if ($("#backg")) {
      $("#backg").css("visibility", "hidden");
    }
    var iHrefAry = [],
      iAry = [];
    for (var i = 0; i < $("#items .item").length; i++) {
      iHrefAry[iHrefAry.length] = $("#items .item:eq(" + i + ")");
      iAry[iAry.length] = $("#items .item:eq(" + i + ")");

      var iHref = iHrefAry[i].find("a:first"),
        iImg = iAry[i].find("img:first"),
        iCls = iImg.attr("class");

      switch (iCls) {
        case "i0":
          var rR0 = randRange(25, 40),
            sW0 = iImg.width() * (rR0 * 0.01),
            sH0 = iImg.height() * (rR0 * 0.01),
            d0 = "rotate(" + randRange(0, 360) + "deg)";
          iHref.css({ width: sW0 + "px", height: sH0 + "px", transform: d0 });
          iImg.css({
            width: iHref.width() + "px",
            height: iHref.height() + "px",
            transform: iHref.css("transform") * -1,
          });
          break;
        case "i1":
          var rR1 = randRange(40, 55),
            sW1 = iImg.width() * (rR1 * 0.01),
            sH1 = iImg.height() * (rR1 * 0.01),
            d1 = "rotate(" + randRange(0, 360) + "deg)";
          iHref.css({ width: sW1 + "px", height: sH1 + "px", transform: d1 });
          iImg.css({
            width: iHref.width() + "px",
            height: iHref.height() + "px",
            transform: iHref.css("transform") * -1,
          });
          break;
        case "i2":
          var rR2 = randRange(55, 70),
            sW2 = iImg.width() * (rR2 * 0.01),
            sH2 = iImg.height() * (rR2 * 0.01),
            d2 = "rotate(" + randRange(0, 360) + "deg)";
          iHref.css({ width: sW2 + "px", height: sH2 + "px", transform: d2 });
          iImg.css({
            width: iHref.width() + "px",
            height: iHref.height() + "px",
            transform: iHref.css("transform") * -1,
          });
          break;
        case "i3":
          var rR3 = randRange(70, 85),
            sW3 = iImg.width() * (rR3 * 0.01),
            sH3 = iImg.height() * (rR3 * 0.01),
            d3 = "rotate(" + randRange(0, 360) + "deg)";
          iHref.css({ width: sW3 + "px", height: sH3 + "px", transform: d3 });
          iImg.css({
            width: iHref.width() + "px",
            height: iHref.height() + "px",
            transform: iHref.css("transform") * -1,
          });
          break;
        case "i4":
          var rR4 = randRange(85, 100),
            sW4 = iImg.width() * (rR4 * 0.01),
            sH4 = iImg.height() * (rR4 * 0.01),
            d4 = "rotate(" + randRange(0, 360) + "deg)";
          iHref.css({ width: sW4 + "px", height: sH4 + "px", transform: d4 });
          iImg.css({
            width: iHref.width() + "px",
            height: iHref.height() + "px",
            transform: iHref.css("transform") * -1,
          });
          break;
        default:
          break;
      }

      iAry[i].css({
        left: randRange(0, $(window).width()) + "px",
        top: randRange(0, $(window).height() * 6.8) + "px",
      });
    }

    navpos();

    $(
      "#nderive a, #ndeto a, #nurban a, #nbana a, #nques a,#nword a, #idd a, #items .item a"
    ).bind("click", function (e) {
      e.preventDefault();
    });
    $(
      "#nderive a, #ndeto a, #nurban a, #nbana a, #nques a, #nword a, #idd a"
    ).css({ visibility: "visible" });
  }

  $(window).load(function () {
    init();
    $("#sit a")
      .css({
        left: 1.5 + "vw",
        top: 2.5 + "vh",
        position: "absolute",
      })
      .css("visibility", "hidden");

    $("#idd a")
      .css({
        left: 1.5 + "vw",
        top: 3.5 + "vh",
        position: "absolute",
        transform: "rotate(" + randRange(0, 360) + "deg)",
      })
      .click(function (e) {
        e.preventDefault();
      });
  });
});
