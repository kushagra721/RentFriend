import React, {useState, useRef} from 'react';
import { SafeAreaView, Text, View, Image, Dimensions, StyleSheet, ScrollView, TouchableOpacity,StatusBar  } from "react-native";
import { Button, TextInput, Checkbox, Chip, Card, RadioButton,Divider  } from 'react-native-paper';




const Privacy = ({navigation}) => {


  return (
    
    <SafeAreaView style={[styles.container, styles.bgWhite]}>
       
            
  <Text style={styles.upperhead}>Privacy Policy</Text>
      
        <ScrollView>
       <View style={styles.pad20}>
      
    <Text style={styles.greyTxt}>Welcome to Service Provider's privacy policy (“ Privacy Policy ” or “ Policy ”).</Text>
     
    <Text style={styles.greyTxt}> Service Provider  and its affiliates (collectively, “ Service Provider ”, “ we ” or “ us ”) are engaged in the business of providing web-based solutions to facilitate connections between customers that seek specific services and service professionals that offer these services. This Policy outlines our practices in relation to the collection, storage, usage, processing, and disclosure of personal data that you have consented to to share with us when you access, use, or otherwise interact with our website available at  Service Provider  or mobile application 'Service Provider' (collectively, “ Platform ”) or avail products or services that Service Provider offers you on or through the Platform (collectively, the “ Services ”).In this Policy, the services offered to you by service professionals on or through the Platform are referred to as “ Professional Services ”.</Text>

    <Text style={styles.greyTxt}>At Service Provider, we are committed to protecting your personal data and respecting your privacy. In order to provide you with access to the Services or the Professional Services, we have to collect and otherwise process certain data about you. This Policy explains how we process and use personal data about you.</Text>

    <Text style={styles.greyTxt}>Please note that unless specifically defined in this Policy, capitalised terms shall have the same meaning ascribed to them in our Terms and Conditions, available at https://www.urbancompany.com/terms (“ Terms ”). Please read this Policy in consonance with the Terms.</Text>

    <Text style={styles.greyTxt}>By using the Services, you confirm that you have read and agree to be bound by this Policy and consent to the processing activities described under this Policy.</Text>

    <Text style={styles.greyTxt}>Please refer to Section 1 to understand how the terms of this Policy apply to you.</Text>
     
    <Text style={styles.greyTxt}> 1. BACKGROUND AND KEY INFORMATION </Text>

    <Text style={styles.greyTxt}>(a)  How this Policy applies :</Text>

    <Text style={styles.greyTxt}>This Policy applies to individuals who access or use the Services or otherwise avail the Professional Services. For the avoidance of doubt, references to “ you ” across this Policy are to an end user that uses the Platform.</Text>

    <Text style={styles.greyTxt}>By using the Platform, you consent to the collection, storage, usage, and disclosure of your personal data, as described in and collected by us in accordance with this Policy.</Text>

    <Text style={styles.greyTxt}>(b)  Review and Updates :</Text>

    <Text style={styles.greyTxt}>We regularly review and update our Privacy Policy, and we request you to regularly review this Policy. It is important that the personal data we hold about you is accurate and current. Please let us know if your personal data changes during your relationship with us.</Text>

    <Text style={styles.greyTxt}>(c)  Third-Party Services :</Text>

    <Text style={styles.greyTxt}>The Platform may include links to third-party websites, plug-ins, services, and applications (“ Third-Party Services ”). Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We neither control nor endorse these Third-Party Services and are not responsible for their privacy statements. When you leave the Platform or access third-party links through the Platform, we encourage you to read the privacy policy of such third-party service providers.</Text>
     
    <Text style={styles.greyTxt}> 2. PERSONAL DATA THAT WE COLLECT </Text>

    <Text style={styles.greyTxt}>(a) We collect different types of personal data about you. This includes, but is not limited to:</Text>

    <Text style={styles.greyTxt}>(i)  Contact Data , such as your mailing or home address, location, email addresses, and mobile numbers.</Text>

    <Text style={styles.greyTxt}>(ii)  Identity and Profile Data , such as your name, username or similar identifiers, photographs, and gender.</Text>

    <Text style={styles.greyTxt}>(iii)  Marketing and Communications Data , such as your address, email address, information posted in service requests, offers, wants, feedback, comments, pictures and discussions in our blog and chat boxes, responses to user surveys and polls, your preferences in receiving marketing communications from us and our third parties, and your communication preferences. We also collect your chat and call records when you communicate with service professionals through the Platform.</Text>

    <Text style={styles.greyTxt}>(iv)  Technical Data , which includes your IP address, browser type, internet service provider, details of operating system, access time, page views, device ID, device type, frequency of visiting our website and use of the Platform , website and mobile application activity, clicks, date and time stamps, location data, and other technology on the devices that you use to access the Platform.</Text>

    <Text style={styles.greyTxt}>(v)  Transaction Data , such as details of the Services or Professional Services you have availed, a limited portion of your credit or debit card details for tracking transactions that are provided to us by payment processors, and UPI IDs for processing payments.</Text>

    <Text style={styles.greyTxt}>(vi)  Usage Data , which includes information about how you use the Services and Professional Services, your activity on the Platform, booking history, user taps and clicks, user interests, time spent on the Platform, details about user journey on the mobile application, and page views.</Text>

    <Text style={styles.greyTxt}>(b) We also collect, use, and share aggregated data such as statistical or demographic data for any purpose. Aggregated data could be derived from your personal data but is not considered personal data under law as it does not directly or indirectly reveal your identity. However, if we combine or connect aggregated data with your personal data so that it can directly or indirectly identify you, we treat the combined data as personal data which will be used in accordance with this Policy.</Text>

    <Text style={styles.greyTxt}>(c)  What happens if I refuse to provide my personal data? </Text>

    <Text style={styles.greyTxt}>Where we need to collect personal data by law, or under the terms of a contract (such as the Terms), and you fail to provide that data when requested, we may not be able to perform the contract (for example, to provide you with the Services). In this case, we may have to cancel or limit your access to the Services.</Text>
     
    <Text style={styles.greyTxt}> 3. HOW DO WE COLLECT PERSONAL DATA? </Text>

    <Text style={styles.greyTxt}>We use different methods to collect personal data from and about you including through:</Text>

    <Text style={styles.greyTxt}>(a)  Direct Interactions.  You provide us your personal data when you interact with us. This includes personal data you provide when you:</Text>


    <Text style={styles.greyTxt}>(i) create an account or profile with us;</Text>

    <Text style={styles.greyTxt}>(ii) use our Services or carry out other activities in connection with the Services;</Text>

    <Text style={styles.greyTxt}>(iii) enter a promotion, user poll, or online surveys;</Text>

    <Text style={styles.greyTxt}>(iv) request marketing communications to be sent to you; or</Text>

    <Text style={styles.greyTxt}>(v) report a problem with the Platform and/or our Services, give us feedback or contact us.</Text>

    <Text style={styles.greyTxt}>(b)  Automated technologies or interactions.  Each time you visit the Platform or use the Services, we will automatically collect Technical Data about your equipment, browsing actions, and patterns. We collect this personal data by using cookies, web beacons, pixel tags, server logs, and other similar technologies. We may also receive Technical Data about you if you visit other websites or apps that employ our cookies.</Text>

    <Text style={styles.greyTxt}>(c)  Third parties or publicly available sources.  We will receive personal data about you from various third parties:</Text>

    <Text style={styles.greyTxt}>(i) Technical data from analytics providers such as Facebook and advertising networks;</Text>

    <Text style={styles.greyTxt}>(ii) Identity and profile-related Data and Contact Data from service professionals, publicly available sources, etc.;</Text>

    <Text style={styles.greyTxt}>(iii) Personal data about you from our affiliate entities.</Text>
     
    <Text style={styles.greyTxt}> 4. HOW DO WE USE YOUR PERSONAL DATA? </Text>

    <Text style={styles.greyTxt}>(a) We will only use your personal data when the law allows us to. Most commonly, we will use your personal data where we need to provide you with the Services, enable you to use the Professional Services, or where we need to comply with a legal obligation. We use your personal data for the following purposes:</Text>

    <Text style={styles.greyTxt}>(i) to verify your identity to register you as a user, and create your user account with us on the Platform;</Text>

    <Text style={styles.greyTxt}>(ii) to provide the Services to you;</Text>
    
    <Text style={styles.greyTxt}>(iii) to enable the provision of Professional Services to you;</Text>

    <Text style={styles.greyTxt}>(iv) to monitor trends and personalise your experience;</Text>

    <Text style={styles.greyTxt}>(v) to improve the functionality of our Services based on the information and feedback we receive from you;</Text>
    
    <Text style={styles.greyTxt}>(vi) to improve customer service to effectively respond to your Service requests and support needs;</Text>
    <Text style={styles.greyTxt}>(vii) to track transactions and process payments;</Text>
    <Text style={styles.greyTxt}>(viii) to send periodic notifications to manage our relationship with you including to notify you of changes to the Services, send you information and updates pertaining to the Services you have availed, and to receive occasional company news and updates related to us or the Services;</Text>
    <Text style={styles.greyTxt}>(ix) to assist with the facilitation of the Professional Services offered to you, including to send you information and updates about the Professional Services you have availed;</Text>
    <Text style={styles.greyTxt}>(x) to market and advertise the Services to you;</Text>
    <Text style={styles.greyTxt}>(xi) to comply with legal obligations;</Text>
    <Text style={styles.greyTxt}>(xii) to administer and protect our business and the Services , including for troubleshooting, data analysis, system testing, and performing internal operations;</Text>
    <Text style={styles.greyTxt}>(xiii) to improve our business and delivery models;</Text>
    <Text style={styles.greyTxt}>(xiv) to perform our obligations that arise out of the arrangement we are about to enter or have entered with you;</Text>
    <Text style={styles.greyTxt}>(xv) to enforce our Terms; and</Text>
    <Text style={styles.greyTxt}>(xvi) to respond to court orders, establish or exercise our legal rights, or defend ourselves against legal claims.</Text>
    <Text style={styles.greyTxt}>(b) You agree and acknowledge that by using our Services and creating an account with us on the Platform, you authorise us, our service professionals, associate partners, and affiliates to contact you via email, phone, or otherwise. This is to provide the Services to you and ensure that you are aware of all the features of the Services and for related purposes.</Text>
    <Text style={styles.greyTxt}>(c) You agree and acknowledge that any and all information pertaining to you, whether or not you directly provide it to us (via the Services or otherwise), including but not limited to personal correspondence such as emails, instructions from you, etc., may be collected, compiled, and shared by us in order to render the Services to you. This may include but not be limited to service professionals who provide or seek to provide you with Professional Services, vendors, social media companies, third-party service providers, storage providers, data analytics providers, consultants, lawyers, and auditors. We may also share this information with other entities in the Service Provider group in connection with the above-mentioned purposes.</Text>
    <Text style={styles.greyTxt}>(d) You agree and acknowledge that we may share data without your consent, when it is required by law or by any court or government agency or authority to disclose such information. Such disclosures are made in good faith and belief that it is reasonably necessary to do so for enforcing this Policy or the Terms, or in order to comply with any applicable laws and regulations.</Text>
     
    <Text style={styles.greyTxt}> 5. COOKIES </Text>
    <Text style={styles.greyTxt}>(a) Cookies are small files that a site or its service provider transfers to your device's hard drive through your web browser (if you permit it to) that enables the sites or service providers' systems to recognise your browser and capture and remember certain information.</Text>
    <Text style={styles.greyTxt}>(b) We use cookies to help us distinguish you from other users of the Platform, understand and save your preferences for future visits, keep track of advertisements and compile aggregate data about site traffic and site interaction so that we can offer you a seamless user experience. We may contact third-party service providers to assist us in better understanding our site visitors. These service providers are not permitted to use the information collected on our behalf except to help us conduct and improve our business.</Text>
    <Text style={styles.greyTxt}>(c) Additionally, you may encounter cookies or other similar devices on certain pages of the Platform that are placed by third parties. We do not control the use of cookies by third parties. If you send us personal correspondence, such as emails, or if other users or third parties send us correspondence about your activities or postings on the Platform, we may collect such information within a file specific to you.</Text>
     
    <Text style={styles.greyTxt}> 6. DISCLOSURES OF YOUR PERSONAL DATA </Text>
    <Text style={styles.greyTxt}>(a) We may share your personal data with third parties set out below for the purposes set out in Section 4:</Text>
    <Text style={styles.greyTxt}>(i) Service professionals to enable them to provide you with Professional Services;</Text>
    <Text style={styles.greyTxt}>(ii) Internal third parties, which are other companies within the Service Provider group of companies.</Text>
    <Text style={styles.greyTxt}>(iii) External third parties such as:</Text>
    <Text style={styles.greyTxt}>trusted third parties such as our associate partners, and service providers that provide services for us or on our behalf. This includes hosting and operating our Platform, providing marketing assistance, conducting our business, processing payments and transaction-related processes, transmitting content, and providing our Services to you;</Text>
    <Text style={styles.greyTxt}>analytic service providers and advertising networks that conduct web analytics for us to help us improve the Platform. These analytics providers may use cookies and other technologies to perform their services;</Text>
    <Text style={styles.greyTxt}>other registered users on our Platform upon your request or where you explicitly consent to such disclosure; and</Text>
    <Text style={styles.greyTxt}>regulators and other bodies, as required by law or regulation.</Text>
    <Text style={styles.greyTxt}>(b) We require all third parties to respect the security of your personal data and to treat it in accordance with the law. We do not allow our third-party service providers to use your personal data for their own purposes and only permit them to process your personal data for specified purposes and in accordance with our instructions.</Text>
     
    <Text style={styles.greyTxt}> 7. YOUR RIGHTS IN RELATION TO YOUR PERSONAL DATA </Text>
    <Text style={styles.greyTxt}>(a)  Access and Updating your Personal Data: You hereby warrant that all personal data that you provide us with is accurate, up-to-date, and true. When you use our Services, we make best efforts to provide you with the ability to access and correct inaccurate or deficient data, subject to any legal requirements. You can request Service Provider for a copy of your personal data by sending an email to privacy@urbancompany.com . Service Provider may take up to 7 (seven) working days respond to such request.</Text>
    <Text style={styles.greyTxt}>(b)  Opting-out of Marketing and Promotional Communications: When we send you marketing and promotional content through email, we make best efforts to provide you with the ability to opt-out of such communications by using the opt-out instructions provided in such emails. You understand and acknowledge that it may take us up to 10 (Ten) business days to give effect to your opt-out request. Please note that we may still send you emails about your user account or any Services you have requested or received from us.</Text>
     
    <Text style={styles.greyTxt}> 8. DELETION OF ACCOUNT AND PERSONAL DATA </Text>
    <Text style={styles.greyTxt}>(a) Notwithstanding anything contained in the Terms, you may delete your account as well as your personal data stored with Service Provider by sending an email to privacy@urbancompany.com . Service Provider may take up to 7 (seven) working days to process your request. Once your account is deleted, you will lose access to all Services. For avoidance of doubt, it is hereby clarified that all data with respect to transactions performed by you on the Platform will be retained in accordance with applicable law.</Text>
     
    <Text style={styles.greyTxt}> 9. TRANSFERS OF YOUR PERSONAL DATA </Text>
    <Text style={styles.greyTxt}>(a) We comply with applicable laws in respect of storage and transfers of personal data. As a part of your use of the Services, the information and personal data you provide to us may be transferred to and stored in countries other than the country you are based in. This may happen if any of our servers are from time to time located in a country other than the one you are based, or one of our vendors, partners, or service providers is located in a country other than one you are based in.</Text>
    <Text style={styles.greyTxt}>(b) By submitting your information and personal data to us, you agree to the transfer, storage, and processing of such information and personal data in the manner described above.</Text>
     
    <Text style={styles.greyTxt}> 10. DATA SECURITY </Text>
    <Text style={styles.greyTxt}>(a) We implement appropriate security measures and privacy-protective features on our Platform including encryption, password protection, call masking, and physical security measures to protect your personal data from unauthorised access and disclosure, and follow standards prescribed by applicable law.</Text>
    <Text style={styles.greyTxt}>(b) Where you have chosen a password that enables you to access certain parts of the Services or Professional Services, you are responsible for keeping this password secret and confidential. We will not be responsible for any unauthorised use of your information, or for any lost, stolen, or compromised passwords, or for any activity on your user account due to such unauthorised disclosure of your password. In the event your password has been compromised in any manner whatsoever, you should promptly notify us to enable us to initiate a change of password.</Text>
     
    <Text style={styles.greyTxt}> 11. DATA RETENTION </Text>
    <Text style={styles.greyTxt}>(a) You agree and acknowledge that your personal data will continue to be stored and retained by us for as long as necessary to fulfil our stated purpose(s) and for a reasonable period after the termination of your account on the Platform or access to the Services to comply with our legal rights and obligations.</Text>
    <Text style={styles.greyTxt}>(b) In some circumstances, we may aggregate your personal data (so that it can no longer be associated with you) for research or statistical purposes, in which case we may use this information indefinitely without further notice to you.</Text>
     
    <Text style={styles.greyTxt}> 12. BUSINESS TRANSITIONS </Text>
    <Text style={styles.greyTxt}>You are aware that in the event we go through a business transition, such as a merger, acquisition by another organisation, or sale of all or a portion of our assets, your personal data might be among the assets transferred.</Text>
     
    <Text style={styles.greyTxt}> 13. USER GENERATED CONTENT </Text>
    <Text style={styles.greyTxt}>We invite you to post content on our Platform, including your comments, feedback, pictures, or any other information that you would like to be made available on our Platform. Please note that such content will be available to all visitors to our Platform and may become public. We cannot prevent such information from being used in a manner that is contrary to this Policy, applicable laws, or your personal privacy, and we disclaim all liability (express or implied) in this regard. Further, you agree to comply with all applicable laws in relation to the content uploaded or otherwise shared by you on our Platform. You understand and acknowledge that you will be solely responsible for any information published by you on our Platform that violates applicable laws.</Text>
     
    <Text style={styles.greyTxt}> 14. UPDATES TO THIS POLICY </Text>
    <Text style={styles.greyTxt}>(a) We may occasionally update this Policy. If we make changes to this Policy, we will upload the revised policy on the Platform or share it with you through other means, such as email. To the extent permitted under applicable law, by using our Platform after such notice, you consent to updates made to this Policy.</Text>
    <Text style={styles.greyTxt}>(b) We encourage you to periodically review this Policy for the latest information on our privacy practices.</Text>
     

   </View>
        </ScrollView>
      
       <View style={styles.bottomView}>
        <Button icon="arrow-right" mode="contained" maxFontSizeMultiplier={70} onPress={() => {
        navigation.navigate("Schedule"); }} >
     Okay, Got It
     </Button>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    upperhead:{ backgroundColor:'#512da8', color:'#fff', height:55, fontSize:18, padding:15},
    pad20:{padding:20},
    container: {
        flex: 1,
        
    },
    Title:{fontSize:22},
    
    bottomView:{padding:15, borderTopColor:'#d3d3d3', borderTopWidth:1},
    greyTxt:{color:'#707070', fontSize:16, lineHeight:22, marginBottom:15}
});
export default Privacy ;