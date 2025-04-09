import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Earth, House, User, MessageCircle } from 'lucide-react-native';
import { useRouter } from 'expo-router';

export default function MapScreen() {
  const router = useRouter();

  const handleNavigation = (route: string) => {
    router.push(`/(tabs)/${route}`);
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/images/Map page (2).png')}
        style={styles.backgroundImage}
      />
      
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.matchInfo}>
            <Text style={styles.matchTitle}>Al-Hilal <Text style={styles.score}>3</Text> v <Text style={styles.score}>1</Text> Al-nasser</Text>
            <Text style={styles.venue}>Al-Awwal Park</Text>
          </View>
        </View>

        <View style={styles.mapContainer}>
        </View>

        <TouchableOpacity style={styles.takeSeatButton}>
          <Text style={styles.buttonText}>Take me to my seat</Text>
        </TouchableOpacity>

        <View style={styles.sideButtons}>
          <TouchableOpacity style={[styles.sideButton, styles.activeButton]}>
            <Earth size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.sideButton}
            onPress={() => router.push('/(tabs)')}>
            <House size={24} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.sideButton}
            onPress={() => handleNavigation('profile')}>
            <User size={24} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.sideButton}>
            <MessageCircle size={24} color="#666" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
content: {
  flex: 1,
},
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  matchInfo: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    backdropFilter: 'blur(10px)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
  matchTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  score: {
    color: '#6C63FF',
  },
  venue: {
    fontSize: 14,
    color: '#666666',
    marginTop: 4,
  },
  mapContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  mapImage: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  takeSeatButton: {
    position: 'absolute',
    bottom: 40,
    left: '50%',
    transform: [{ translateX: -93.5 }],
    width: 187,
    height: 57,
    backgroundColor: '#6C63FF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  sideButtons: {
    position: 'absolute',
    right: 20,
    bottom: 120,
    gap: 10,
  },
  sideButton: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  activeButton: {
    backgroundColor: '#FFE974',
  },
});