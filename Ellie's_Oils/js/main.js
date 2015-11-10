$(document).ready(function() {

    function resizeParallax(){
       $(window).trigger('resize').trigger('scroll'); 
    }

	$(".readmore").click(function(e){
		e.preventDefault();
        // $(".hide").slideDown({
        //     complete: function(){
        //       resizeParallax();
        //     }
        // });
        $(".hide").slideDown("slow", resizeParallax);
        
        });

    $(".readless").click(function(e){
		e.preventDefault();
        $(".hide").slideToggle({
            complete: function(){
                resizeParallax();
            }
        });
    });

    $(".recipes").slick({
    	adaptiveHeight: true,
    	arrows: true,
    	infinite: true,
    	dots: true

    });

    var oils = {
        "a-002": "This robust intensity Chilean Coratina touts incredible quality composition including high polyphenol antioxidant content. This healthy choice boasts big pepper and herbaceous notes of green banana and green apple peel. A durable and healthy choice ideal for cooking and comsuming raw.",
        "a-001": "Crafted by Boundary Bend/Cobram Estate, this highly awarded Coratina has won Best in Class and Gold medals in Internatonal and Domestic Olive Oil Competitions. The big Coratina 'nose' packs a wallop and displays notes of green almond, green apple peel, and grass. Herbaceous with a lingering pepper finish!",
        "a-003": "A pungent EVOO! The healthful thrat catching sensation know as pungency speaks to freshness, potency and also some of the health benefits occurring from the antioxidant properties. Herbaceous notes include green apple, green banana and pine.",
        "a-004": "Loaded with desirable pungency and see in bold green fruit attributes, this robust Picholine displays green olive, herb, and apple notes with floral qualities. Ample bitterness & pepper. The finish is both spicy and pungent.",
        "a-005": "This Picual displays intense green fruit aromas of green tomato and herbaceous tomato leaf.",
        "a-006": "The late fall, early winter truffle is used in the making of this savory oil. A 'tea methid' is utilized which steeps the ripe truffles for extended periods of time in olive oil. The closely guarded, proprietary process yields our heady,complex black trulle oil. No extracts or chemicals are used in its production. Fantastic in cream-based soups, risotto or mashed potatoes.",
        "a-007": "This butternut squash seed oil is an all-natural, expeller-pressed, unrefined oil for flavoring or finishing uses. It is pure oil made from the first pressing of 100% non-GMO butternut squash seeds harvested and sources exclusively from a family owned farm in central New York.",
        "a-008": "Our Japanese dark toasted sesame oil is roasted low and slow, and then pressed in small batches. It has tremendous depth of flavor. One of the most flavorful and fragrant oils in the world!",
        "a-009": "This pumpkin seed oil is an all-natural, expeller-pressed, unrefined oil for flavoring or finishing uses. It is pure oil made from the first pressing of 100% non-GMO pumpkin seeds harvested and sourced exclusively from a family owned farm in central New York.",
        "a-010": "From the Barbary Coast of North Africa, this Tunisian baklouti pepper is rare and unique to this region. This is fused oil is the only example of this fruity and spicy green chili olive oil in the world. Baklouti chili olive oil is made by combining fresh, early harvest organic olives with an almost equal ratio of fresh, whole green baklouti chilies. The two, and only two, ingredients are then crushed together, mixed in the malaxer which fuses the fresh green essential oil of the pepper with the organic olive oil. Baklouti adds a savory, tantalizing kick to salsas, marinades, soups, grilled foods, vegetables, and more.",
        "a-011": "Fresh, green, and herbaceous - this amazing infusion is made from UP Certified Extra Virgin Olive Oil infused with essential basil oil. Fantastic anywhere you’d like the fresh flavor or basil. Use in marinades, salads, for bread dipping, brushed on vegetables, with poultry, and more. Try it on a summer salad or caprice and let your taste buds travel to the shores of the Mediterranean. Pairs great with the Strawberry Balsamic.",
        "a-012": "Made with UP Certified Extra Virgin Olive Oil, this creamy, dreamy infused olive oil is vegan, naturally infused, dairy free, and heart healthy! It gets its rich, decadent flavor of butter strictly from organic botanical infusions! Use this buttery olive oil as a butter substitute in baking, sautéing, or anywhere you might use a liquid fat such or melted butter including: over hot popcorn, with seafood i.e. crab or shrimp, to dip bread in, over pasta, mashed potatoes, rice, or anything else you can possibly think of!",
        "a-013": "Made at our certified organic olive oil mill in Tunisia by crushing together fresh, whole, ripe red cayenne chilies with 100% certified organic, early harvest chetoui olives. The olives and chilies are then mixed together for 30 minutes to marry the essential oil of the chilies with the olive oil. After this process, the fused oil is, centrifuged to remove solids and moisture, decanted, and filtered.",
        "a-014": "Made with UP Certified Extra Virgin Olive Oil, the smoky flavor of this chili-infused olive oil is great for marinating steaks, brushing on grilled chicken or paired with seafood. Drizzle over vegetables, use in salsa, or as a spicy condiment for pizza. Great with shrimp, potatoes, or drizzled over warm beans. It makes excellent dipping oil for artisan breads, finishing oil for soups, pasta, and grain dishes. Try pairing with our Blood Orange Olive Oil!",
        "a-015": "Made with UP Certified Extra Virgin Olive Oil, this savory infused oil masterfully blends the flavor of roasted, sweet caramelized onions with fresh, herbaceous cilantro. Fantastic for marinating poultry or meat for fajitas, for drizzling over vegetables, grilling, sauteing, in salsas, and more. Pairs well with our Honey Ginger White Balsamic Vinegar and Grapefruit White Balsamic.",
        "a-016": "Our Garlic Olive Oil (made with UP Certified Extra Virgin Olive Oil) is redolent with the pungent flavor of fresh garlic. This versatile, heart healthy oil can be used for sautéing, roasting, grilling, drizzling on salads, vegetables, in marinades, and with baked foods.",
        "a-017": "Traditionally used in North African and the Middle Eastern cuisine, harissa is a condiment which is made from dried hot chili peppers, garlic, toasted caraway, toasted coriander, and toasted cumin, pounded into a paste with olive oil. We use Certified Ultra Premium Extra Virgin Olive Oil and a copious amount of peppers to make our infused olive oil very spicy, and one of our hottest in our collection.",
        "a-018": "Made with UP Certified Extra Virgin Olive Oil , this classic herbal combination includes notes of lavender, rosemary, savory, thyme and bay leaf. It’s a show stopper drizzled over grilled lamb, chicken, used in marinades, brushed on vegetables to be roasted or grilled, brushed on turkey before roasting, for bread dipping, or in aioli.",
        "a-019": "Our Eureka Lemon olive oil is produced by pressing whole, fresh lemons together with early harvest, certified organic olives at the time of crush. Its light, refreshing flavor is just perfect to sauté shrimp or scallops or to drizzle on chicken or fish. Yet this versatile oil can also be used to bake sweets such as cookies, biscotti, cakes, and in granola. It’s fabulous in marinades, dressings on salads, vegetables, and more.",
        "a-020": "Made with fresh Mandarin citrus fruit picked at its peak and crushed with fresh, certified organic early harvest Chetoui olives using 100% mechanical cold extraction methods. This fused citrus oil is redolent with the intense flavor of fresh Mandarin zest. Use it in baked goods such as tea cakes, in dressings, and marinades. It is particularly delicious with poultry and pairs well with Blueberry Dark Balsamic.",
        "a-021": "Grilling seafood and chicken with a bright twist of Persian Lime makes this olive oil a treat – and blending with black cherry or blueberry balsamic in a salad is amazing. Mix and match with fig or blackberry ginger or traditional aged 12 year balsamic vinegar – for a great tasty twist – and pair with Honey Ginger Balsamic on shrimp and seafood — wow!",
        "a-022": "Made with fresh wild Rosemary crushed with early harvest, fresh picked, certified organic Chetoui olives using 100% mechanical cold extraction methods. This fused herb oil embodies the heart and soul or rosemary. It is both complex and aromatic. Use anywhere rosemary might be used. Use with poultry, pork or lamb. Spectacular drizzled over sautéed vegetables. Mind-blowing with roasted potatoes. Pairs well with the Pomegranate Dark Balsamic.",
        "a-023": "Made with UP Certified Extra Virgin Olive Oil, our Tuscan Herb infused olive contains a harmonious and delicious combination of herbal flavors including oregano, rosemary, marjoram, and garlic. Use to sauté, grill, broil, roast, and bake. It brings spectacular flavor to just about anything. Try with chicken, vegetables, potatoes, pork, pasta, rice, turkey, sauces, marinades, vinaigrettes, aioli, bread dipping, and more.",
        "a-024": "Made with UP Certified Extra Virgin Olive Oil, this oil contains a delicious combination of fresh, herbaceous sage with an array of savory, wild mushrooms including Cremini, Shitake, and Porcini. The result is rich, savory experience that can be used in many applications. Try drizzled over cream of mushroom soup, on risotto, roasted potatoes, with poultry, in stuffing, on croutons, over vegetables, and in aioli. Let this oil take your vegetables to a whole new level."
    }
        
    var vinegars = {
        "b-001": "Our Aged Balsamic condimento is naturally infused with floral, sweet, black currant. This rich, unique balsamic condimento is tart and amazingly complex. Pair with pungent salty cheeses, use in salads, over yogurt or to dress fresh fruit salad.",
        "b-002": "Made with natural ingredients, our aged fig balsamic vinegar from Modena is naturally dense bursting with sweet, complex fig. Use in marinades, dressings, bread dipping, as a BBQ glaze, or with cheese for a sophisticated cheese plate.",
        "b-003": "Our Blackberry-Ginger Balsamic is wonderfully sweet, pleasingly tart. It’s redolent with the exotic, spicy flavor of ginger artfully married with rich, ripe juicy blackberry. It makes a fantastic dressing or marinade, use on chicken, fish, over fruit salad, or oatmeal. It’s divine paired with our Persian lime Olive Oil, Lemon Olive oil, or any one of our un-infused.",
        "b-004": "Our luscious blueberry balsamic vinegar is just as amazing over garden salad as it is over fruit salad. When paired with delicate extra virgin oil such as Arbequina, the intense blueberry flavor will shine. Also fantastic with our orange or lemon olive oils. Pairs well with blue and feta cheeses.",
        "b-005": "This delightful vinegar is spicy and warm, perfect drizzled over fresh fruit or as a dessert topping. It has the unique taste of d’anjou pear, and is matches well with many of our sweeter, fruity oils for a delicious marinade or salad dressing.",
        "b-006": "Our dark chocolate balsamic vinegar is rich, thick and resounds with the complexity of three different single origin chocolates responsible for the depth of its flavor. Drizzle over vanilla gelato, blondies, mix with fresh berries, fruit salad, or add zing to your chicken mole sauce.  It pairs beautifully with the Blood Orange Agrumato Olive Oil.",
        "b-007": "We have searched high and low, and it appears that we have created the first of its kind, an Aged Pure Maple Balsamic, using real 100% pure maple produced at a small family farm in Vermont. This balsamic is outrageously good. Think pancakes, BBQ sauce base, waffles, maple balsamic glazed bacon, pork chops, salmon, glazed ham, ice cream, dressings, marinades, chocolate, cake, fruit, the possibilities are endless. It was made to be used with our butter infused olive oil, California toasted almond oil, blood orange fused (agrumato) olive oil. It works well with any number extra virgin olive oils in our collection.",
        "b-008": "The intense sweet-tart flavor of the pomegranate is a perfect match for hearty meats like lamb and duck. It makes and exciting dressing whisked with your favorite oil, pomegranate seeds, toasted nuts and and feta cheese. It adds depth to pan sauces, braised meats or compotes. Drizzle over poached fruits and ice cream for an elegant and easy dessert.",
        "b-009": "This thick, rich, perfectly balanced Balsamic Vinegar dazzles with the natural flavor of fresh, ripe raspberries. Both sweet and tart, it’s perfect tossed with mixed salad greens and a little feta cheese or toasted nuts. Also enjoy paired with one of our flavored oils or as a marinade or glaze for pork or chicken.",
        "b-010": "Both sour and tart, our strawberry balsamic vinegar is the very embodiment of ripe juicy strawberry and rich smooth aged balsamic. Use in marinades, dressings, with spinach salad, on cheese plates, to glaze poultry or meat, over thick yogurt or premium vanilla ice cream.",
        "b-011": "Our aged and infused Tangeringe Balsamic is citrusy and complex. Use this tart-sweet condimento with poultry, Asian inspired dipping sauce, dressings, marinades, cheese plates, over yogurt, fruit salad, warm chocolate brownies. Pairs well with Garlic Olive Oil, Lime Olive Oil, Lemon Olive Oil, Orange Olive Oil, and any non-infused UP Extra Virgin Olive Oil.",
        "b-012": "Our finest grade of aged balsamic condimento from Modena, Italy is produced in the Traditional Style. It is aged using the Solera System for up to 18 years in chestnut, oak, mulberry and ash barrels. With a 4% acidity, it exceeds Four Leaf Quality with an astonishingly high natural density of 1.28+. This spectacular density comes naturally without thickeners or added sugar, from a lengthy aging process and cooking in copper kettles. It’s exceedingly rich, complex and dense and pairs beautifully with any olive oil in our collection. Use for vinaigrettes, glazes, marinades, bread dipping, drizzling over fruit, vegetables or to marinate meat and poultry.",
        "b-013": "Sultry, fragrant Tahitian vanilla beans are married with our aged balsamic condimento. The resulting collaboration is intoxicating as it is exotic. Try with fresh strawberries or drizzled over a warm brownie. Pair with our Fused Blood Orange Olive Oil.",
        "b-014": "Our Alfoos Mango White Balsamic Condimento pairs exquisitely with our Persian lime olive oil. Also fantastic with shrimp, scallops, salad and in salsas for a tropical, sweet-tart twist! The Alfoos mango cultivar is considered by many to be one of the best in terms of sweetness, richness and flavor.",
        "b-015": "Our Coconut White Balsamic is wonderfully sweet, pleasingly tart and redolent with the clean, natural flavor of coconut. It makes a fantastic dressing or marinade, splash onto fruit salad, or enjoy in a cocktail.  It’s also divine paired with our Persian Lime, Cilantro & Onion Olive Oils or Toasted Sesame Oil.",
        "b-016": "This White Balsamic is clean, crisp and very tart and boasts a lovely deep, rose blush. It has an amazingly fruity, complex bouquet that shines in a multitude of culinary applications. Use to dress fruit or vegetable salads, as a marinade, a glaze for poultry, with gelatin for a delicious fruit aspic or even in a mixed drink!",
        "b-017": "Our grapefruit white balsamic sparkles with crisp, clean citrus flavor.  It has a perfect balance of acidity and natural sweetness. Try this amazing balsamic in dressings, paired with fennel. It makes a show-stopping white balsamic grapefruit granita.",
        "b-018": "The Gravenstein Apple is an incredibly hard to find variety due to the difficulty formers have cultivating it.  It's grown in pockets up the coast of northern California and priced for it's amazing ambrosia perfume, and crisp sweet-tart cream colored flesh. Our  Gravenstein's larger than life flavor pairs with our well balanced Ultra Premium White Balsamic from Italy for a delectable culinary symphony.",
        "b-019": "Honey and ginger plays well together and bring a gentle, spicy heat which balances perfectly with the moderate, natural acidity of our white balsamic vinegar. This condiment is superlative when paired with our Persian Lime Extra Virgin Olive Oil and positively shines with our Japanese Toasted Sesame Oil! Mix an amazing marinade with the vinegar, toasted sesame oil, our Garlic Extra Virgin Olive Oil and soy sauce.",
        "b-020": "Sweet, spicy and tart, like you would expect from this chili-infused condiment. Use this to light up your marinades, marinate shrimp, poultry or meat, splash in a ceviche, add dimension to your salsa or blend into dressings.  Pairs well with lime olive oil, garlic olive oil, basil olive oil, cilantro and roasted onion olive oil, Baklouti chili olive oil, and lemon olive oil.",
        "b-021": "Made with White Grape Must in Modena, Italy, our White Peach Balsamic a crisp, fruity balsamic vinegar with a touch of sweetness and balanced acidity.  It’s extremely adaptable and can be paired with any of our Extra Virgin Olive Oils, as well as our flavored oils to make a light, tart vinaigrette.  Use to marinate, pork, poultry, in mixed drinks, or add a splash to your sparkling water for a delightful, refreshing beverage.",
        "b-022": "Sweet and tart with the aroma of fresh ripe pineapple, so bright & fun! Try pairing with soy sauce, ginger & our terrific Sesame Oil (Wow!) or our Organic Garlic Olive Oil or pair with any of our terrific Citrus Olive Oils - Wow!",
        "b-023": "This sparkling ruby jewel-toned white balsamic owes its tart, crisp flavor to juicy California pomegranates and floral winter quince. It’s made from authentic white balsamic condimento, aged for up to 12 years in Modena, Italy. Pairs beautifully with Blood Orange Agrumato Olive Oil, Persian Lime Olive Oil."
    }

    var salts = {
        "c-001": "Applewood Smoked Sea Salt is a flaky sea salt that utilizes sweet Applewood to fuel the fires that flavor this naturally smoked sea salt. Aged Applewood is one of the most popular of the fruit woods used in smoking, and creates a delicious, savory flavor. Applewood Smoked Sea Salt has a subtle fruit wood flavor that is mild enough to use with fish, shellfish, and poultry. Pork, sausage, ham, and bacon are also delicious when cooked or cured with this smoked salt.",
        "c-002": "This smoky seasoning combines the earthy spiciness of smoked chipotle peppers with the crisp taste of all natural Pacific sea salt. Made with real smoke-dried jalapeño peppers, and as warm and delicious as its namesake, this salt has a rich, toasted pepper flavor that brings a dash of fiesta to the table.",
        "c-003": "A delicate sea salt crystal that forms on the surface of tropical salt beds. This unique finishing salt is hand harvested and only available in limited quantities.",
        "c-004": "Alaea is the traditional Hawaiian table salt used to season and preserve. Alaea Hawaiian Sea Salt is non-processed and rich in trace minerals, all of which are found in sea water. A small amount of harvested reddish Hawaiian clay (‘Alaea) enriches the salt with Iron-Oxide.",
        "c-005": "Pure, pristine Ancient Ocean® Himalayan Pink Salt from Ellie's Oils is one of the finest gourmet food grade salts you can buy. With 84 trace minerals, our Himalayan Pink Salt was mined from ancient salt beds that have remained untouched by pollution and impurities since the crystals first formed more than 200 million years ago. Himalayan Pink Salt is used by spas, health professionals and culinary experts around the world.",
        "c-006": "This salt has a wild side. A perfect blend of all natural sea salt and a healthy dose of authentic jalapeno peppers combine to create a fiery hot flavor that will make your taste buds tingle. This sizzling salt will give a bite of spicy flavor to your favorite recipes on the grill or in the kitchen. Heat up guacamole, flank steak, or chicken and rice for a dash of salt and loads of peppery bite.",
        "c-007": "Lemon & salt go together like peanut butter & chocolate. They make a perfect flavor pair. Imagine fresh lemon, not just the oil, intermingled with a premium sea salt creating the ideal flavor combination. This is an essential salt for seafood lovers, bartenders and pastry chefs. Both kids and adults can appreciate the addition of Lemon Twist salt to their meal.",
        "c-008": "An all-natural sea salt smoked with genuine Mesquite wood, the official smoke flavor of Texas barbecue. This tenacious wood has a strong, hearty flavor that complements meat or any dish that needs an authentic Southwest twist. Genuine mesquite smoke combined with pure sea salt creates a savory seasoning that is ideally suited for using on the grill at home!",
        "c-009": "Roasted Garlic Sea Salt is all natural sea salt infused with real roasted garlic! This is a much improved, very gourmet version of traditional garlic salt. The flavor is out of this world. Try on absolutely anything.",
        "c-010": "Sriracha and sea salt—two ingredients that make everything better! Enjoy the tangy Thai heat of sun-ripened chilies infused into all-natural flake sea salt. Use it in soups, sauces, noodles, pizza—the real question is: what can't you use it on?",
        "c-011": "Spanish Rosemary Sea Salt is an all natural sea salt that delivers a straight from the herb garden flavor. A perfect pairing with roasted potatoes, it will make this simple dish extraordinary. Add to any dish to give it a fresh, herbed taste.",
        "c-012": "Take your favorite crusty sourdough bread, spread with butter and top with a pinch of Tomato Fusion Salt. What could be better or easier? The rich tomato flavor is created by a special process that actually incorporates the whole tomato. This is literally tomatoes mixed with sea salt. Great for soups and sauces, topping appetizers or mixed with herbs to create an amazing spice rub.",
        "c-013": "Combine the clean simple flavor of sea salt with fresh, juicy ginger. The ginger flavor of this Fusion variety cannot be matched by powdered or synthetic flavorings. Use on grilled veggies, Asian noodles or fish.",
        "c-014": "Toasted Onion Sea Salt adds a deliciously rich onion flavor to any dish. Perfect on top of grilled asparagus, this salt adds a depth of flavor to practically anything. Toasted Onion salt melds perfectly with golden, oven-baked chicken.",
        "c-015": "The delicious final product is a wonderful addition to gravy and sauces, and its rich, deep color makes it a visually stunning finishing salt. It also serves as further proof that many great ideas form over a glass of wine."
    }

    $(".showDescription").change(function(){
        var value = $(this).val();
        var oilDescription = oils[value];
        $(".oil-description").text(oilDescription);
        var vinegarDescription = vinegars[value];
        $(".vinegar-description").text(vinegarDescription);
        var saltDescription = salts[value];
        $(".salt-description").text(saltDescription);

    });

    $("form").on("submit", function(e) {
        e.preventDefault();
        var email = $("input[name='email']").val();
        var context = $("textarea[name='context']").val();
        var data = {
            userEmail: email,
            userContext: context 
        }

        console.log(data);
    });

    $(".mobile-menu").click(function(e) {
        e.preventDefault();
        $(".menu").toggleClass('open');
        resizeParallax();
        });
});









