import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,  ActivityIndicator,
} from 'react-native';
import {
  Provider as PaperProvider,
  Text,
  Button,
  Card,
  Title,
  Paragraph,
} from 'react-native-paper';
import  {useRef,useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ImageViewer from '../Common/ImageViewer';
import {useFocusEffect} from '@react-navigation/native';

import {CallApi, BaseUrl} from '../Common/Functions';
import {useCallback} from 'react';

const Profile = ({navigation,route}) => {

  const { id } = route.params;
 // console.log(id)
  // State for image viewer
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [imageViewerVisible, setImageViewerVisible] = React.useState(false);

    const [loading, setLoading] = useState(false);
    const [data, setdata] = useState({});


    useFocusEffect(
      useCallback(() => {
        getSellerdatabyID()
        //  getAllCat();
      }, []),
    );

const getSellerdatabyID = async()=>{
  setLoading(true);

  const url = `${BaseUrl}/api/seller/getUserDataByID/${id}`;

  const body = {
    "location": {
        "latitude": 34.0522,
        "longitude":-118.2437
    }
}
  // console.log("body", body)

  const response = await CallApi(url, body, 'GET');
  
  

  console.log('Data:sellers byid', response);

  if (response?.status === "success") {
    setLoading(false);
    setdata(response?.data);
    // assuming response.data has your actual data
   
  } else {
    setLoading(false);
    ToastAndroid.show(response?.error, ToastAndroid.SHORT);
  }


}

  // Function to handle image press
  const handleImagePress = image => {
    setSelectedImage(image);
    setImageViewerVisible(true);
  };

  // Function to close image viewer
  const handleCloseImageViewer = () => {
    setImageViewerVisible(false);
  };

  // Sample data with local images
  const userData = {
    // To use your own profile picture:
    // 1. Add your image to the assets folder
    // 2. Replace 'profile.jpg' with your image filename
    profilePicture: require('../../../assets/profile.jpg'),
    name: 'Anshum',
    isVerified: true,
    meetupsCount: 99,
    bio: "Hi, I'm a friendly local passionate about sharing the best experiences in town. ",
    subcategories: ['Skiing', 'Shopping', 'Travel'],
    // To use your own media images:
    // 1. Add your images to the assets folder
    // 2. Replace the filenames below with your image filenames
    media: [
      require('../../../assets/skiing1.jpg'),
      require('../../../assets/skiing1.jpg'), // Now using skiing2.jpg instead of SVG
      require('../../../assets/skiing1.jpg'), // Using skiing1.jpg as fallback since hiking1.jpg is missing
      require('../../../assets/skiing1.jpg'), // Using skiing1.jpg as fallback since hiking2.jpg is missing
      require('../../../assets/skiing1.jpg'), // Using skiing1.jpg as fallback since snowboard1.jpg is missing
      require('../../../assets/skiing1.jpg'), // Using skiing1.jpg as fallback since snowboard2.jpg is missing
    ],
    price: 50,
  };

  const [subcategoryRatings, setSubcategoryRatings] = React.useState({});

  const handleSubcategoryPress = subcategory => {
    const rating = Math.floor(Math.random() * 5) + 1;
    setSubcategoryRatings(prev => ({...prev, [subcategory]: rating}));
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Header Section */}
          <View style={styles.header}>
            <View style={styles.profileContainer}>
              <Image
                source={{uri: data?.user?.profilePic}}
                style={styles.profilePicture}
              />
              {userData.isVerified && (
                <View style={styles.verificationBadgeContainer}>
                  <Icon name="star" size={24} color="#FFD700" />
                </View>
              )}
            </View>
            <View style={styles.headerCenter}>
              <Text style={styles.meetupsCount}>
                ✨ {userData.meetupsCount} Meetups
              </Text>
            </View>
            <Icon
              name="calendar"
              size={30}
              color="#4A90E2"
              onPress={() => alert('Calendar')}
            />
          </View>

          {/* Bio Section */}
          <Card style={styles.card}>
            <Card.Content>
              <Text style={styles.nameText}>{data?.user?.name}</Text>
              <Title style={styles.sectionTitle}>About Me</Title>
              <Paragraph style={styles.bio}>{userData.bio}</Paragraph>
              <View style={styles.subcategoryContainer}>
                {data?.user?.catList.map((subcategory, index) => (
                  <View key={index} style={styles.subcategoryItem}>
                    <Button
                      mode="outlined"
                      style={styles.subcategoryButton}
                      labelStyle={styles.subcategoryButtonText}
                      onPress={() => handleSubcategoryPress(subcategory)}>
                      {subcategory}
                    </Button>
                    {subcategoryRatings[subcategory] && (
                      <Text style={styles.ratingText}>
                        {'⭐'.repeat(subcategoryRatings[subcategory])}
                        {'·'.repeat(5 - subcategoryRatings[subcategory])}
                      </Text>
                    )}
                  </View>
                ))}
              </View>
            </Card.Content>
          </Card>

          {/* Media Section */}
          <Card style={styles.card}>
            <Card.Content>
              <Title style={styles.sectionTitle}>Media</Title>
              <View style={styles.mediaContainer}>
                {userData.media.map((media, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.mediaItemContainer}
                    onPress={() => handleImagePress(media)}>
                    <Image source={media} style={styles.mediaItem} />
                  </TouchableOpacity>
                ))}
              </View>
            </Card.Content>
          </Card>
        </ScrollView>

        {/* Booking Section */}
        <View style={styles.persistentBooking}>
          <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>Price per session</Text>
            <Text style={styles.priceAmount}>₹{data?.calendar?.categories[0]?.weekdaysPrice}</Text>
          </View>
          <View style={styles.bookingButtons}>
            <Button
              mode="outlined"
              onPress={() => alert('Add to Cart')}
              style={styles.addToCartButton}
              labelStyle={styles.addToCartButtonText}>
              Add to Cart
            </Button>
            <Button
              mode="contained"
              onPress={() => alert('Book')}
              style={styles.bookButton}
              labelStyle={styles.bookButtonText}>
              Book Now
            </Button>
          </View>
        </View>

        {/* Image Viewer Modal */}
        <ImageViewer
          visible={imageViewerVisible}
          imageSource={selectedImage}
          onClose={handleCloseImageViewer}
        />
      </View>

      {loading && (
                <View style={styles.loader}>
                  <ActivityIndicator size="large" color="#0000ff" />
                </View>
              )}
    </PaperProvider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContent: {
    paddingBottom: 80,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'white',
    elevation: 2,
  },
  profileContainer: {
    position: 'relative',
  },  loader: {
    position: 'absolute',
    zIndex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePicture: {
    width: 100,
    height: 100,
    padding:10,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#4A90E2',
  },
  verificationBadgeContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 4,
    elevation: 2,
  },
  headerCenter: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 16,
  },
  meetupsCount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  card: {
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 4,
    borderRadius: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C3E50',
  },
  bio: {
    fontSize: 16,
    lineHeight: 24,
    color: '#34495E',
    marginVertical: 8,
  },
  subcategoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 16,
  },
  subcategoryItem: {
    marginRight: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  subcategoryButton: {
    borderColor: '#4A90E2',
    borderRadius: 20,
  },
  subcategoryButtonText: {
    color: '#4A90E2',
  },
  ratingText: {
    marginTop: 4,
    fontSize: 12,
  },
  nameText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginBottom: 12,
    textAlign: 'center',
  },
  mediaContainer: {
    marginTop: 16,
    flexDirection: 'column',
  },
  mediaItemContainer: {
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 2,
    width: '100%',
  },
  mediaItem: {
    width: '100%',
    height: 300,
    borderRadius: 8,
  },
  persistentBooking: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    elevation: 8,
  },
  priceContainer: {
    marginBottom: 12,
  },
  priceLabel: {
    fontSize: 14,
    color: '#666',
  },
  priceAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  bookingButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  addToCartButton: {
    flex: 1,
    borderColor: '#4A90E2',
    borderRadius: 8,
  },
  addToCartButtonText: {
    color: '#4A90E2',
  },
  bookButton: {
    flex: 1,
    backgroundColor: '#4A90E2',
    borderRadius: 8,
  },
  bookButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Profile;
