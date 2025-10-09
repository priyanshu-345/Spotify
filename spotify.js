console.log('Spotify Clone loaded');

// State
let songIndex = 0;
const songs = [
  // Original songs
  { songName: '295', album: '295', duration: '3:52', filePath: '1.mp3', coverPath: 'new/04.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'Aroma', album: 'Aroma', duration: '3:18', filePath: '2.mp3', coverPath: '2.jpg', artist: 'NCS', mood: 'boost', category: 'electronic' },
  { songName: 'Dil Nu', album: 'Dil', duration: '4:01', filePath: '3.mp3', coverPath: '3.jpg', artist: 'Romantic', mood: 'sad', category: 'romantic' },
  { songName: 'Calaboose', album: 'Bars', duration: '5:02', filePath: '4.mp3', coverPath: 'new/03.jpg', artist: 'Rap', mood: 'boost', category: 'rap' },
  { songName: 'Jhol', album: 'Punjabi Hits', duration: '4:38', filePath: '5.mp3', coverPath: '5.jpg', artist: 'Punjabi', mood: 'boost', category: 'punjabi' },
  { songName: 'Bekhayali', album: 'Kabir Singh', duration: '6:13', filePath: '6.mp3', coverPath: '6.jpg', artist: 'Sachet–Parampara', mood: 'sad', category: 'bollywood' },
  { songName: 'Sohneya', album: 'Kabir Singh', duration: '3:24', filePath: '7.mp3', coverPath: '7.jpg', artist: 'Sachet–Parampara', mood: 'sad', category: 'bollywood' },
  { songName: '0 to 100', album: 'Rap Drill', duration: '2:58', filePath: '8.mp3', coverPath: '8.jpg', artist: 'Rap', mood: 'boost', category: 'rap' },
  { songName: 'Pal Pal', album: 'Pal', duration: '3:45', filePath: '9.mp3', coverPath: '9.jpg', artist: 'Kishore Kumar', mood: 'sad', category: 'classic' },
  { songName: 'Siddhu Panjab', album: 'Sidhu Hits', duration: '3:37', filePath: '10.mp3', coverPath: 'new/03.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'Jailaan', album: 'Indie', duration: '2:29', filePath: '11.mp3', coverPath: '11.jpg', artist: 'Indie Artist', mood: 'sad', category: 'indie' },
  { songName: 'Aaj Bhi', album: 'Aaj Bhi', duration: '3:31', filePath: '12.mp3', coverPath: '12.jpg', artist: 'Vishal Mishra', mood: 'sad', category: 'indie' },
  
  // Songs from song folder - All Sidhu Moose Wala songs with his poster
  { songName: '0 to 100', album: 'Rap Collection', duration: '2:58', filePath: 'song/0 to 100 - (Raag.Fm).mp3', coverPath: 'new/03.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: '295', album: 'Sidhu Collection', duration: '3:52', filePath: 'song/295 - (Raag.Fm).mp3', coverPath: 'new/02.webp', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'Aroma', album: 'Electronic Mix', duration: '3:18', filePath: 'song/Aroma - (Raag.Fm).mp3', coverPath: 'new/04.jpg', artist: 'NCS', mood: 'boost', category: 'electronic' },
  { songName: 'Attach', album: 'Rap Hits', duration: '3:45', filePath: 'song/Attach - (Raag.Fm).mp3', coverPath: 'new/03.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'B And W (Black And White)', album: 'Hip Hop', duration: '4:12', filePath: 'song/B And W (Black And White) - (Raag.Fm).mp3', coverPath: 'new/04.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'Baapu (Yes I Am Student)', album: 'Punjabi Hits', duration: '3:28', filePath: 'song/Baapu (Yes I Am Student) - (Raag.Fm).mp3', coverPath: 'new/05.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'Bambeha Bole', album: 'Punjabi Collection', duration: '4:05', filePath: 'song/Bambeha Bole - (Raag.Fm).mp3', coverPath: 'new/06.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'Bitch Im Back', album: 'Rap Collection', duration: '3:15', filePath: 'song/Bitch Im Back - (Raag.Fm).mp3', coverPath: 'new/04.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'Bloodlust', album: 'Dark Rap', duration: '4:20', filePath: 'song/Bloodlust - (Raag.Fm).mp3', coverPath: 'new/08.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'Built Different', album: 'Rap Hits', duration: '3:35', filePath: 'song/Built Different - (Raag.Fm).mp3', coverPath: 'new/04.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'Burberry', album: 'Luxury Rap', duration: '3:42', filePath: 'song/Burberry - (Raag.Fm).mp3', coverPath: 'new/10.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'Calaboose', album: 'Sidhu Collection', duration: '5:02', filePath: 'song/Calaboose - (Raag.Fm).mp3', coverPath: 'new/11.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'Celebrity Killer', album: 'Rap Collection', duration: '3:55', filePath: 'song/Celebrity Killer - (Raag.Fm).mp3', coverPath: 'new/04.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'Challa', album: 'Punjabi Hits', duration: '4:18', filePath: 'song/Challa - (Raag.Fm).mp3', coverPath: 'new/main1.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'Chorni', album: 'Punjabi Collection', duration: '3:50', filePath: 'song/Chorni - (Raag.Fm).mp3', coverPath: 'new/12.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'Dear Mama', album: 'Emotional Rap', duration: '4:30', filePath: 'song/Dear Mama - (Raag.Fm).mp3', coverPath: 'new/8.jpg', artist: 'Sidhu Moose Wala', mood: 'sad', category: 'sidhu' },
  { songName: 'Doctor', album: 'Rap Hits', duration: '3:25', filePath: 'song/Doctor - (Raag.Fm).mp3', coverPath: 'new/00.webp', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'Drippy', album: 'Rap Collection', duration: '3:40', filePath: 'song/Drippy - (Raag.Fm).mp3', coverPath: 'new/04.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'Flop Song', album: 'Rap Collection', duration: '3:15', filePath: 'song/Flop Song - (Raag.Fm).mp3', coverPath: 'new/02.webp', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'Fuck Em All', album: 'Aggressive Rap', duration: '3:50', filePath: 'song/Fuck Em All - (Raag.Fm).mp3', coverPath: 'new/03.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'G Shit', album: 'Rap Hits', duration: '3:35', filePath: 'song/G Shit - (Raag.Fm).mp3', coverPath: 'new/04.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'Game', album: 'Rap Collection', duration: '4:10', filePath: 'song/Game - (Raag.Fm).mp3', coverPath: 'new/04.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'Goat(Moosetape)', album: 'Sidhu Collection', duration: '4:25', filePath: 'song/Goat(Moosetape) - (Raag.Fm).mp3', coverPath: 'new/04.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'Invincible', album: 'Rap Hits', duration: '3:45', filePath: 'song/Invincible - (Raag.Fm).mp3', coverPath: 'new/04.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'Jailaan (Moosa Jatt)', album: 'Sidhu Collection', duration: '2:29', filePath: 'song/Jailaan (Moosa Jatt) - (Raag.Fm).mp3', coverPath: 'new/04.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'Legend', album: 'Rap Collection', duration: '4:15', filePath: 'song/Legend - (Raag.Fm).mp3', coverPath: 'new/04.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'Levels', album: 'Rap Hits', duration: '3:30', filePath: 'song/Levels - (Raag.Fm).mp3', coverPath: 'new/04.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'Lock', album: 'Rap Collection', duration: '3:55', filePath: 'song/Lock - (Raag.Fm).mp3', coverPath: 'new/04.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'Love Sick', album: 'Emotional Rap', duration: '4:20', filePath: 'song/Love Sick - (Raag.Fm).mp3', coverPath: 'new/04.jpg', artist: 'Sidhu Moose Wala', mood: 'sad', category: 'sidhu' },
  { songName: 'Malwa Block', album: 'Sidhu Collection', duration: '3:37', filePath: 'song/Malwa Block - (Raag.Fm).mp3', coverPath: 'new/04.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'Me And My Girlfriend', album: 'Romantic Rap', duration: '4:05', filePath: 'song/Me And My Girlfriend - (Raag.Fm).mp3', coverPath: 'new/04.jpg', artist: 'Sidhu Moose Wala', mood: 'sad', category: 'sidhu' },
  { songName: 'Mehenge Ne Moti', album: 'Punjabi Hits', duration: '3:50', filePath: 'song/Mehenge Ne Moti - (Raag.Fm).mp3', coverPath: 'new/04.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'Never Fold', album: 'Rap Collection', duration: '3:40', filePath: 'song/Never Fold - (Raag.Fm).mp3', coverPath: 'new/04.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'Paapi', album: 'Punjabi Collection', duration: '4:15', filePath: 'song/Paapi - (Raag.Fm).mp3', coverPath: 'new/04.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'Panjab', album: 'Sidhu Collection', duration: '3:37', filePath: 'song/Panjab - (Raag.Fm).mp3', coverPath: 'new/04.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'PB 65 Mohali Da', album: 'Punjabi Hits', duration: '3:45', filePath: 'song/PB 65 Mohali Da - (Raag.Fm).mp3', coverPath: 'new/04.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'Power', album: 'Rap Hits', duration: '3:25', filePath: 'song/Power - (Raag.Fm).mp3', coverPath: 'new/04.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'Regret', album: 'Emotional Rap', duration: '4:30', filePath: 'song/Regret - (Raag.Fm).mp3', coverPath: 'new/04.jpg', artist: 'Sidhu Moose Wala', mood: 'sad', category: 'sidhu' },
  { songName: 'Sanjay Dutt', album: 'Rap Collection', duration: '3:50', filePath: 'song/Sanjay Dutt - (Raag.Fm).mp3', coverPath: 'new/04.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'Sanju(Sanjay Dutt)', album: 'Rap Collection', duration: '3:45', filePath: 'song/Sanju(Sanjay Dutt) - (Raag.Fm).mp3', coverPath: 'new/04.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'Scapegoat', album: 'Rap Hits', duration: '3:35', filePath: 'song/Scapegoat - (Raag.Fm).mp3', coverPath: 'new/04.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'Signed To God', album: 'Rap Collection', duration: '4:10', filePath: 'song/Signed To God - (Raag.Fm).mp3', coverPath: 'new/04.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'SYL', album: 'Rap Hits', duration: '3:20', filePath: 'song/SYL - (Raag.Fm).mp3', coverPath: 'new/04.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'The Last Ride', album: 'Rap Collection', duration: '4:25', filePath: 'song/The Last Ride - (Raag.Fm).mp3', coverPath: 'new/04.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'These Days', album: 'Rap Hits', duration: '3:40', filePath: 'song/These Days - (Raag.Fm).mp3', coverPath: 'new/04.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'Watch Out', album: 'Rap Collection', duration: '3:30', filePath: 'song/Watch Out - (Raag.Fm).mp3', coverPath:'new/04.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'Wiseman', album: 'Rap Hits', duration: '3:55', filePath: 'song/Wiseman - (Raag.Fm).mp3', coverPath: 'new/04.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  { songName: 'Yaariyaan', album: 'Punjabi Collection', duration: '4:20', filePath: 'song/Yaariyaan - (Raag.Fm).mp3', coverPath: 'new/04.jpg', artist: 'Sidhu Moose Wala', mood: 'boost', category: 'sidhu' },
  
  // P-POP CULTURE songs
  { songName: '7.7 Magnitude', album: 'P-POP CULTURE', duration: '3:45', filePath: 'P-POP CULTURE  (320 KBPS)/7.7 Magnitude.mp3', coverPath: 'new/03.jpg', artist: 'P-POP Artist', mood: 'boost', category: 'ppop' },
  { songName: 'Boyfriend', album: 'P-POP CULTURE', duration: '3:20', filePath: 'P-POP CULTURE  (320 KBPS)/Boyfriend.mp3', coverPath:'new/03.jpg', artist: 'P-POP Artist', mood: 'boost', category: 'ppop' },
  { songName: 'Daytona', album: 'P-POP CULTURE', duration: '3:55', filePath: 'P-POP CULTURE  (320 KBPS)/Daytona.mp3', coverPath: 'new/03.jpg', artist: 'P-POP Artist', mood: 'boost', category: 'ppop' },
  { songName: 'Flip-Side (Sandys Interlude)', album: 'P-POP CULTURE', duration: '2:30', filePath: 'P-POP CULTURE  (320 KBPS)/Flip-Side (Sandys Interlude).mp3', coverPath: 'new/04.jpg', artist: 'P-POP Artist', mood: 'sad', category: 'ppop' },
  { songName: 'For A Reason', album: 'P-POP CULTURE', duration: '3:40', filePath: 'P-POP CULTURE  (320 KBPS)/For A Reason.mp3', coverPath: 'new/03.jpg', artist: 'P-POP Artist', mood: 'boost', category: 'ppop' },
  { songName: 'HIM..', album: 'P-POP CULTURE', duration: '3:15', filePath: 'P-POP CULTURE  (320 KBPS)/HIM..mp3', coverPath: 'new/03.jpg', artist: 'P-POP Artist', mood: 'boost', category: 'ppop' },
  { songName: 'I Really Do....', album: 'P-POP CULTURE', duration: '3:25', filePath: 'P-POP CULTURE  (320 KBPS)/I Really Do....mp3', coverPath: 'new/03.jpg', artist: 'P-POP Artist', mood: 'sad', category: 'ppop' },
  { songName: 'Ima Do My Thiiing', album: 'P-POP CULTURE', duration: '3:50', filePath: 'P-POP CULTURE  (320 KBPS)/Ima Do My Thiiing.mp3', coverPath: 'new/03.jpg', artist: 'P-POP Artist', mood: 'boost', category: 'ppop' },
  { songName: 'MF Gabhru!', album: 'P-POP CULTURE', duration: '3:35', filePath: 'P-POP CULTURE  (320 KBPS)/MF Gabhru!.mp3', coverPath: 'new/03.jpg', artist: 'P-POP Artist', mood: 'boost', category: 'ppop' },
  { songName: 'P-POP CULTURE', album: 'P-POP CULTURE', duration: '4:10', filePath: 'P-POP CULTURE  (320 KBPS)/P-POP CULTURE.mp3', coverPath: 'new/03.jpg', artist: 'P-POP Artist', mood: 'boost', category: 'ppop' },
  { songName: 'Youre U Tho', album: 'P-POP CULTURE', duration: '3:30', filePath: 'P-POP CULTURE  (320 KBPS)/Youre U Tho.mp3', coverPath: 'new/03.jpg', artist: 'P-POP Artist', mood: 'boost', category: 'ppop' }
];

// Elements
const masterPlayBtn = document.getElementById('masterPlay');
const masterPlayIcon = document.getElementById('masterPlayIcon');
const myProgressBar = document.getElementById('myProgressBar');
const gif = document.getElementById('gif');
const masterSongName = document.getElementById('masterSongName');
const masterArtistName = document.getElementById('masterArtistName');
const currentTimeEl = document.getElementById('currentTime');
const totalTimeEl = document.getElementById('totalTime');

// Control buttons
const btnPrev = document.getElementById('previous');
const btnNext = document.getElementById('next');
const btnShuffle = document.getElementById('btnShuffle');
const btnRepeat = document.getElementById('btnRepeat');
const repeatIcon = document.getElementById('repeatIcon');
const btnLike = document.getElementById('btnLike');
const likeIcon = document.getElementById('likeIcon');
const volumeBar = document.getElementById('volumeBar');
const volumeBtn = document.getElementById('volumeBtn');
const volumeIcon = document.getElementById('volumeIcon');

// Grid elements
const artistGrid = document.getElementById('artistGrid');
const songGrid = document.getElementById('songGrid');
const playlistGrid = document.getElementById('playlistGrid');
const playlistDetail = document.getElementById('playlistDetail');
const likedGrid = document.getElementById('likedGrid');
const searchInput = document.getElementById('searchInput');

// Audio
const audio = new Audio(songs[0].filePath);
audio.volume = 0.8;

// Player modes & likes
let isShuffle = false; // shuffle off
let repeatMode = 'all';
let liked = new Set(JSON.parse(localStorage.getItem('likedSongs') || '[]'));

// Helpers
function setPlayingUI(isPlaying) {
  if (masterPlayIcon) {
    if (isPlaying) {
      masterPlayIcon.classList.remove('fa-circle-play');
      masterPlayIcon.classList.add('fa-circle-pause');
      gif && (gif.style.opacity = 1);
      startListeningTimer();
    } else {
      masterPlayIcon.classList.remove('fa-circle-pause');
      masterPlayIcon.classList.add('fa-circle-play');
      gif && (gif.style.opacity = 0);
      stopListeningTimer();
    }
  }
}

function formatTime(seconds) {
  if (!isFinite(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}
function updateLikeUI() {
  const currId = songIndex;
  if (liked.has(currId)) {
    likeIcon.classList.remove('fa-regular');
    likeIcon.classList.add('fa-solid');
  } else {
    likeIcon.classList.remove('fa-solid');
    likeIcon.classList.add('fa-regular');
  }
}

function saveLikes() {
  localStorage.setItem('likedSongs', JSON.stringify([...liked]));
}

function clearNowPlayingUI() {
  document.querySelectorAll('.playing').forEach(el => el.classList.remove('playing'));
}

function updateNowPlayingUI() {
  clearNowPlayingUI();
  // highlight any song-row or card that corresponds to current songIndex
  document.querySelectorAll(`[data-index="${songIndex}"]`).forEach(btn => {
    const row = btn.closest('.song-row');
    if (row) row.classList.add('playing');
    const card = btn.closest('.card');
    if (card) card.classList.add('playing');
  });
}

function renderMoodPlaylists() {
  if (!playlistGrid) return;
  playlistGrid.innerHTML = '';
  
  // Create category-based playlists
  const categories = [
    { key: 'sidhu', title: 'Sidhu Moose Wala Collection', icon: 'fa-music', color: '#1db954' },
    { key: 'ppop', title: 'P-POP CULTURE', icon: 'fa-fire', color: '#ff4757' },
    { key: 'bollywood', title: 'Bollywood Hits', icon: 'fa-film', color: '#45b7d1' },
    { key: 'electronic', title: 'Electronic Music', icon: 'fa-headphones', color: '#96ceb4' },
    { key: 'romantic', title: 'Romantic Songs', icon: 'fa-heart', color: '#feca57' },
    { key: 'indie', title: 'Indie Collection', icon: 'fa-guitar', color: '#ff9ff3' },
    { key: 'classic', title: 'Classic Hits', icon: 'fa-star', color: '#54a0ff' }
  ];
  
  categories.forEach(cat => {
    const categorySongs = songs.filter(s => s.category === cat.key);
    if (categorySongs.length === 0) return;
    
    const firstSong = categorySongs[0];
    const firstIdx = songs.indexOf(firstSong);
    
    const card = document.createElement('div');
    card.className = 'card playlist-card';
    card.setAttribute('data-category', cat.key);
    card.style.borderLeft = `4px solid ${cat.color}`;
    
    card.innerHTML = `
      <div class="playlist-cover">
        <img src="${firstSong.coverPath}" alt="${cat.title}" class="cover" />
        <div class="playlist-overlay">
          <button class="play-btn large" data-index="${firstIdx}">
            <i class="fa-solid fa-circle-play"></i>
          </button>
        </div>
      </div>
      <div class="playlist-info">
        <div class="title">${cat.title}</div>
        <div class="subtitle">${categorySongs.length} songs</div>
        <div class="playlist-actions">
          <button class="icon-btn open-category" data-category="${cat.key}" title="View All">
            <i class="fa-solid fa-list"></i>
          </button>
          <button class="icon-btn shuffle-category" data-category="${cat.key}" title="Shuffle">
            <i class="fa-solid fa-shuffle"></i>
          </button>
        </div>
      </div>
    `;
    playlistGrid.appendChild(card);
  });
}

function openCategoryPlaylist(category) {
  const categorySongs = songs.filter(s => s.category === category);
  if (!categorySongs.length || !playlistDetail) return;
  
  const firstSong = categorySongs[0];
  const firstIdx = songs.indexOf(firstSong);
  
  playlistDetail.innerHTML = '';
  playlistDetail.classList.remove('hidden');
  
  // Special background for P-POP CULTURE
  let headerBgStyle = "background: linear-gradient(135deg, rgba(29, 185, 84, 0.3), rgba(0, 0, 0, 0.8))";
  let headerContent = `
    <img src="${firstSong.coverPath}" alt="${category}" class="playlist-cover-img">
    <div class="playlist-meta">
      <div class="playlist-type">PLAYLIST</div>
      <div class="playlist-title">${getCategoryTitle(category)}</div>
      <div class="playlist-description">${categorySongs.length} songs</div>
      <div class="playlist-actions-header">
        <button class="play-all-btn" data-category="${category}">
          <i class="fa-solid fa-circle-play"></i>
          <span>Play All</span>
        </button>
        <button class="shuffle-all-btn" data-category="${category}">
          <i class="fa-solid fa-shuffle"></i>
          <span>Shuffle</span>
        </button>
      </div>
    </div>
  `;
  
  if (category === 'ppop') {
    headerBgStyle = "background: linear-gradient(135deg, rgba(255, 71, 87, 0.4), rgba(0, 0, 0, 0.8))";
    headerContent = `
      <video class="playlist-bg-video" autoplay muted loop>
        <source src="a.mp4" type="video/mp4">
      </video>
      <div class="playlist-video-overlay"></div>
      <img src="${firstSong.coverPath}" alt="${category}" class="playlist-cover-img">
      <div class="playlist-meta">
        <div class="playlist-type">PLAYLIST</div>
        <div class="playlist-title">${getCategoryTitle(category)}</div>
        <div class="playlist-description">${categorySongs.length} songs</div>
        <div class="playlist-actions-header">
          <button class="play-all-btn" data-category="${category}">
            <i class="fa-solid fa-circle-play"></i>
            <span>Play All</span>
          </button>
          <button class="shuffle-all-btn" data-category="${category}">
            <i class="fa-solid fa-shuffle"></i>
            <span>Shuffle</span>
          </button>
        </div>
      </div>
    `;
  }
  
  // Create playlist header
  const header = document.createElement('div');
  header.className = 'playlist-header';
  header.innerHTML = `
    <div class="playlist-header-bg" style="${headerBgStyle}">
      ${headerContent}
    </div>
  `;
  
  // Add video section to playlist
  const videoSection = document.createElement('div');
  videoSection.className = 'playlist-video-section';
  videoSection.innerHTML = `
    <h3>Playlist Videos</h3>
    <div class="playlist-video-grid">
      <div class="playlist-video-card">
        <video class="playlist-video" autoplay muted loop>
          <source src="a.mp4" type="video/mp4">
        </video>
        <div class="playlist-video-overlay">
          <div class="playlist-video-title">${getCategoryTitle(category)} Mix</div>
          <div class="playlist-video-description">Best of ${getCategoryTitle(category)}</div>
        </div>
      </div>
      <div class="playlist-video-card">
        <video class="playlist-video" autoplay muted loop>
          <source src="c.mp4" type="video/mp4">
        </video>
        <div class="playlist-video-overlay">
          <div class="playlist-video-title">${getCategoryTitle(category)} Hits</div>
          <div class="playlist-video-description">Top Songs</div>
        </div>
      </div>
      <div class="playlist-video-card">
        <video class="playlist-video" autoplay muted loop>
          <source src="a.mp4" type="video/mp4">
        </video>
        <div class="playlist-video-overlay">
          <div class="playlist-video-title">${getCategoryTitle(category)} Collection</div>
          <div class="playlist-video-description">Full Album</div>
        </div>
      </div>
    </div>
  `;
  
  // Create songs grid
  const songsGrid = document.createElement('div');
  songsGrid.className = 'playlist-songs-grid';
  
  categorySongs.forEach((song, i) => {
    const songIdx = songs.indexOf(song);
    const songCard = document.createElement('div');
    songCard.className = 'playlist-song-card';
    songCard.innerHTML = `
      <div class="song-card-cover">
        <img src="${song.coverPath}" alt="${song.songName}" class="song-cover">
        <div class="song-overlay">
          <button class="play-btn" data-index="${songIdx}">
            <i class="fa-solid fa-circle-play"></i>
          </button>
        </div>
      </div>
      <div class="song-card-info">
        <div class="song-name">${song.songName}</div>
        <div class="song-artist">${song.artist}</div>
        <div class="song-album">${song.album}</div>
        <div class="song-duration">${song.duration}</div>
      </div>
    `;
    songsGrid.appendChild(songCard);
  });
  
  playlistDetail.appendChild(header);
  playlistDetail.appendChild(videoSection);
  playlistDetail.appendChild(songsGrid);
  showView('playlists');
}

function getCategoryTitle(category) {
  const titles = {
    'sidhu': 'Sidhu Moose Wala Collection',
    'ppop': 'P-POP CULTURE',
    'bollywood': 'Bollywood Hits',
    'electronic': 'Electronic Music',
    'romantic': 'Romantic Songs',
    'indie': 'Indie Collection',
    'classic': 'Classic Hits'
  };
  return titles[category] || category;
}

function loadSong(index) {
  songIndex = index;
  const s = songs[songIndex];
  audio.src = s.filePath;
  masterSongName.textContent = s.songName;
  masterArtistName.textContent = s.artist || 'Unknown Artist';
  updateLikeUI();
  updateNowPlayingUI();
}

async function playCurrent() {
  try {
    await audio.play();
    setPlayingUI(true);
  } catch (e) {
    console.warn('Playback failed:', e);
  }
}

function pauseCurrent() {
  audio.pause();
  setPlayingUI(false);
}

function togglePlay() {
  if (audio.paused) playCurrent(); else pauseCurrent();
}

function nextSong() {
  let next;
  if (isShuffle) {
    if (songs.length <= 1) next = songIndex; else {
      do { next = Math.floor(Math.random() * songs.length); } while (next === songIndex);
    }
  } else {
    next = (songIndex + 1) % songs.length;
  }
  loadSong(next);
  audio.currentTime = 0;
  playCurrent();
}

function prevSong() {
  const prev = (songIndex - 1 + songs.length) % songs.length;
  loadSong(prev);
  audio.currentTime = 0;
  playCurrent();
}

// Build artist map from songs
const artistMap = songs.reduce((acc, s, idx) => {
  const key = s.artist || 'Unknown';
  if (!acc[key]) acc[key] = { name: key, cover: s.coverPath, songIndexes: [] };
  acc[key].songIndexes.push(idx);
  return acc;
}, {});
const artists = Object.values(artistMap);

// Renderers
function renderSongs(list, container = songGrid) {
  if (!container) return;
  container.innerHTML = '';
  list.forEach((s) => {
    const originalIndex = songs.indexOf(s);
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${s.coverPath}" alt="${s.songName}" class="cover" />
      <div class="title">${s.songName}</div>
      <div class="subtitle">${s.artist || 'Unknown'}</div>
      <div class="actions">
        <button class="play-btn" data-index="${originalIndex}"><i class="fa-solid fa-circle-play"></i></button>
      </div>
    `;
    container.appendChild(card);
  });
}

function renderArtists() {
  if (!artistGrid) return;
  artistGrid.innerHTML = '';
  artists.forEach(a => {
    const firstSongIdx = a.songIndexes[0];
    const card = document.createElement('div');
    card.className = 'card artist-card';
    card.setAttribute('data-artist', a.name);
    const previewItems = a.songIndexes.slice(0, 3).map(i => `<li>${songs[i].songName}</li>`).join('');
    card.innerHTML = `
      <div class="artist-cover">
      <img src="${songs[firstSongIdx].coverPath}" alt="${a.name}" class="cover" />
        <div class="artist-overlay">
          <button class="play-btn large" data-index="${firstSongIdx}">
            <i class="fa-solid fa-circle-play"></i>
          </button>
        </div>
      </div>
      <div class="artist-info">
      <div class="title">${a.name}</div>
        <div class="subtitle">${a.songIndexes.length} songs</div>
      <ul class="preview">${previewItems}</ul>
      <div class="actions">
          <button class="icon-btn open-playlist" data-artist="${a.name}" title="View All Songs">
            <i class="fa-solid fa-list"></i>
          </button>
          <button class="icon-btn shuffle-artist" data-artist="${a.name}" title="Shuffle">
            <i class="fa-solid fa-shuffle"></i>
          </button>
        </div>
      </div>
    `;
    artistGrid.appendChild(card);
  });
}

function openArtistPlaylist(artistName) {
  const a = artists.find(x => x.name === artistName);
  if (!a || !playlistDetail) return;
  const firstSongIdx = a.songIndexes[0];
  playlistDetail.innerHTML = '';
  const header = document.createElement('div');
  header.className = 'playlist-header';
  header.innerHTML = `
    <img src="${songs[firstSongIdx].coverPath}" alt="${artistName}">
    <div class="meta">
      <div class="title">${artistName}</div>
      <div class="subtitle">${a.songIndexes.length} songs</div>
    </div>
  `;
  const list = document.createElement('div');
  list.className = 'song-list';
  const headerRow = document.createElement('div');
  headerRow.className = 'song-row header';
  headerRow.innerHTML = `<div>#</div><div>Title</div><div>Album</div><div>Duration</div>`;
  list.appendChild(headerRow);
  a.songIndexes.forEach((idx, i) => {
    const s = songs[idx];
    const row = document.createElement('div');
    row.className = 'song-row';
    row.innerHTML = `
      <div class="play-cell"><button class="play-btn" data-index="${idx}"><i class="fa-solid fa-circle-play"></i></button></div>
      <div>${s.songName}</div>
      <div>${s.album || ''}</div>
      <div>${s.duration || ''}</div>
    `;
    list.appendChild(row);
  });
  playlistDetail.appendChild(header);
  playlistDetail.appendChild(list);
  showView('playlists');
}

// SPA View switching
function showView(name) {
  document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  
  const el = document.getElementById(`view-${name}`);
  const navLink = document.querySelector(`[data-view="${name}"]`);
  
  if (el) el.classList.remove('hidden');
  if (navLink) navLink.classList.add('active');
}

function handleHash() {
  const hash = location.hash.replace('#', '') || 'home';
  showView(hash);
  if (hash === 'liked') {
    renderLikedSongs();
  }
}

// Navigation
window.addEventListener('hashchange', handleHash);
document.querySelectorAll('.nav-link').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const v = a.getAttribute('data-view');
    if (v) {
      showView(v);
      location.hash = v;
    }
  });
});

// Events
masterPlayBtn?.addEventListener('click', togglePlay);
btnNext?.addEventListener('click', nextSong);
btnPrev?.addEventListener('click', prevSong);

btnShuffle?.addEventListener('click', () => {
  isShuffle = !isShuffle;
  btnShuffle.classList.toggle('active', isShuffle);
});

btnRepeat?.addEventListener('click', () => {
  repeatMode = repeatMode === 'all' ? 'one' : repeatMode === 'one' ? 'off' : 'all';
  repeatIcon.classList.toggle('fa-repeat-1', repeatMode === 'one');
  btnRepeat.classList.toggle('active', repeatMode !== 'off');
});

btnLike?.addEventListener('click', () => {
  if (liked.has(songIndex)) liked.delete(songIndex); else liked.add(songIndex);
  updateLikeUI();
  saveLikes();
  renderLikedSongs();
  renderLibraryCategories();
  if (currentUser) updateUserUI();
});

volumeBar?.addEventListener('input', () => {
  audio.volume = Math.min(1, Math.max(0, volumeBar.value / 100));
});

volumeBtn?.addEventListener('click', () => {
  if (audio.volume > 0) {
    audio.volume = 0;
    volumeBar.value = 0;
    volumeIcon.className = 'fa-solid fa-volume-x';
  } else {
    audio.volume = 0.8;
    volumeBar.value = 80;
    volumeIcon.className = 'fa-solid fa-volume-high';
  }
});

audio.addEventListener('timeupdate', () => {
  if (!isFinite(audio.duration)) return;
  const progress = Math.floor((audio.currentTime / audio.duration) * 100) || 0;
  myProgressBar.value = progress;
  
  if (currentTimeEl) currentTimeEl.textContent = formatTime(audio.currentTime);
  if (totalTimeEl) totalTimeEl.textContent = formatTime(audio.duration);
});

myProgressBar?.addEventListener('input', () => {
  if (!isFinite(audio.duration)) return;
  audio.currentTime = (myProgressBar.value / 100) * audio.duration;
});

audio.addEventListener('ended', () => {
  if (repeatMode === 'one') {
    audio.currentTime = 0;
    playCurrent();
    return;
  }
  if (repeatMode === 'off' && !isShuffle && songIndex === songs.length - 1) {
    // stop at end
    pauseCurrent();
    audio.currentTime = 0;
    return;
  }
  nextSong();
});

document.addEventListener('click', (e) => {
  const btn = e.target.closest('.play-btn');
  if (btn && btn.dataset.index !== undefined) {
    const idx = parseInt(btn.dataset.index, 10);
    loadSong(idx);
    audio.currentTime = 0;
    playCurrent();
  }
  
  // Artist playlist functionality
  const artistCard = e.target.closest('.artist-card');
  const openBtn = e.target.closest('.open-playlist');
  const artistName = openBtn?.dataset.artist || artistCard?.dataset.artist;
  if (artistName) {
    openArtistPlaylist(artistName);
  }
  
  // Category playlist functionality
  const categoryBtn = e.target.closest('.open-category');
  const categoryCard = e.target.closest('[data-category]');
  const category = categoryBtn?.dataset.category || categoryCard?.getAttribute('data-category');
  if (category) {
    openCategoryPlaylist(category);
  }
  
  // Play all songs in category
  const playAllBtn = e.target.closest('.play-all-btn');
  if (playAllBtn) {
    const category = playAllBtn.dataset.category;
    const categorySongs = songs.filter(s => s.category === category);
    if (categorySongs.length > 0) {
      const firstIdx = songs.indexOf(categorySongs[0]);
      loadSong(firstIdx);
      audio.currentTime = 0;
      playCurrent();
    }
  }
  
  // Shuffle all songs in category
  const shuffleAllBtn = e.target.closest('.shuffle-all-btn');
  if (shuffleAllBtn) {
    const category = shuffleAllBtn.dataset.category;
    const categorySongs = songs.filter(s => s.category === category);
    if (categorySongs.length > 0) {
      const randomIdx = Math.floor(Math.random() * categorySongs.length);
      const songIdx = songs.indexOf(categorySongs[randomIdx]);
      loadSong(songIdx);
      audio.currentTime = 0;
      playCurrent();
    }
  }
  
  // Shuffle category
  const shuffleCategoryBtn = e.target.closest('.shuffle-category');
  if (shuffleCategoryBtn) {
    const category = shuffleCategoryBtn.dataset.category;
    openCategoryPlaylist(category);
  }
});

// Legacy per-song play buttons support (old static HTML)
function bindLegacySongItemPlays() {
  const els = document.getElementsByClassName('songItemplay');
  if (!els || els.length === 0) return;
  const toArray = Array.from(els);
  const reset = () => {
    toArray.forEach(el => {
      el.classList.remove('fa-pause-circle');
      el.classList.add('fa-play-circle');
    });
  };
  toArray.forEach(el => {
    el.addEventListener('click', (e) => {
      const id = parseInt(e.currentTarget.id, 10) || 0;
      reset();
      e.currentTarget.classList.remove('fa-play-circle');
      e.currentTarget.classList.add('fa-pause-circle');
      loadSong(id);
      audio.currentTime = 0;
      playCurrent();
    });
  });
}

// Search
searchInput?.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  const filtered = q ? songs.filter(s =>
    s.songName.toLowerCase().includes(q) ||
    (s.artist || '').toLowerCase().includes(q) ||
    (s.album || '').toLowerCase().includes(q)
  ) : songs;

  // Limit results based on screen size: 6 on mobile, 12 on desktop
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const limit = isMobile ? 6 : 12;
  renderSongs(filtered.slice(0, limit));
});

// Render liked songs
function renderLikedSongs() {
  if (!likedGrid) return;
  likedGrid.innerHTML = '';
  const likedSongs = Array.from(liked)
    .map(i => ({ song: songs[i], index: i }))
    .filter(x => Boolean(x.song));

  likedSongs.forEach(({ song, index }) => {
    const card = document.createElement('div');
    card.className = 'liked-song-card';
    card.innerHTML = `
      <img src="${song.coverPath}" alt="${song.songName}">
      <h3>${song.songName}</h3>
      <p>${song.artist || ''}</p>
      <div class="actions" style="margin-top:8px;display:flex;justify-content:center;gap:8px;">
        <button class="play-btn" data-index="${index}" title="Play"><i class="fa-solid fa-circle-play"></i></button>
      </div>
    `;
    likedGrid.appendChild(card);
  });
}

// Render library categories
function renderLibraryCategories() {
  const libraryCategories = document.getElementById('libraryCategories');
  if (!libraryCategories) return;
  
  const categories = [
    {
      id: 'liked',
      title: 'Liked Songs',
      description: 'Your favorite tracks',
      icon: 'fa-heart',
      count: liked.size,
      color: '#e22134'
    },
    {
      id: 'sidhu',
      title: 'Sidhu Moose Wala',
      description: 'Punjabi rap collection',
      icon: 'fa-music',
      count: songs.filter(s => s.category === 'sidhu').length,
      color: '#1db954'
    },
    {
      id: 'ppop',
      title: 'P-POP CULTURE',
      description: 'Latest P-POP hits',
      icon: 'fa-star',
      count: songs.filter(s => s.category === 'ppop').length,
      color: '#ff6b6b'
    },
    {
      id: 'rap',
      title: 'Rap Collection',
      description: 'Best rap tracks',
      icon: 'fa-microphone',
      count: songs.filter(s => s.category === 'rap').length,
      color: '#4ecdc4'
    },
    {
      id: 'punjabi',
      title: 'Punjabi Hits',
      description: 'Traditional Punjabi music',
      icon: 'fa-drum',
      count: songs.filter(s => s.category === 'punjabi').length,
      color: '#45b7d1'
    },
    {
      id: 'bollywood',
      title: 'Bollywood Mix',
      description: 'Hindi film songs',
      icon: 'fa-film',
      count: songs.filter(s => s.category === 'bollywood').length,
      color: '#f39c12'
    }
  ];
  
  libraryCategories.innerHTML = '';
  
  categories.forEach(category => {
    const categoryCard = document.createElement('div');
    categoryCard.className = 'library-category-card';
    categoryCard.style.borderColor = category.color + '40';
    categoryCard.innerHTML = `
      <i class="fa-solid ${category.icon} library-category-icon" style="color: ${category.color}"></i>
      <div class="library-category-title">${category.title}</div>
      <div class="library-category-description">${category.description}</div>
      <div class="library-category-stats">
        <span>${category.count} songs</span>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    `;
    
    categoryCard.addEventListener('click', () => {
      if (category.id === 'liked') {
        showView('liked');
      } else {
        openCategoryPlaylist(category.id);
      }
    });
    
    libraryCategories.appendChild(categoryCard);
  });
}

// Init
function init() {
  loadSong(0);
  if (artistGrid) renderArtists();
  if (songGrid) renderSongs(songs);
  if (playlistGrid) renderMoodPlaylists();
  if (likedGrid) renderLikedSongs();
  renderLibraryCategories();
  handleHash();
  setPlayingUI(false);
  updateLikeUI();
  updateNowPlayingUI();
  bindLegacySongItemPlays();
}

// Video functionality
function initVideoControls() {
  const videos = document.querySelectorAll('.home-video, .playlist-bg-video, .playlist-video, .library-video');
  
  videos.forEach(video => {
    // Auto-play videos
    video.play().catch(e => console.log('Video autoplay failed:', e));
    
    // Play on hover
    video.addEventListener('mouseenter', () => {
      video.play().catch(e => console.log('Video play failed:', e));
    });
    
    // Pause when not hovering
    video.addEventListener('mouseleave', () => {
      video.pause();
    });
    
    // Ensure videos are muted and loop
    video.muted = true;
    video.loop = true;
    video.autoplay = true;
  });
}

// Authentication
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let isShuffleOn = false;
let isRepeatOn = false;
let listeningStartTime = null;
let totalListeningTime = 0;

function updateAuthNav() {
  const navProfile = document.getElementById('navProfile');
  const navLogin = document.getElementById('navLogin');
  const navSignup = document.getElementById('navSignup');
  if (currentUser) {
    navProfile && (navProfile.style.display = 'block');
    navLogin && (navLogin.style.display = 'none');
    navSignup && (navSignup.style.display = 'none');
  } else {
    navProfile && (navProfile.style.display = 'none');
    navLogin && (navLogin.style.display = 'block');
    navSignup && (navSignup.style.display = 'block');
  }
}

// Password toggle functionality
function togglePassword(inputId) {
  const input = document.getElementById(inputId);
  const button = input.nextElementSibling;
  const icon = button.querySelector('i');
  
  if (input.type === 'password') {
    input.type = 'text';
    icon.className = 'fa-solid fa-eye-slash';
  } else {
    input.type = 'password';
    icon.className = 'fa-solid fa-eye';
  }
}

// Profile edit functionality
function toggleEditProfile() {
  const editForm = document.getElementById('editProfileForm');
  if (editForm.classList.contains('hidden')) {
    editForm.classList.remove('hidden');
    // Populate form with current user data
    if (currentUser) {
      document.getElementById('editName').value = currentUser.name || '';
      document.getElementById('editEmail').value = currentUser.email || '';
      document.getElementById('editBio').value = currentUser.bio || '';
      document.getElementById('editLocation').value = currentUser.location || '';
    }
  } else {
    editForm.classList.add('hidden');
  }
}

function changeAvatar() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.onchange = function(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById('profileImage').src = e.target.result;
        if (currentUser) {
          currentUser.avatar = e.target.result;
          localStorage.setItem('currentUser', JSON.stringify(currentUser));
          // Update users array
          const users = JSON.parse(localStorage.getItem('users')) || [];
          const userIndex = users.findIndex(u => u.id === currentUser.id);
          if (userIndex !== -1) {
            users[userIndex] = currentUser;
            localStorage.setItem('users', JSON.stringify(users));
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };
  input.click();
}

function deleteAvatar() {
  if (confirm('Are you sure you want to delete your profile picture?')) {
    document.getElementById('profileImage').src = 'logo.png';
    if (currentUser) {
      currentUser.avatar = 'logo.png';
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      // Update users array
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const userIndex = users.findIndex(u => u.id === currentUser.id);
      if (userIndex !== -1) {
        users[userIndex] = currentUser;
        localStorage.setItem('users', JSON.stringify(users));
      }
    }
    showNotification('Profile picture deleted successfully!', 'success');
  }
}


// Advanced player controls
function toggleShuffle() {
  isShuffleOn = !isShuffleOn;
  const shuffleBtn = document.getElementById('btnShuffle');
  if (shuffleBtn) {
    shuffleBtn.style.color = isShuffleOn ? '#1db954' : '#b3b3b3';
  }
}

function toggleRepeat() {
  isRepeatOn = !isRepeatOn;
  const repeatBtn = document.getElementById('btnRepeat');
  if (repeatBtn) {
    repeatBtn.style.color = isRepeatOn ? '#1db954' : '#b3b3b3';
  }
}


function showAuthView(view) {
  showView(view);
}

function handleSignup(e) {
  e.preventDefault();
  const name = document.getElementById('signupName').value;
  const email = document.getElementById('signupEmail').value;
  const password = document.getElementById('signupPassword').value;
  const confirmPassword = document.getElementById('signupConfirmPassword').value;
  const dateOfBirth = document.getElementById('signupDate').value;
  const agreeTerms = document.getElementById('agreeTerms').checked;
  
  // Validation
  if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
  }
  
  if (password.length < 6) {
    alert('Password must be at least 6 characters long!');
    return;
  }
  
  if (!agreeTerms) {
    alert('Please agree to the Terms of Service and Privacy Policy!');
    return;
  }
  
  // Check if user already exists
  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  if (existingUsers.find(u => u.email === email)) {
    alert('An account with this email already exists!');
    return;
  }
  
  // Create new user
  const user = {
    id: Date.now(),
    name,
    email,
    password,
    dateOfBirth,
    bio: '',
    location: '',
    avatar: 'logo.png',
    createdAt: new Date().toISOString(),
    listeningTime: 0,
    totalPlays: 0
  };
  
  // Store user data
  existingUsers.push(user);
  localStorage.setItem('users', JSON.stringify(existingUsers));
  localStorage.setItem('currentUser', JSON.stringify(user));
  currentUser = user;
  
  // Update UI
  updateUserUI();
  updateAuthNav();
  showView('profile');
  
      showNotification('Account created successfully! Welcome to Spotify Clone!', 'success');
}

function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const rememberMe = document.getElementById('rememberMe').checked;
  
  // Check against stored users
  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    currentUser = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
    
    // Update listening stats
    user.lastLogin = new Date().toISOString();
    localStorage.setItem('users', JSON.stringify(users));
    
    updateUserUI();
    updateAuthNav();
    showView('profile');
        showNotification('Login successful! Welcome back!', 'success');
  } else {
        showNotification('Invalid email or password!', 'error');
  }
}

function updateUserUI() {
  if (currentUser) {
    document.getElementById('profileName').textContent = currentUser.name;
    document.getElementById('profileEmail').textContent = currentUser.email;
    document.getElementById('profileJoinDate').textContent = `Member since ${new Date(currentUser.createdAt).getFullYear()}`;
    document.getElementById('totalSongs').textContent = songs.length;
    document.getElementById('likedCount').textContent = liked.size;
    document.getElementById('playlistCount').textContent = Object.keys(artistMap).length;
    
    // Update listening time
    const hours = Math.floor(currentUser.listeningTime / 3600);
    const minutes = Math.floor((currentUser.listeningTime % 3600) / 60);
    document.getElementById('listeningTime').textContent = `${hours}h ${minutes}m`;
    
    // Update profile image if available
    if (currentUser.avatar && currentUser.avatar !== 'logo.png') {
      document.getElementById('profileImage').src = currentUser.avatar;
    }
    
    // Update homepage listening stats
    updateHomepageStats();
    
    // Render recent activity
    renderRecentActivity();
  }
}

function updateHomepageStats() {
  if (currentUser) {
    // Update total listening time
    const hours = Math.floor(currentUser.listeningTime / 3600);
    const minutes = Math.floor((currentUser.listeningTime % 3600) / 60);
    document.getElementById('totalListeningTime').textContent = `${hours}h ${minutes}m`;
    
    // Update total plays
    document.getElementById('totalPlays').textContent = `${currentUser.totalPlays || 0} plays`;
  }
}

function startListeningTimer() {
  if (!listeningStartTime) {
    listeningStartTime = Date.now();
  }
}

function stopListeningTimer() {
  if (listeningStartTime) {
    const listeningDuration = Math.floor((Date.now() - listeningStartTime) / 1000);
    totalListeningTime += listeningDuration;
    
    if (currentUser) {
      currentUser.listeningTime = (currentUser.listeningTime || 0) + listeningDuration;
      currentUser.totalPlays = (currentUser.totalPlays || 0) + 1;
      
      // Update localStorage
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      
      // Update users array
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const userIndex = users.findIndex(u => u.id === currentUser.id);
      if (userIndex !== -1) {
        users[userIndex] = currentUser;
        localStorage.setItem('users', JSON.stringify(users));
      }
      
      // Update UI
      updateHomepageStats();
    }
    
    listeningStartTime = null;
  }
}

function renderRecentActivity() {
  const recentActivity = document.getElementById('recentActivity');
  if (!recentActivity) return;
  
  const activities = [
    { icon: 'fa-music', text: 'Listened to 295 by Sidhu Moose Wala', time: '2 hours ago' },
    { icon: 'fa-heart', text: 'Liked P-POP CULTURE', time: '1 day ago' },
    { icon: 'fa-list', text: 'Created new playlist', time: '3 days ago' },
    { icon: 'fa-play', text: 'Started listening session', time: '1 week ago' }
  ];
  
  recentActivity.innerHTML = '';
  activities.forEach(activity => {
    const activityItem = document.createElement('div');
    activityItem.className = 'activity-item';
    activityItem.innerHTML = `
      <div class="activity-icon">
        <i class="fa-solid ${activity.icon}"></i>
      </div>
      <div class="activity-text">${activity.text}</div>
      <div class="activity-time">${activity.time}</div>
    `;
    recentActivity.appendChild(activityItem);
  });
}

// Profile edit form handling
function handleProfileEdit(e) {
  e.preventDefault();
  const name = document.getElementById('editName').value;
  const email = document.getElementById('editEmail').value;
  const bio = document.getElementById('editBio').value;
  const location = document.getElementById('editLocation').value;
  
  if (currentUser) {
    currentUser.name = name;
    currentUser.email = email;
    currentUser.bio = bio;
    currentUser.location = location;
    
    // Update in localStorage
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    // Update users array
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    if (userIndex !== -1) {
      users[userIndex] = currentUser;
      localStorage.setItem('users', JSON.stringify(users));
    }
    
    // Update UI
    updateUserUI();
    toggleEditProfile();
    
        showNotification('Profile updated successfully!', 'success');
  }
}

function logout() {
  currentUser = null;
  localStorage.removeItem('currentUser');
  showView('home');
  updateAuthNav();
}

// Social Login Functions
function loginWithGoogle() {
  // Show loading state
  const googleBtn = document.querySelector('.social-btn.google');
  const originalText = googleBtn.innerHTML;
  googleBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Connecting...';
  googleBtn.disabled = true;
  
  // Simulate API call delay
  setTimeout(() => {
    try {
      // Simulate Google OAuth flow with more realistic data
      const googleUser = {
        id: 'google_' + Date.now(),
        name: 'Google User',
        email: 'user@gmail.com',
        provider: 'google',
        avatar: 'https://via.placeholder.com/150/4285F4/FFFFFF?text=G',
        createdAt: new Date().toISOString(),
        listeningTime: 0,
        totalPlays: 0,
        bio: 'Signed in with Google',
        location: 'Google Account',
        lastLogin: new Date().toISOString()
      };
      
      // Check if user already exists
      const users = JSON.parse(localStorage.getItem('users')) || [];
      let existingUser = users.find(u => u.email === googleUser.email);
      
      if (existingUser) {
        // Update existing user with Google info
        existingUser.provider = 'google';
        existingUser.avatar = googleUser.avatar;
        existingUser.lastLogin = new Date().toISOString();
        currentUser = existingUser;
      } else {
        // Create new user
        users.push(googleUser);
        currentUser = googleUser;
      }
      
      // Save to localStorage
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      
      // Update UI
      updateUserUI();
      updateAuthNav();
      showView('profile');
      
      // Reset button
      googleBtn.innerHTML = originalText;
      googleBtn.disabled = false;
      
      // Show success notification
      showNotification('Successfully logged in with Google! Welcome to Spotify Clone!', 'success');
      
    } catch (error) {
      console.error('Google login error:', error);
      googleBtn.innerHTML = originalText;
      googleBtn.disabled = false;
      showNotification('Login failed. Please try again.', 'error');
    }
  }, 1500);
}

function loginWithFacebook() {
  // Show loading state
  const facebookBtn = document.querySelector('.social-btn.facebook');
  const originalText = facebookBtn.innerHTML;
  facebookBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Connecting...';
  facebookBtn.disabled = true;
  
  // Simulate API call delay
  setTimeout(() => {
    try {
      // Simulate Facebook OAuth flow with more realistic data
      const facebookUser = {
        id: 'facebook_' + Date.now(),
        name: 'Facebook User',
        email: 'user@facebook.com',
        provider: 'facebook',
        avatar: 'https://via.placeholder.com/150/1877F2/FFFFFF?text=F',
        createdAt: new Date().toISOString(),
        listeningTime: 0,
        totalPlays: 0,
        bio: 'Signed in with Facebook',
        location: 'Facebook Account',
        lastLogin: new Date().toISOString()
      };
      
      // Check if user already exists
      const users = JSON.parse(localStorage.getItem('users')) || [];
      let existingUser = users.find(u => u.email === facebookUser.email);
      
      if (existingUser) {
        // Update existing user with Facebook info
        existingUser.provider = 'facebook';
        existingUser.avatar = facebookUser.avatar;
        existingUser.lastLogin = new Date().toISOString();
        currentUser = existingUser;
      } else {
        // Create new user
        users.push(facebookUser);
        currentUser = facebookUser;
      }
      
      // Save to localStorage
      localStorage.setItem('users', JSON.stringify(users));
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      
      // Update UI
      updateUserUI();
      updateAuthNav();
      showView('profile');
      
      // Reset button
      facebookBtn.innerHTML = originalText;
      facebookBtn.disabled = false;
      
      // Show success notification
      showNotification('Successfully logged in with Facebook! Welcome to Spotify Clone!', 'success');
      
    } catch (error) {
      console.error('Facebook login error:', error);
      facebookBtn.innerHTML = originalText;
      facebookBtn.disabled = false;
      showNotification('Login failed. Please try again.', 'error');
    }
  }, 1500);
}

// Notification System
function showNotification(message, type = 'info') {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <div class="notification-content">
      <i class="fa-solid ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
      <span>${message}</span>
      <button class="notification-close" onclick="closeNotification(this)">
        <i class="fa-solid fa-times"></i>
      </button>
    </div>
  `;
  
  // Add to page
  document.body.appendChild(notification);
  
  // Show notification
  setTimeout(() => {
    notification.classList.add('show');
  }, 100);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    closeNotification(notification.querySelector('.notification-close'));
  }, 5000);
}

function closeNotification(closeBtn) {
  const notification = closeBtn.closest('.notification');
  notification.classList.remove('show');
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 300);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
init();
  initVideoControls();
  
  // Auth event listeners
  document.getElementById('signupForm')?.addEventListener('submit', handleSignup);
  document.getElementById('loginForm')?.addEventListener('submit', handleLogin);
  document.getElementById('profileEditForm')?.addEventListener('submit', handleProfileEdit);
  document.getElementById('showSignup')?.addEventListener('click', (e) => {
    e.preventDefault();
    showAuthView('signup');
  });
  document.getElementById('showLogin')?.addEventListener('click', (e) => {
    e.preventDefault();
    showAuthView('login');
  });
  
  
  // Shuffle and repeat buttons
  document.getElementById('btnShuffle')?.addEventListener('click', toggleShuffle);
  document.getElementById('btnRepeat')?.addEventListener('click', toggleRepeat);
  
  // User menu click
  document.querySelector('.user-btn')?.addEventListener('click', () => {
    if (currentUser) {
      showView('profile');
    } else {
      showAuthView('login');
    }
  });
  
  // Update UI if user is logged in
  if (currentUser) {
    updateUserUI();
  } else {
    // Show default stats for non-logged in users
    updateHomepageStats();
  }
  // Ensure nav shows correct auth options on load
  updateAuthNav();
});