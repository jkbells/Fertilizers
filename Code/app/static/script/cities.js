
var state_arr = new Array("Punjab", "Khyber Pakhtunkhwa", "Balochistan", "Sindh");

var s_a = new Array();
s_a[0]="";
s_a[1]=" Lahore | Faisalabad | Rawalpindi | Gujranwala | Multan | Bahawalpur | Sargodha | Sialkot | sheikhupura | Rahim-Yar-Khan | Jhang | Dera-Ghazi-Khan | Gujrat | Sahiwal | Wah-Cantonment | Kasur | Okara | Chiniot | Kamoke | Hafizabad | Sadiqabad | Burewala | Khanewal | Muzaffargarh | Mandi Bahauddin | Jhelum | Khanpur | Pakpattan | Daska | Gojra | Muridke | Bahawalnagar | Samundri | Jaranwala | Chishtian | Attock | Vehari | Kot Abdul Malik | Ferozewala | Chakwal | Gujranwala Cantonment | Kamalia | Ahmedpur East | Kot Addu | Wazirabad | Layyah | Taxila | Khushab | Mainwali | Lodhran | Hasilpur | Bhakkar | Arif wala | Sambrial | jatoi | Haroonabad | Narowal | Bhalwal ";
s_a[2]=" Peshawar | Mardan | Mingora | Kohat | Dera Ismail Khan | Abbottabad | Mansehra | Swabi | Nowshera | Kabal | Charsadda | Barikot | Shabqabar | Haripur | Takht-i-Bahi | Paharpur | Batkhela | jamrad | Bahrain | Lakki Marwart | Pabbi | Topi | Jehangira | Karak | Bannu | Chitral | Hangu | Havelian | Khwazakhela | khalabad | Tank | Dir | Matta | Tordher | Timargara | Paroa | Amangarh | Risalpur | Nawan Shehr | Sadda | Landi Kotal | Tangi | Akora Khattak | Tall | Zaida | Utmanzai ";
s_a[3]=" Quetta | Turbat | Khuzdar | Hub | Chaman | Dera Murad Jamali | Gwadar | Dera Allah Yar | Usta Mohammad | Sui Town | Sibi | Loralai | Tump | Nushki | Zhob | Kharan | chitkan | Khanozai | Buleda | Saranan | Zehri | Qalat | Tasp | Surab | Pishin | Mastung | Qilla Saifullah | Pasni | Nal | Winder | Uthal | Huramzai | Muslim Bagh | Dera Bugti | Qilla Abdullah | Bela | wadh | Washuk | Washuk | Awaran | Machh | jiwani | Ormara | Kohlu | Bhag | Dalbandin | Dhabar | Musakhel | Harnai | Dureji | Sohbatpur | Gajjar Mashkay | Barkhan | Yiang Kiag ";
s_a[4]=" Latifabad | Karachi | Bhira City | Bhira Road | Bhirkan | Boriri | Chak | Dadu | Daharki | Daulatpur | Digri | Diplo | Dokri | Gambat | Garhi Yasin | Ghotki | Guddu Barrage | Hala | Khairpur Mirs | Hyderabad | Islamkot | Jacobabad | Jamshoro | Jam Sahib | Khandhkot | Kandiaro | Kashmore | Keti Bandar | Khadro | Khairpur | Khipro | Kaimari | Korangi | Kot Diji | Kotri | Kunri | Lakhi Ghulam shah | Larkana | Madeji | Malir | Manjhand | Maqsoodo Rind | Matiari | Mehar | Mehrabpur | Main Sahib | Miranpur | Mirpur Khas | Mithani | Mirpur Mathelo | Mithi | Moro | Mothparja | Nagarparkar | Nasirabad | Naudero | Nausharo Feroze | Nawabshah | New Saeedabad | Pir jo Goth | Piryaloi | Qambar | Qasimabad | Qubo Saeed Khan | Rajo Khanani | Ranipur | Ratodero | Rohri | Sakrand | Samaro | Sanghar | Sann | Sehwan Sharif | Shahbandar | Shahdadkot | Shahdadpur | Shahpur Chakar | Shahpur jahania | Shikarpaur | Sijawal Junejo | Sinjhoro | Sita Road | Sobho Dero | Sukkur | Tando Allahyar | Tando Bagho | Tando Muhammad Khan | Tangwani | Thari Mirwah | Tharushah | Thatta | Thul | Ubauro | Umerkot | Warah | Garhi Khairo "; 

function print_state(state_id){
	// given the id of the <select> tag as function argument, it inserts <option> tags
	var option_str = document.getElementById(state_id);
	option_str.length=0;
	option_str.options[0] = new Option('Select State','');
	option_str.selectedIndex = 0;
	for (var i=0; i<state_arr.length; i++) {
		option_str.options[option_str.length] = new Option(state_arr[i],state_arr[i]);
	}
}

function print_city(city_id, city_index){
	var option_str = document.getElementById(city_id);
	option_str.length=0;	// Fixed by Julian Woods
	option_str.options[0] = new Option('Select City','');
	option_str.selectedIndex = 0;
	var city_arr = s_a[city_index].split("|");
	for (var i=0; i<city_arr.length; i++) {
		option_str.options[option_str.length] = new Option(city_arr[i],city_arr[i]);
	}
}