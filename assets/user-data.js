
import profile1 from './daily_nutrition.jpg'
import profile2 from './daily_inspiration.jpg'
import profile3 from './daily_foodie.jpg'
import profile4 from './study.smart.jpg'
import profile5 from './wander.daily.jpg'
import profile6 from './code.daily.jpg'
import nutrition1 from './healthy__post.jpg'
import nutrition2 from './nutrition2.jpg'
import nutrition3 from './nutrition3.jpg'
import nutrition4 from './nutrition4.jpg'
import nutrition5 from './nutrition5.jpg'
import nutrition6 from './nutrition6.jpg'
import inspiration1 from './inspiration1.jpg'
import inspiration2 from './inspiration2.jpg'
import inspiration3 from './inspiration3.jpg'
import inspiration4 from './inspiration4.jpg'
import inspiration5 from './inspiration5.jpg'
import inspiration6 from './inspiration6.jpg'
import food1 from './food1.jpg'
import food2 from './food2.jpg'
import food3 from './food3.jpg'
import food4 from './food4.jpg'
import food5 from './food5.jpg'
import food6 from './food6.jpg'
import wander1 from './wander1.jpg'
import wander2 from './wander2.jpg'
import wander3 from './wander3.jpg'
import wander4 from './wander4.jpg'
import wander5 from './wander5.jpg'
import wander6 from './wander6.jpg'
import study1 from './study1.jpg'
import study2 from './study2.jpg'
import study3 from './study3.jpg'
import study4 from './study4.jpg'
import study5 from './study5.jpg'
import study6 from './study6.jpg'
import code1 from './code1.jpg'
import code2 from './code2.jpg'
import code3 from './code3.jpg'
import code4 from './code4.png'
import code5 from './code5.jpg'
import code6 from './code6.jpg'
import reels1 from './daily.nutrition.mp4'
import reels2 from './daily.inspiration.mp4'
import reels3 from './daily.foodie.mp4'
import reels4 from './study.smart.mp4'
import reels5 from './wander.daily.mp4'
import reels6 from './code.daily.mp4'


const user1 = {
  users: [
    {
      id: 1,
      username: "daily_nutrition",
      name: "Daily Nutrition",
      category: "Nutrition",
      profile: profile1,
      bio: "Simple nutrition tips for everyday life 🥗",
      followers: 12400,
      following: 320,
    },
  ],

  posts: [
    {
      id: 101,
      userId: 1,
      image: nutrition1,
      caption: "Fuel your body with real food 🌱",
      likes: 1203,
      createdAt: "2025-12-01",
      comments: [
        {
          id: 1001,
          postId: 101,
          username: "fit_motivation",
          text: "Love this 🙌",
          createdAt: "2025-12-01",
        },
        {
          id: 1002,
          postId: 101,
          username: "wellness_space",
          text: "So true 👏",
          createdAt: "2025-12-01",
        },
        {
          id: 1003,
          postId: 101,
          username: "plant_based.life",
          text: "Amazing tips 🌱",
          createdAt: "2025-12-01",
        },
        {
          id: 1004,
          postId: 101,
          username: "selfcare.daily",
          text: "Needed this today 🤍",
          createdAt: "2025-12-01",
        },
        {
          id: 1005,
          postId: 101,
          username: "focus.flow",
          text: "Great reminder!",
          createdAt: "2025-12-01",
        },
        {
          id: 1006,
          postId: 101,
          username: "morning_quotes",
          text: "Fuel = success 💪",
          createdAt: "2025-12-01",
        },
        {
          id: 1007,
          postId: 101,
          username: "rise.and.grind",
          text: "Facts 🔥",
          createdAt: "2025-12-01",
        },
        {
          id: 1008,
          postId: 101,
          username: "clean_eats_club",
          text: "Saving this!",
          createdAt: "2025-12-01",
        },
        {
          id: 1009,
          postId: 101,
          username: "mindset.daily",
          text: "Mind + body alignment ✨",
          createdAt: "2025-12-01",
        },
        {
          id: 1010,
          postId: 101,
          username: "fit_motivation",
          text: "🔥🔥🔥",
          createdAt: "2025-12-01",
        },
      ],
    },
    {
      id: 102,
      userId: 1,
      image: nutrition2,
      caption: "Healthy eating doesn’t have to be complicated 🥑",
      likes: 980,
      createdAt: "2025-12-02",
      comments: [
        {
          id: 1001,
          postId: 101,
          username: "GreenGourmet",
          text: "So true! I’ve been meal prepping simple salads and smoothies, and it’s been a game changer 🥗💚",
          createdAt: "2025-12-01",
        },
        {
          id: 1002,
          postId: 101,
          username: "FitFoodie22",
          text: "Love this! Healthy can definitely be easy and tasty 😋",
          createdAt: "2025-12-01",
        },
        {
          id: 1003,
          postId: 101,
          username: "VeganVibes",
          text: "Avocado toast for life 🥑✨",
          createdAt: "2025-12-01",
        },
        {
          id: 1004,
          postId: 101,
          username: "WellnessWithWendy",
          text: "Sometimes we overthink it, but fresh ingredients make all the difference 🌱",
          createdAt: "2025-12-01",
        },
        {
          id: 1005,
          postId: 101,
          username: "SnackSmart",
          text: "Just swapped chips for carrots and hummus—feels amazing 😍",
          createdAt: "2025-12-01",
        },
        {
          id: 1006,
          postId: 101,
          username: "CleanEats101",
          text: "Keeping it simple is the key. Whole foods, little processing 👍",
          createdAt: "2025-12-01",
        },
        {
          id: 1007,
          postId: 101,
          username: "NutriNerd",
          text: "Couldn’t agree more! Healthy eating is more about consistency than complexity 💪",
          createdAt: "2025-12-01",
        },
        {
          id: 1008,
          postId: 101,
          username: "MorningSmoothie",
          text: "This inspires me to plan meals for the week instead of stress about it 🍓🥬",
          createdAt: "2025-12-01",
        },
        {
          id: 1009,
          postId: 101,
          username: "PlantPower",
          text: "Yes! Fresh fruits and veggies > anything else 🌿",
          createdAt: "2025-12-01",
        },
        {
          id: 1010,
          postId: 101,
          username: "SimpleSuppers",
          text: "It’s amazing how 3-ingredient meals can feel gourmet when they’re fresh 😄",
          createdAt: "2025-12-01",
        },
      ]
    },
    {
      id: 103,
      userId: 1,
      image: nutrition3,
      caption: "Protein is your friend 💪",
      likes: 1504,
      createdAt: "2025-12-03",
      comments: [
  {
    id: 2001,
    postId: 102,
    username: "GreenGourmet",
    text: "So true! Simple meals are way easier to stick with 🥗",
    createdAt: "2025-12-02",
  },
  {
    id: 2002,
    postId: 102,
    username: "FitFoodie22",
    text: "Healthy really doesn’t have to be complicated 😋",
    createdAt: "2025-12-02",
  },
  {
    id: 2003,
    postId: 102,
    username: "VeganVibes",
    text: "Avocado toast for life 🥑✨",
    createdAt: "2025-12-02",
  },
  {
    id: 2004,
    postId: 102,
    username: "WellnessWithWendy",
    text: "Whole foods + simple prep = winning combo 🌱",
    createdAt: "2025-12-02",
  },
  {
    id: 2005,
    postId: 102,
    username: "SnackSmart",
    text: "Swapping snacks made the biggest difference for me 🙌",
    createdAt: "2025-12-02",
  },
  {
    id: 2006,
    postId: 102,
    username: "CleanEats101",
    text: "Keeping it simple is the secret most people miss 👌",
    createdAt: "2025-12-02",
  },
  {
    id: 2007,
    postId: 102,
    username: "NutriNerd",
    text: "Consistency beats complexity every time 💪",
    createdAt: "2025-12-02",
  },
  {
    id: 2008,
    postId: 102,
    username: "MorningSmoothie",
    text: "This inspired my meal prep for the week 🥕🥬",
    createdAt: "2025-12-02",
  },
  {
    id: 2009,
    postId: 102,
    username: "PlantPower",
    text: "Fresh ingredients really do make everything better 🌿",
    createdAt: "2025-12-02",
  },
  {
    id: 2010,
    postId: 102,
    username: "SimpleSuppers",
    text: "Three ingredients can still taste amazing 😄",
    createdAt: "2025-12-02",
  },
],
    },
    {
      id: 104,
      userId: 1,
      image: nutrition4,
      caption: "Small changes add up ✨",
      likes: 876,
      createdAt: "2025-12-04",
      comments: [
  {
    id: 4001,
    postId: 104,
    username: "MindfulMoves",
    text: "This is such an important reminder ✨ small steps really matter",
    createdAt: "2025-12-04",
  },
  {
    id: 4002,
    postId: 104,
    username: "DailyHabits",
    text: "Consistency beats motivation every time 🙌",
    createdAt: "2025-12-04",
  },
  {
    id: 4003,
    postId: 104,
    username: "WellnessJourney",
    text: "Needed to hear this today 🤍",
    createdAt: "2025-12-04",
  },
  {
    id: 4004,
    postId: 104,
    username: "ProgressNotPerfection",
    text: "One small change a day adds up fast 💯",
    createdAt: "2025-12-04",
  },
  {
    id: 4005,
    postId: 104,
    username: "HealthyMindset",
    text: "This mindset shift changed everything for me 🌱",
    createdAt: "2025-12-04",
  },
  {
    id: 4006,
    postId: 104,
    username: "StepByStep",
    text: "Slow progress is still progress 🚶‍♀️✨",
    createdAt: "2025-12-04",
  },
  {
    id: 4007,
    postId: 104,
    username: "BalancedLiving",
    text: "Love content like this — so grounding 💚",
    createdAt: "2025-12-04",
  },
  {
    id: 4008,
    postId: 104,
    username: "HabitBuilder",
    text: "Tiny habits are the secret nobody talks about 🔑",
    createdAt: "2025-12-04",
  },
  {
    id: 4009,
    postId: 104,
    username: "DailyGrowth",
    text: "This inspired me to start small instead of quitting 😄",
    createdAt: "2025-12-04",
  },
  {
    id: 4010,
    postId: 104,
    username: "SelfCareDaily",
    text: "Little changes, big impact ✨ saving this",
    createdAt: "2025-12-04",
  },
],
    },
    {
      id: 105,
      userId: 1,
      image: nutrition5,
      caption: "Eat colors, feel better 🌈",
      likes: 1678,
      createdAt: "2025-12-05",
      comments: [
    {
      id: 1051,
      postId: 105,
      username: "healthy_hues",
      text: "Love the vibrant reminder! 🌟",
      createdAt: "2025-12-05"
    },
    {
      id: 1052,
      postId: 105,
      username: "colorful_bites",
      text: "Eating the rainbow never looked so good 🌈",
      createdAt: "2025-12-05"
    },
    {
      id: 1053,
      postId: 105,
      username: "wellness_journey",
      text: "So inspiring, adding more colors to my plate!",
      createdAt: "2025-12-05"
    },
    {
      id: 1054,
      postId: 105,
      username: "mindful_eater",
      text: "Feeling healthier already 🍎🥦",
      createdAt: "2025-12-05"
    },
    {
      id: 1055,
      postId: 105,
      username: "nutri_ninja",
      text: "Vibrant meals = happy vibes ✨",
      createdAt: "2025-12-05"
    },
    {
      id: 1056,
      postId: 105,
      username: "fresh_forks",
      text: "Colorful plates, colorful days 🌞",
      createdAt: "2025-12-05"
    },
    {
      id: 1057,
      postId: 105,
      username: "green_gourmet",
      text: "Adding more veggies starting today 🥕",
      createdAt: "2025-12-05"
    },
    {
      id: 1058,
      postId: 105,
      username: "vibrant_life",
      text: "Eating this way makes mornings better 🌸",
      createdAt: "2025-12-05"
    },
    {
      id: 1059,
      postId: 105,
      username: "fresh_plate_daily",
      text: "Mood booster just by looking at this 🥗",
      createdAt: "2025-12-05"
    },
    {
      id: 1060,
      postId: 105,
      username: "happy_tummy",
      text: "Yum! Rainbow on my plate 🌈😋",
      createdAt: "2025-12-05"
    }
  ],
    },
    {
      id: 106,
      userId: 1,
      image: nutrition6,
      caption: "Hydration matters 💧",
      likes: 742,
      createdAt: "2025-12-06",
      comments: [
    {
      id: 1061,
      postId: 106,
      username: "aqua_life",
      text: "So true! Can’t underestimate water 💦",
      createdAt: "2025-12-06"
    },
    {
      id: 1062,
      postId: 106,
      username: "hydrate_daily",
      text: "Just what I needed to see today 😌",
      createdAt: "2025-12-06"
    },
    {
      id: 1063,
      postId: 106,
      username: "thirsty_for_health",
      text: "Water = life 💧",
      createdAt: "2025-12-06"
    },
    {
      id: 1064,
      postId: 106,
      username: "wellness_splash",
      text: "Reminder to drink up! 🥤",
      createdAt: "2025-12-06"
    },
    {
      id: 1065,
      postId: 106,
      username: "pure_h2o",
      text: "Hydration is everything ✨",
      createdAt: "2025-12-06"
    },
    {
      id: 1066,
      postId: 106,
      username: "daily_drizzle",
      text: "Already had 3 glasses today, feeling good! 😎",
      createdAt: "2025-12-06"
    },
    {
      id: 1067,
      postId: 106,
      username: "sips_of_health",
      text: "Little reminder that water > everything else 💙",
      createdAt: "2025-12-06"
    },
    {
      id: 1068,
      postId: 106,
      username: "refresh_routine",
      text: "Hydrate, rejuvenate, repeat 🔁",
      createdAt: "2025-12-06"
    },
    {
      id: 1069,
      postId: 106,
      username: "crystal_cups",
      text: "My daily mantra now 💧💧",
      createdAt: "2025-12-06"
    },
    {
      id: 1070,
      postId: 106,
      username: "flow_state",
      text: "Staying hydrated never looked so good! 😍",
      createdAt: "2025-12-06"
    }
  ]
    },
  ],

  reels: [
      {
        username: 'daily_nutrition',
        reel: reels1,
        image: profile1,
        caption: 'Fuel your body.',
        comments: [
      { id: 1, username: 'fit_vibes', text: 'So informative 💪' },
      { id: 2, username: 'healthy_habits', text: 'Love this energy 🌱' },
      { id: 3, username: 'clean_eats', text: 'Saved this 🙌' },
      { id: 4, username: 'wellness_daily', text: 'Such a good reminder' },
      { id: 5, username: 'plant_power', text: 'Nutrition is everything!' },
      { id: 6, username: 'strong_living', text: '🔥🔥🔥' },
      { id: 7, username: 'mind_body', text: 'Needed this today' },
      { id: 8, username: 'health_first', text: 'So true 👏' },
      { id: 9, username: 'fit_focus', text: 'Amazing tips' },
      { id: 10, username: 'fuel_right', text: 'Keep posting these!' },
    ],
  }
  ],
}

const user2 = {
  users: [
    {
      id: 2,
      username: "daily_inspiration",
      name: "Daily Inspiration",
      category: "Inspiration",
      profile: profile2,
      bio: "Daily motivation to keep you moving forward ✨",
      followers: 18750,
      following: 410,
    },
  ],

  posts: [
    {
      id: 201,
      userId: 2,
      image: inspiration1,
      caption: "Every day is a new chance 🌅",
      likes: 2140,
      createdAt: "2025-12-01",
      comments: [
    {
      id: 2011,
      postId: 201,
      username: "daily_inspire",
      text: "Needed this reminder today ✨",
      createdAt: "2025-12-01"
    },
    {
      id: 2012,
      postId: 201,
      username: "rise_with_purpose",
      text: "New day, new mindset 🌄",
      createdAt: "2025-12-01"
    },
    {
      id: 2013,
      postId: 201,
      username: "positive_path",
      text: "Every sunrise feels like hope 🤍",
      createdAt: "2025-12-01"
    },
    {
      id: 2014,
      postId: 201,
      username: "mindset_matters",
      text: "Starting today with gratitude 🙏",
      createdAt: "2025-12-01"
    },
    {
      id: 2015,
      postId: 201,
      username: "morning_motives",
      text: "This hit different today 🌅",
      createdAt: "2025-12-01"
    },
    {
      id: 2016,
      postId: 201,
      username: "fresh_start_daily",
      text: "Every day is a reset button 🔄",
      createdAt: "2025-12-01"
    },
    {
      id: 2017,
      postId: 201,
      username: "inner_growth",
      text: "Choosing progress over perfection 💫",
      createdAt: "2025-12-01"
    },
    {
      id: 2018,
      postId: 201,
      username: "sunrise_energy",
      text: "Love this perspective 🌞",
      createdAt: "2025-12-01"
    },
    {
      id: 2019,
      postId: 201,
      username: "calm_confidence",
      text: "Starting the day with intention ✨",
      createdAt: "2025-12-01"
    },
    {
      id: 2020,
      postId: 201,
      username: "purpose_driven",
      text: "Beautiful reminder to keep going 💛",
      createdAt: "2025-12-01"
    }
  ]

    },
    {
      id: 202,
      userId: 2,
      image: inspiration2,
      caption: "Believe in yourself, always 💫",
      likes: 1895,
      createdAt: "2025-12-02",
      comments: [
    {
      id: 2021,
      postId: 202,
      username: "self_belief",
      text: "This is the reminder we all need 💖",
      createdAt: "2025-12-02"
    },
    {
      id: 2022,
      postId: 202,
      username: "confidence_daily",
      text: "Learning to trust myself more every day ✨",
      createdAt: "2025-12-02"
    },
    {
      id: 2023,
      postId: 202,
      username: "limitless_mind",
      text: "Belief changes everything 💫",
      createdAt: "2025-12-02"
    },
    {
      id: 2024,
      postId: 202,
      username: "inner_strength",
      text: "Exactly what I needed to read today 🙏",
      createdAt: "2025-12-02"
    },
    {
      id: 2025,
      postId: 202,
      username: "positive_steps",
      text: "Confidence is built one day at a time 🌱",
      createdAt: "2025-12-02"
    },
    {
      id: 2026,
      postId: 202,
      username: "dream_chaser",
      text: "Never doubting myself again 💥",
      createdAt: "2025-12-02"
    },
    {
      id: 2027,
      postId: 202,
      username: "mindset_shift",
      text: "Self-belief really is a superpower 🦸‍♀️",
      createdAt: "2025-12-02"
    },
    {
      id: 2028,
      postId: 202,
      username: "growth_zone",
      text: "Progress starts with belief ✨",
      createdAt: "2025-12-02"
    },
    {
      id: 2029,
      postId: 202,
      username: "authentic_you",
      text: "Choosing confidence every single day 💛",
      createdAt: "2025-12-02"
    },
    {
      id: 2030,
      postId: 202,
      username: "bold_moves",
      text: "This energy is everything 🔥",
      createdAt: "2025-12-02"
    }
  ]
    },
    {
      id: 203,
      userId: 2,
      image: inspiration3,
      caption: "Small steps still move you forward 👣",
      likes: 2430,
      createdAt: "2025-12-03",
      comments: [
    {
      id: 2031,
      postId: 203,
      username: "progress_daily",
      text: "This is such an important reminder 🌱",
      createdAt: "2025-12-03"
    },
    {
      id: 2032,
      postId: 203,
      username: "steady_growth",
      text: "Slow progress is still progress 💛",
      createdAt: "2025-12-03"
    },
    {
      id: 2033,
      postId: 203,
      username: "one_step_more",
      text: "Taking it one day at a time 👣",
      createdAt: "2025-12-03"
    },
    {
      id: 2034,
      postId: 203,
      username: "mindful_moves",
      text: "Consistency over perfection, always ✨",
      createdAt: "2025-12-03"
    },
    {
      id: 2035,
      postId: 203,
      username: "gentle_progress",
      text: "Needed to hear this today 🤍",
      createdAt: "2025-12-03"
    },
    {
      id: 2036,
      postId: 203,
      username: "daily_climb",
      text: "Every step counts, no matter how small 🔑",
      createdAt: "2025-12-03"
    },
    {
      id: 2037,
      postId: 203,
      username: "growth_mindset",
      text: "This really puts things into perspective 💭",
      createdAt: "2025-12-03"
    },
    {
      id: 2038,
      postId: 203,
      username: "patience_practice",
      text: "Learning to trust the process 🌿",
      createdAt: "2025-12-03"
    },
    {
      id: 2039,
      postId: 203,
      username: "forward_focus",
      text: "Even tiny wins deserve celebration 🎉",
      createdAt: "2025-12-03"
    },
    {
      id: 2040,
      postId: 203,
      username: "calm_progress",
      text: "Progress doesn’t have to be loud 💫",
      createdAt: "2025-12-03"
    }
  ]
    },
    {
      id: 204,
      userId: 2,
      image: inspiration4,
      caption: "Your mindset changes everything 🧠",
      likes: 1760,
      createdAt: "2025-12-04",
      comments: [
    {
      id: 2041,
      postId: 204,
      username: "mindset_reset",
      text: "This is so powerful 🔑",
      createdAt: "2025-12-04"
    },
    {
      id: 2042,
      postId: 204,
      username: "thought_shift",
      text: "Changing my thoughts, changing my life ✨",
      createdAt: "2025-12-04"
    },
    {
      id: 2043,
      postId: 204,
      username: "mental_strength",
      text: "Mindset really is everything 💭",
      createdAt: "2025-12-04"
    },
    {
      id: 2044,
      postId: 204,
      username: "inner_work",
      text: "Working on my mindset daily 🧠💪",
      createdAt: "2025-12-04"
    },
    {
      id: 2045,
      postId: 204,
      username: "positive_patterns",
      text: "Awareness is the first step 🌱",
      createdAt: "2025-12-04"
    },
    {
      id: 2046,
      postId: 204,
      username: "clarity_creator",
      text: "This reminder hits every time 🔥",
      createdAt: "2025-12-04"
    },
    {
      id: 2047,
      postId: 204,
      username: "growth_thoughts",
      text: "Choosing growth over fear ✨",
      createdAt: "2025-12-04"
    },
    {
      id: 2048,
      postId: 204,
      username: "focus_forward",
      text: "Perspective really does change outcomes 👏",
      createdAt: "2025-12-04"
    },
    {
      id: 2049,
      postId: 204,
      username: "mental_shift",
      text: "Daily reminder to stay intentional 💫",
      createdAt: "2025-12-04"
    },
    {
      id: 2050,
      postId: 204,
      username: "calm_mindset",
      text: "Mindset is the foundation of everything 🤍",
      createdAt: "2025-12-04"
    }
  ]
    },
    {
      id: 205,
      userId: 2,
      image: inspiration5,
      caption: "Progress, not perfection ✨",
      likes: 2685,
      createdAt: "2025-12-05",
      comments: [
    {
      id: 2051,
      postId: 205,
      username: "progress_over_perfect",
      text: "This mindset changes everything 🌱",
      createdAt: "2025-12-05"
    },
    {
      id: 2052,
      postId: 205,
      username: "imperfect_growth",
      text: "Learning to be kinder to myself 🤍",
      createdAt: "2025-12-05"
    },
    {
      id: 2053,
      postId: 205,
      username: "daily_progress",
      text: "Showing up is already a win ✨",
      createdAt: "2025-12-05"
    },
    {
      id: 2054,
      postId: 205,
      username: "one_step_forward",
      text: "Progress always beats perfection 👏",
      createdAt: "2025-12-05"
    },
    {
      id: 2055,
      postId: 205,
      username: "growth_not_rush",
      text: "This reminder feels so freeing 💫",
      createdAt: "2025-12-05"
    },
    {
      id: 2056,
      postId: 205,
      username: "mindful_movement",
      text: "Perfection was holding me back — this hits 🎯",
      createdAt: "2025-12-05"
    },
    {
      id: 2057,
      postId: 205,
      username: "steady_steps",
      text: "Small progress adds up over time 🌿",
      createdAt: "2025-12-05"
    },
    {
      id: 2058,
      postId: 205,
      username: "self_grace",
      text: "Letting go of perfection feels powerful ✨",
      createdAt: "2025-12-05"
    },
    {
      id: 2059,
      postId: 205,
      username: "forward_energy",
      text: "Progress is enough. Always 💛",
      createdAt: "2025-12-05"
    },
    {
      id: 2060,
      postId: 205,
      username: "growth_daily",
      text: "Exactly the reminder I needed today 🙌",
      createdAt: "2025-12-05"
    }
  ]
    },
    {
  id: 206,
  userId: 2,
  image: inspiration6,
  caption: "Keep going ✨",
  likes: 2540,
  createdAt: "2025-12-10",
  comments: [
    {
      id: 2061,
      postId: 206,
      username: "stay_moving",
      text: "Exactly what I needed to hear today 💛",
      createdAt: "2025-12-10"
    },
    {
      id: 2062,
      postId: 206,
      username: "forward_energy",
      text: "One step, one breath, keep going ✨",
      createdAt: "2025-12-10"
    },
    {
      id: 2063,
      postId: 206,
      username: "daily_encourage",
      text: "This simple reminder means so much 🙏",
      createdAt: "2025-12-10"
    },
    {
      id: 2064,
      postId: 206,
      username: "calm_strength",
      text: "Not giving up, no matter what 💪",
      createdAt: "2025-12-10"
    },
    {
      id: 2065,
      postId: 206,
      username: "gentle_push",
      text: "Needed this exact energy today ✨",
      createdAt: "2025-12-10"
    },
    {
      id: 2066,
      postId: 206,
      username: "inner_drive",
      text: "Still moving forward, even slowly 🌱",
      createdAt: "2025-12-10"
    },
    {
      id: 2067,
      postId: 206,
      username: "hopeful_steps",
      text: "This gave me a little boost 🤍",
      createdAt: "2025-12-10"
    },
    {
      id: 2068,
      postId: 206,
      username: "resilient_path",
      text: "Choosing to keep going today 👣",
      createdAt: "2025-12-10"
    },
    {
      id: 2069,
      postId: 206,
      username: "quiet_progress",
      text: "Even on hard days, we continue ✨",
      createdAt: "2025-12-10"
    },
    {
      id: 2070,
      postId: 206,
      username: "steady_focus",
      text: "This post says so much with so little 💫",
      createdAt: "2025-12-10"
    }
  ],
}
  ],

   reels: [
      {
        username: 'daily_inspiration',
        reel: reels2,
        image: profile2,
        caption: 'Keep going. 🌱',
         comments: [
      { id: 11, username: 'dream_chaser', text: 'This hit hard 💭' },
      { id: 12, username: 'rise_daily', text: 'Motivation unlocked 🔓' },
      { id: 13, username: 'positive_mind', text: 'So uplifting ✨' },
      { id: 14, username: 'focus_forward', text: 'Exactly what I needed' },
      { id: 15, username: 'self_growth', text: 'Never giving up 💪' },
      { id: 16, username: 'inner_peace', text: 'Beautiful message' },
      { id: 17, username: 'goal_getter', text: 'Let’s gooo 🚀' },
      { id: 18, username: 'daily_push', text: 'Consistency wins' },
      { id: 19, username: 'life_quotes', text: 'Powerful words' },
      { id: 20, username: 'hope_fuel', text: 'Keep inspiring ❤️' },
         ],
  }
  ],

};
const user3 = {
  users: [
    {
      id: 3,
      username: "daily_foodie",
      name: "Daily Foodie",
      category: "Food",
      profile: profile3,
      bio: "Exploring flavors one bite at a time 🍕🍰",
      followers: 22140,
      following: 560,
    },
  ],

  posts: [
    {
      id: 301,
      userId: 3,
      image: food1,
      caption: "Good food = good mood 😋",
      likes: 2840,
      createdAt: "2025-12-01",
      comments: [
    {
      id: 3011,
      postId: 301,
      username: "foodie_vibes",
      text: "This is 100% true 😍",
      createdAt: "2025-12-01"
    },
    {
      id: 3012,
      postId: 301,
      username: "happy_bites",
      text: "Now I’m hungry AND happy 😂",
      createdAt: "2025-12-01"
    },
    {
      id: 3013,
      postId: 301,
      username: "taste_buds",
      text: "Food really does fix everything 😋",
      createdAt: "2025-12-01"
    },
    {
      id: 3014,
      postId: 301,
      username: "comfort_cravings",
      text: "Good mood guaranteed with meals like this 🙌",
      createdAt: "2025-12-01"
    },
    {
      id: 3015,
      postId: 301,
      username: "flavor_first",
      text: "Eating well just hits different 🤤",
      createdAt: "2025-12-01"
    },
    {
      id: 3016,
      postId: 301,
      username: "snack_happy",
      text: "My mood instantly improved just seeing this 😄",
      createdAt: "2025-12-01"
    },
    {
      id: 3017,
      postId: 301,
      username: "yum_daily",
      text: "Proof that food is therapy 🍜",
      createdAt: "2025-12-01"
    },
    {
      id: 3018,
      postId: 301,
      username: "feel_good_eats",
      text: "This plate = happiness 💛",
      createdAt: "2025-12-01"
    },
    {
      id: 3019,
      postId: 301,
      username: "food_mood",
      text: "Good food really sets the tone for the day ✨",
      createdAt: "2025-12-01"
    },
    {
      id: 3020,
      postId: 301,
      username: "crave_culture",
      text: "Saving this for food inspo 😋",
      createdAt: "2025-12-01"
    }
  ]
    },
    {
      id: 302,
      userId: 3,
      image: food2,
      caption: "Brunch is always a good idea 🥞",
      likes: 2410,
      createdAt: "2025-12-02",
      comments: [
    {
      id: 3021,
      postId: 302,
      username: "brunch_club",
      text: "Brunch > everything else 😍",
      createdAt: "2025-12-02"
    },
    {
      id: 3022,
      postId: 302,
      username: "pancake_vibes",
      text: "This just made me crave pancakes 🥞",
      createdAt: "2025-12-02"
    },
    {
      id: 3023,
      postId: 302,
      username: "late_morning_eats",
      text: "There’s never a bad time for brunch 😋",
      createdAt: "2025-12-02"
    },
    {
      id: 3024,
      postId: 302,
      username: "coffee_and_bites",
      text: "Brunch with good company is the best combo ☕✨",
      createdAt: "2025-12-02"
    },
    {
      id: 3025,
      postId: 302,
      username: "sweet_or_savory",
      text: "Sweet or savory — brunch always wins 🙌",
      createdAt: "2025-12-02"
    },
    {
      id: 3026,
      postId: 302,
      username: "weekend_flavors",
      text: "This is my kind of morning 😍",
      createdAt: "2025-12-02"
    },
    {
      id: 3027,
      postId: 302,
      username: "brunch_dates",
      text: "Can we make brunch a daily thing? 😂",
      createdAt: "2025-12-02"
    },
    {
      id: 3028,
      postId: 302,
      username: "food_first",
      text: "Brunch mood activated 🥞✨",
      createdAt: "2025-12-02"
    },
    {
      id: 3029,
      postId: 302,
      username: "lazy_mornings",
      text: "This is why brunch exists 😌",
      createdAt: "2025-12-02"
    },
    {
      id: 3030,
      postId: 302,
      username: "stacked_plates",
      text: "Saving this for weekend inspo 🍽️",
      createdAt: "2025-12-02"
    }
  ]
    },
    {
      id: 303,
      userId: 3,
      image: food3,
      caption: "Say yes to extra cheese 🧀",
      likes: 3195,
      createdAt: "2025-12-03",
      comments: [
    {
      id: 3031,
      postId: 303,
      username: "cheese_lover",
      text: "Always yes to extra cheese 😍🧀",
      createdAt: "2025-12-03"
    },
    {
      id: 3032,
      postId: 303,
      username: "melted_magic",
      text: "There is no such thing as too much cheese 🤤",
      createdAt: "2025-12-03"
    },
    {
      id: 3033,
      postId: 303,
      username: "cheesy_cravings",
      text: "This is the energy I live for 🧀🔥",
      createdAt: "2025-12-03"
    },
    {
      id: 3034,
      postId: 303,
      username: "food_confessions",
      text: "Extra cheese is non-negotiable 😌",
      createdAt: "2025-12-03"
    },
    {
      id: 3035,
      postId: 303,
      username: "gooey_goodness",
      text: "The cheesier, the better 🙌",
      createdAt: "2025-12-03"
    },
    {
      id: 3036,
      postId: 303,
      username: "comfort_foodie",
      text: "Cheese makes everything better 🥹",
      createdAt: "2025-12-03"
    },
    {
      id: 3037,
      postId: 303,
      username: "cheese_mood",
      text: "This post understands me 😂🧀",
      createdAt: "2025-12-03"
    },
    {
      id: 3038,
      postId: 303,
      username: "snack_attack",
      text: "Now I need this immediately 🤤",
      createdAt: "2025-12-03"
    },
    {
      id: 3039,
      postId: 303,
      username: "extra_everything",
      text: "If there’s cheese, I’m in 😍",
      createdAt: "2025-12-03"
    },
    {
      id: 3040,
      postId: 303,
      username: "flavor_fanatic",
      text: "Cheese lovers unite 🧀✨",
      createdAt: "2025-12-03"
    }
  ]
    },
    {
      id: 304,
      userId: 3,
      image: food4,
      caption: "Street food hits different 🌮",
      likes: 2260,
      createdAt: "2025-12-04",
      comments: [
    {
      id: 3041,
      postId: 304,
      username: "street_bites",
      text: "Nothing beats good street food 😍",
      createdAt: "2025-12-04"
    },
    {
      id: 3042,
      postId: 304,
      username: "taco_time",
      text: "These flavors always hit 🔥🌮",
      createdAt: "2025-12-04"
    },
    {
      id: 3043,
      postId: 304,
      username: "urban_eats",
      text: "Street food is pure comfort food 🤤",
      createdAt: "2025-12-04"
    },
    {
      id: 3044,
      postId: 304,
      username: "food_on_the_go",
      text: "This just made me hungry 😅",
      createdAt: "2025-12-04"
    },
    {
      id: 3045,
      postId: 304,
      username: "late_night_cravings",
      text: "Street food always understands the assignment 🌮",
      createdAt: "2025-12-04"
    },
    {
      id: 3046,
      postId: 304,
      username: "global_flavors",
      text: "Some of the best food comes from the streets ✨",
      createdAt: "2025-12-04"
    },
    {
      id: 3047,
      postId: 304,
      username: "crispy_bites",
      text: "Fresh, fast, and full of flavor 🙌",
      createdAt: "2025-12-04"
    },
    {
      id: 3048,
      postId: 304,
      username: "foodie_adventures",
      text: "Street food = instant happiness 😋",
      createdAt: "2025-12-04"
    },
    {
      id: 3049,
      postId: 304,
      username: "snack_hunt",
      text: "Now I’m craving tacos 🌮🔥",
      createdAt: "2025-12-04"
    },
    {
      id: 3050,
      postId: 304,
      username: "flavor_streets",
      text: "This is what real food looks like 😍",
      createdAt: "2025-12-04"
    }
  ]
    },
    {
      id: 305,
      userId: 3,
      image: food5,
      caption: "Dessert first, always 🍰",
      likes: 3680,
      createdAt: "2025-12-05",
      comments: [
    {
      id: 3051,
      postId: 305,
      username: "sweet_tooth",
      text: "Dessert before dinner = the only correct choice 😍",
      createdAt: "2025-12-05"
    },
    {
      id: 3052,
      postId: 305,
      username: "cake_cravings",
      text: "This just made my day 🥰🍰",
      createdAt: "2025-12-05"
    },
    {
      id: 3053,
      postId: 305,
      username: "sugar_high",
      text: "Yes! Dessert > everything else 😋",
      createdAt: "2025-12-05"
    },
    {
      id: 3054,
      postId: 305,
      username: "choco_lovers",
      text: "Saving this for later inspiration 😂🍫",
      createdAt: "2025-12-05"
    },
    {
      id: 3055,
      postId: 305,
      username: "treat_yourself",
      text: "Dessert first, always my motto ✨",
      createdAt: "2025-12-05"
    },
    {
      id: 3056,
      postId: 305,
      username: "frosting_fan",
      text: "This is literally happiness on a plate 🤤",
      createdAt: "2025-12-05"
    },
    {
      id: 3057,
      postId: 305,
      username: "sweet_escape",
      text: "I can almost taste it through the screen 😄",
      createdAt: "2025-12-05"
    },
    {
      id: 3058,
      postId: 305,
      username: "icing_addict",
      text: "Dessert vibes = life vibes 💛",
      createdAt: "2025-12-05"
    },
    {
      id: 3059,
      postId: 305,
      username: "sundae_funday",
      text: "This energy is everything 🍨✨",
      createdAt: "2025-12-05"
    },
    {
      id: 3060,
      postId: 305,
      username: "cake_everyday",
      text: "Dessert first, life second 😆",
      createdAt: "2025-12-05"
    }
  ]
    },
    {
      id: 306,
      userId: 3,
      image: food6,
      caption: "Comfort food kind of day 🍝",
      likes: 2145,
      createdAt: "2025-12-06",
      comments: [
    {
      id: 3061,
      postId: 306,
      username: "cozy_eats",
      text: "Exactly the kind of meal I need today 😌🍽️",
      createdAt: "2025-12-06"
    },
    {
      id: 3062,
      postId: 306,
      username: "pasta_lover",
      text: "Comfort food = instant happiness 🤤",
      createdAt: "2025-12-06"
    },
    {
      id: 3063,
      postId: 306,
      username: "warm_bites",
      text: "This just made me crave pasta 😍",
      createdAt: "2025-12-06"
    },
    {
      id: 3064,
      postId: 306,
      username: "homey_flavors",
      text: "Nothing beats comfort food on a cozy day 💛",
      createdAt: "2025-12-06"
    },
    {
      id: 3065,
      postId: 306,
      username: "soul_foodie",
      text: "Mood: eat all the comfort food 🙌",
      createdAt: "2025-12-06"
    },
    {
      id: 3066,
      postId: 306,
      username: "flavor_hug",
      text: "This plate = pure love ❤️🍝",
      createdAt: "2025-12-06"
    },
    {
      id: 3067,
      postId: 306,
      username: "nostalgia_bites",
      text: "Comfort food hits differently on days like this 😌",
      createdAt: "2025-12-06"
    },
    {
      id: 3068,
      postId: 306,
      username: "cozy_plate",
      text: "I can almost smell it through the screen 🤤",
      createdAt: "2025-12-06"
    },
    {
      id: 3069,
      postId: 306,
      username: "food_hug",
      text: "This is my kind of therapy ✨🍝",
      createdAt: "2025-12-06"
    },
    {
      id: 3070,
      postId: 306,
      username: "cheesy_bites",
      text: "Comfort food mood activated 🔥",
      createdAt: "2025-12-06"
    }
  ]
    },
  ],
  reels: [
      {
        username: 'daily_foodie',
        reel: reels3,
        image: profile3,
        caption: 'Made fresh. 🍽️',
        comments: [
      { id: 21, username: 'food_lover', text: 'That looks delicious 🤤' },
      { id: 22, username: 'tasty_bites', text: 'Now I’m hungry 😅' },
      { id: 23, username: 'chef_mode', text: 'Perfectly done 👌' },
      { id: 24, username: 'yum_daily', text: 'Food goals 😍' },
      { id: 25, username: 'home_cook', text: 'Recipe please!' },
      { id: 26, username: 'snack_attack', text: 'Would eat this anytime' },
      { id: 27, username: 'food_cravings', text: 'Looks so fresh' },
      { id: 28, username: 'eat_repeat', text: '🔥🔥🔥' },
      { id: 29, username: 'plate_magic', text: 'Love the presentation' },
      { id: 30, username: 'flavor_hunt', text: 'So satisfying' },
    ],
  }
  ],
};
const user4 = {
  users: [
    {
      id: 4,
      username: "study.smart",
      name: "Study Smart",
      category: "Education",
      profile: profile4,   
      bio: "Study tips, focus hacks, and daily motivation 📚",
      followers: 15680,
      following: 290,
    },
  ],

  posts: [
    {
      id: 401,
      userId: 4,
      image: study1,
      caption: "Consistency beats cramming 📖",
      likes: 1785,
      createdAt: "2025-12-01",
      comments: [
    {
      id: 4011,
      postId: 401,
      username: "study_hustle",
      text: "So true! Small daily wins add up 💪",
      createdAt: "2025-12-01"
    },
    {
      id: 4012,
      postId: 401,
      username: "focus_mode",
      text: "Consistency over last-minute panic every time 📚✨",
      createdAt: "2025-12-01"
    },
    {
      id: 4013,
      postId: 401,
      username: "daily_grind",
      text: "Needed this reminder today 🙏",
      createdAt: "2025-12-01"
    },
    {
      id: 4014,
      postId: 401,
      username: "organized_mind",
      text: "Cramming never worked for me anyway 😅",
      createdAt: "2025-12-01"
    },
    {
      id: 4015,
      postId: 401,
      username: "study_vibes",
      text: "Consistency is the secret sauce 🔑",
      createdAt: "2025-12-01"
    },
    {
      id: 4016,
      postId: 401,
      username: "plan_and_repeat",
      text: "Daily progress > panic sessions 💡",
      createdAt: "2025-12-01"
    },
    {
      id: 4017,
      postId: 401,
      username: "mindful_learning",
      text: "This hits different during exam season 📖💫",
      createdAt: "2025-12-01"
    },
    {
      id: 4018,
      postId: 401,
      username: "steady_focus",
      text: "Consistency always wins in the long run 🌟",
      createdAt: "2025-12-01"
    },
    {
      id: 4019,
      postId: 401,
      username: "study_daily",
      text: "Little by little, day by day 👏",
      createdAt: "2025-12-01"
    },
    {
      id: 4020,
      postId: 401,
      username: "learning_path",
      text: "Cramming is stressful, consistency is peace 😌",
      createdAt: "2025-12-01"
    }
  ]
    },
    {
      id: 402,
      userId: 4,
      image: study2,
      caption: "Your future self will thank you ✨",
      likes: 1620,
      createdAt: "2025-12-02",
      comments: [
    {
      id: 4021,
      postId: 402,
      username: "goal_getter",
      text: "Yes! Thinking long-term always pays off 💪",
      createdAt: "2025-12-02"
    },
    {
      id: 4022,
      postId: 402,
      username: "mindset_master",
      text: "Every small step counts ✨",
      createdAt: "2025-12-02"
    },
    {
      id: 4023,
      postId: 402,
      username: "future_focused",
      text: "Needed this reminder today 🙏",
      createdAt: "2025-12-02"
    },
    {
      id: 4024,
      postId: 402,
      username: "daily_progress",
      text: "Invest in yourself, always 🌱",
      createdAt: "2025-12-02"
    },
    {
      id: 4025,
      postId: 402,
      username: "growth_mindset",
      text: "This just motivated me to keep going 💫",
      createdAt: "2025-12-02"
    },
    {
      id: 4026,
      postId: 402,
      username: "plan_and_execute",
      text: "Future me will be grateful for today’s effort ✨",
      createdAt: "2025-12-02"
    },
    {
      id: 4027,
      postId: 402,
      username: "steady_steps",
      text: "Small consistent actions = big results 👏",
      createdAt: "2025-12-02"
    },
    {
      id: 4028,
      postId: 402,
      username: "motivated_mind",
      text: "This is why I keep a daily routine 💛",
      createdAt: "2025-12-02"
    },
    {
      id: 4029,
      postId: 402,
      username: "success_journey",
      text: "Thinking ahead always changes the game 🏆",
      createdAt: "2025-12-02"
    },
    {
      id: 4030,
      postId: 402,
      username: "future_ready",
      text: "Such a simple but powerful reminder 🌟",
      createdAt: "2025-12-02"
    }
  ]
    },
    {
      id: 403,
      userId: 4,
      image: study3,
      caption: "Focus > motivation 🧠",
      likes: 2145,
      createdAt: "2025-12-03",
      comments: [
    {
      id: 4031,
      postId: 403,
      username: "laser_focus",
      text: "Focus always wins over fleeting motivation 💪",
      createdAt: "2025-12-03"
    },
    {
      id: 4032,
      postId: 403,
      username: "discipline_daily",
      text: "Discipline > mood every single time ✨",
      createdAt: "2025-12-03"
    },
    {
      id: 4033,
      postId: 403,
      username: "mindful_steps",
      text: "Motivation comes and goes, focus stays 👏",
      createdAt: "2025-12-03"
    },
    {
      id: 4034,
      postId: 403,
      username: "steady_mind",
      text: "Needed this reminder today 🧠💛",
      createdAt: "2025-12-03"
    },
    {
      id: 4035,
      postId: 403,
      username: "daily_grind",
      text: "Focus is the real superpower 🔑",
      createdAt: "2025-12-03"
    },
    {
      id: 4036,
      postId: 403,
      username: "longterm_vision",
      text: "Motivation fades, habits last 💫",
      createdAt: "2025-12-03"
    },
    {
      id: 4037,
      postId: 403,
      username: "goal_setter",
      text: "Focus is my daily mantra 👏",
      createdAt: "2025-12-03"
    },
    {
      id: 4038,
      postId: 403,
      username: "mindset_maven",
      text: "This post speaks the truth 🧠✨",
      createdAt: "2025-12-03"
    },
    {
      id: 4039,
      postId: 403,
      username: "productivity_hacks",
      text: "Consistency + focus > motivation any day 📚",
      createdAt: "2025-12-03"
    },
    {
      id: 4040,
      postId: 403,
      username: "focus_first",
      text: "Mood comes and goes, focus builds empires 🔥",
      createdAt: "2025-12-03"
    }
  ]
    },
    {
      id: 404,
      userId: 4,
      image: study4,
      caption: "One step at a time 👣",
      likes: 1490,
      createdAt: "2025-12-04",
      comments: [
    {
      id: 4041,
      postId: 404,
      username: "steady_progress",
      text: "Exactly! Small steps lead to big wins 💪",
      createdAt: "2025-12-04"
    },
    {
      id: 4042,
      postId: 404,
      username: "keep_moving",
      text: "Slow and steady really does win the race 🏃‍♂️✨",
      createdAt: "2025-12-04"
    },
    {
      id: 4043,
      postId: 404,
      username: "daily_grind",
      text: "This is my reminder to stay consistent 🙏",
      createdAt: "2025-12-04"
    },
    {
      id: 4044,
      postId: 404,
      username: "mindset_matters",
      text: "Little progress is still progress 👏",
      createdAt: "2025-12-04"
    },
    {
      id: 4045,
      postId: 404,
      username: "goal_journey",
      text: "One step at a time = one day closer 🌟",
      createdAt: "2025-12-04"
    },
    {
      id: 4046,
      postId: 404,
      username: "keep_going",
      text: "Consistency > speed every time 💛",
      createdAt: "2025-12-04"
    },
    {
      id: 4047,
      postId: 404,
      username: "focused_mind",
      text: "These little wins add up fast 👣✨",
      createdAt: "2025-12-04"
    },
    {
      id: 4048,
      postId: 404,
      username: "growth_journey",
      text: "Patience + persistence = success 💪",
      createdAt: "2025-12-04"
    },
    {
      id: 4049,
      postId: 404,
      username: "step_by_step",
      text: "Needed this today, thank you 💫",
      createdAt: "2025-12-04"
    },
    {
      id: 4050,
      postId: 404,
      username: "progress_daily",
      text: "One step at a time keeps overwhelm away 😌",
      createdAt: "2025-12-04"
    }
  ]
    },
    {
      id: 405,
      userId: 4,
      image: study5,
      caption: "Turn effort into results 🎯",
      likes: 2360,
      createdAt: "2025-12-05",
      comments: [
    {
      id: 4051,
      postId: 405,
      username: "goal_chaser",
      text: "Yes! Hard work always pays off 💪",
      createdAt: "2025-12-05"
    },
    {
      id: 4052,
      postId: 405,
      username: "effort_matters",
      text: "Consistency + effort = results every time ✨",
      createdAt: "2025-12-05"
    },
    {
      id: 4053,
      postId: 405,
      username: "results_focused",
      text: "Love this reminder to stay committed 🙌",
      createdAt: "2025-12-05"
    },
    {
      id: 4054,
      postId: 405,
      username: "daily_hustle",
      text: "Effort turns into success if you don’t quit 👏",
      createdAt: "2025-12-05"
    },
    {
      id: 4055,
      postId: 405,
      username: "goal_setter",
      text: "Motivation is temporary, effort is permanent 💡",
      createdAt: "2025-12-05"
    },
    {
      id: 4056,
      postId: 405,
      username: "focus_and_grind",
      text: "This is my mantra for the week 🔥",
      createdAt: "2025-12-05"
    },
    {
      id: 4057,
      postId: 405,
      username: "results_daily",
      text: "Effort compounds if you stick to it 🌱",
      createdAt: "2025-12-05"
    },
    {
      id: 4058,
      postId: 405,
      username: "persistent_mind",
      text: "Turning sweat into achievements 👏🎯",
      createdAt: "2025-12-05"
    },
    {
      id: 4059,
      postId: 405,
      username: "growth_mode",
      text: "Every effort counts, no matter how small 💛",
      createdAt: "2025-12-05"
    },
    {
      id: 4060,
      postId: 405,
      username: "focus_first",
      text: "Effort today = results tomorrow ✨",
      createdAt: "2025-12-05"
    }
  ]
    },
    {
  id: 406,
  userId: 4,
  image: study6,
  caption: "Focus today, shine tomorrow ✨",
  likes: 2400,
  createdAt: "2025-12-11",
  comments: [
    {
      id: 4061,
      postId: 406,
      username: "goal_digger",
      text: "Focus now, results later 💪✨",
      createdAt: "2025-12-11"
    },
    {
      id: 4062,
      postId: 406,
      username: "daily_grind",
      text: "This is exactly the mindset we need 🙌",
      createdAt: "2025-12-11"
    },
    {
      id: 4063,
      postId: 406,
      username: "steady_steps",
      text: "Small focused actions today = big shine tomorrow 🌟",
      createdAt: "2025-12-11"
    },
    {
      id: 4064,
      postId: 406,
      username: "future_self",
      text: "Needed this motivation today 💛",
      createdAt: "2025-12-11"
    },
    {
      id: 4065,
      postId: 406,
      username: "mindset_maven",
      text: "Focus is the ultimate superpower 🧠✨",
      createdAt: "2025-12-11"
    },
    {
      id: 4066,
      postId: 406,
      username: "goal_setter",
      text: "Shining tomorrow starts with discipline today 👏",
      createdAt: "2025-12-11"
    },
    {
      id: 4067,
      postId: 406,
      username: "progress_daily",
      text: "Love this reminder to stay consistent 🔑",
      createdAt: "2025-12-11"
    },
    {
      id: 4068,
      postId: 406,
      username: "focus_first",
      text: "Focus beats motivation every time 💫",
      createdAt: "2025-12-11"
    },
    {
      id: 4069,
      postId: 406,
      username: "growth_mindset",
      text: "Shining tomorrow is all about what we do today 🌱",
      createdAt: "2025-12-11"
    },
    {
      id: 4070,
      postId: 406,
      username: "discipline_daily",
      text: "Focus now, shine forever ✨💪",
      createdAt: "2025-12-11"
    }
  ]
},
  ],
   reels: [
      {
        username: 'study.smart',
        reel: reels4,
        image: profile4,
        caption: 'Focus. Learn. Repeat.',
        comments: [
      { id: 31, username: 'study_mode', text: 'Productivity vibes 📚' },
      { id: 32, username: 'exam_ready', text: 'Needed this motivation' },
      { id: 33, username: 'learn_daily', text: 'Discipline > motivation' },
      { id: 34, username: 'note_master', text: 'Clean setup 👌' },
      { id: 35, username: 'focus_time', text: 'Let’s grind 💻' },
      { id: 36, username: 'student_life', text: 'So relatable' },
      { id: 37, username: 'brain_power', text: 'Study goals 🔥' },
      { id: 38, username: 'smart_steps', text: 'Consistency matters' },
      { id: 39, username: 'deep_work', text: 'Locked in 🔒' },
      { id: 40, username: 'daily_revision', text: 'Inspired 💯' },
    ],
  }
  ],
};
const user5 = {
  users: [
    {
      id: 5,
      username: "wander.daily",
      name: "Wander Daily",
      category: "Travel",
      profile: profile5,    
      bio: "Chasing places, not things ✈️🌍",
      followers: 26450,
      following: 610,
    },
  ],

  posts: [
    {
      id: 501,
      userId: 5,
      image: wander1,
      caption: "Collect moments, not miles 🌄",
      likes: 3250,
      createdAt: "2025-12-01",
      comments: [
    {
      id: 5011,
      postId: 501,
      username: "wanderlust_queen",
      text: "Absolutely! Experiences over everything ✨",
      createdAt: "2025-12-01"
    },
    {
      id: 5012,
      postId: 501,
      username: "adventure_seeker",
      text: "This is the vibe I live for 🌄💛",
      createdAt: "2025-12-01"
    },
    {
      id: 5013,
      postId: 501,
      username: "travel_junkie",
      text: "Moments > miles, always 😍",
      createdAt: "2025-12-01"
    },
    {
      id: 5014,
      postId: 501,
      username: "explore_everywhere",
      text: "Living for these kinds of memories 🙌",
      createdAt: "2025-12-01"
    },
    {
      id: 5015,
      postId: 501,
      username: "sunset_chaser",
      text: "Moments like these are priceless 🌅",
      createdAt: "2025-12-01"
    },
    {
      id: 5016,
      postId: 501,
      username: "journey_junkie",
      text: "Collecting memories one adventure at a time ✨",
      createdAt: "2025-12-01"
    },
    {
      id: 5017,
      postId: 501,
      username: "mountain_moments",
      text: "This makes me want to pack my bags now 😍",
      createdAt: "2025-12-01"
    },
    {
      id: 5018,
      postId: 501,
      username: "nature_addict",
      text: "Exactly, experiences over destinations 🌿",
      createdAt: "2025-12-01"
    },
    {
      id: 5019,
      postId: 501,
      username: "traveler_soul",
      text: "Memories last forever ✨🌄",
      createdAt: "2025-12-01"
    },
    {
      id: 5020,
      postId: 501,
      username: "sunset_seekers",
      text: "This post speaks to my soul 🌅💛",
      createdAt: "2025-12-01"
    }
  ]
    },
    {
      id: 502,
      userId: 5,
      image: wander2,
      caption: "Wander where the Wi-Fi is weak 📵",
      likes: 2890,
      createdAt: "2025-12-02",
     comments: [
    {
      id: 5021,
      postId: 502,
      username: "disconnect_daily",
      text: "Yes! Real life > notifications 🙌",
      createdAt: "2025-12-02"
    },
    {
      id: 5022,
      postId: 502,
      username: "adventure_mode",
      text: "Offline vibes are the best vibes 🌄✨",
      createdAt: "2025-12-02"
    },
    {
      id: 5023,
      postId: 502,
      username: "nature_lover",
      text: "Finally, a post I can relate to 😍",
      createdAt: "2025-12-02"
    },
    {
      id: 5024,
      postId: 502,
      username: "explore_more",
      text: "Nothing beats a place with no bars but full of beauty 🌿",
      createdAt: "2025-12-02"
    },
    {
      id: 5025,
      postId: 502,
      username: "wanderlust_soul",
      text: "Offline adventures are the most memorable ✨",
      createdAt: "2025-12-02"
    },
    {
      id: 5026,
      postId: 502,
      username: "remote_vibes",
      text: "Time to unplug and explore 🌄📵",
      createdAt: "2025-12-02"
    },
    {
      id: 5027,
      postId: 502,
      username: "scenic_routes",
      text: "Love posts that remind me to disconnect 💛",
      createdAt: "2025-12-02"
    },
    {
      id: 5028,
      postId: 502,
      username: "offgrid_adventures",
      text: "The best kind of wandering 🌿✨",
      createdAt: "2025-12-02"
    },
    {
      id: 5029,
      postId: 502,
      username: "travel_free",
      text: "Wi-Fi off, soul fully charged 😌🌄",
      createdAt: "2025-12-02"
    },
    {
      id: 5030,
      postId: 502,
      username: "digital_detoxer",
      text: "Exactly! Disconnect to reconnect 🌿💛",
      createdAt: "2025-12-02"
    }
  ]
    },
    {
      id: 503,
      userId: 5,
      image: wander3,
      caption: "Adventure begins at the edge of comfort 🧭",
      likes: 4120,
      createdAt: "2025-12-03",
      comments: [
    {
      id: 5031,
      postId: 503,
      username: "explorer_soul",
      text: "Yes! Growth happens outside the comfort zone 💪",
      createdAt: "2025-12-03"
    },
    {
      id: 5032,
      postId: 503,
      username: "wanderlust_junkie",
      text: "Adventure is calling, and I must go 🌄✨",
      createdAt: "2025-12-03"
    },
    {
      id: 5033,
      postId: 503,
      username: "brave_steps",
      text: "Pushing limits is where the magic happens ✨🧭",
      createdAt: "2025-12-03"
    },
    {
      id: 5034,
      postId: 503,
      username: "adrenaline_seekers",
      text: "Love this! Comfort zones are overrated 😎",
      createdAt: "2025-12-03"
    },
    {
      id: 5035,
      postId: 503,
      username: "offbeat_paths",
      text: "Adventure = stepping into the unknown 🌿",
      createdAt: "2025-12-03"
    },
    {
      id: 5036,
      postId: 503,
      username: "journey_junkie",
      text: "Edge of comfort = start of epic stories 🧭✨",
      createdAt: "2025-12-03"
    },
    {
      id: 5037,
      postId: 503,
      username: "fearless_traveler",
      text: "Exactly! Life begins where fear ends 💛",
      createdAt: "2025-12-03"
    },
    {
      id: 5038,
      postId: 503,
      username: "explore_daily",
      text: "Challenge yourself, discover the world 🌄",
      createdAt: "2025-12-03"
    },
    {
      id: 5039,
      postId: 503,
      username: "adventure_seekers",
      text: "Comfort zones are cozy, but adventures are priceless 🌟",
      createdAt: "2025-12-03"
    },
    {
      id: 5040,
      postId: 503,
      username: "trailblazer_soul",
      text: "This is why I love to explore 🧭✨",
      createdAt: "2025-12-03"
    }
  ]
    },
    {
      id: 504,
      userId: 5,
      image: wander4,
      caption: "Sunsets hit different on the road 🌅",
      likes: 2715,
      createdAt: "2025-12-04",
      comments: [
    {
      id: 5041,
      postId: 504,
      username: "sunset_chaser",
      text: "Absolutely! Sunsets are magical everywhere, but travel vibes are unmatched 🌅✨",
      createdAt: "2025-12-04"
    },
    {
      id: 5042,
      postId: 504,
      username: "wanderlust_soul",
      text: "Road trips + sunsets = pure bliss 😍",
      createdAt: "2025-12-04"
    },
    {
      id: 5043,
      postId: 504,
      username: "nature_addict",
      text: "Every sunset tells a different story 🌄💛",
      createdAt: "2025-12-04"
    },
    {
      id: 5044,
      postId: 504,
      username: "adventure_daily",
      text: "Sunsets like this make the journey worthwhile ✨",
      createdAt: "2025-12-04"
    },
    {
      id: 5045,
      postId: 504,
      username: "travel_junkie",
      text: "The colors on the road are always more vibrant 😌🌅",
      createdAt: "2025-12-04"
    },
    {
      id: 5046,
      postId: 504,
      username: "scenic_routes",
      text: "This makes me want to go on a sunset drive now 🌄💫",
      createdAt: "2025-12-04"
    },
    {
      id: 5047,
      postId: 504,
      username: "explore_everywhere",
      text: "Sunset + road = therapy for the soul 💛",
      createdAt: "2025-12-04"
    },
    {
      id: 5048,
      postId: 504,
      username: "digital_nomad",
      text: "No Wi-Fi needed for this kind of beauty 🌅✨",
      createdAt: "2025-12-04"
    },
    {
      id: 5049,
      postId: 504,
      username: "journey_junkie",
      text: "Sunsets are always better when you’re wandering 🌄💛",
      createdAt: "2025-12-04"
    },
    {
      id: 5050,
      postId: 504,
      username: "adventure_seeker",
      text: "Road trips + sunsets = memories forever 🌅✨",
      createdAt: "2025-12-04"
    }
  ]
    },
    {
      id: 505,
      userId: 5,
      image: wander5,
      caption: "Take the scenic route 🛣️",
      likes: 4635,
      createdAt: "2025-12-05",
      comments: [
    {
      id: 5051,
      postId: 505,
      username: "wanderlust_lover",
      text: "Always worth it for the views 😍🌿",
      createdAt: "2025-12-05"
    },
    {
      id: 5052,
      postId: 505,
      username: "roadtrip_addict",
      text: "Scenic routes > shortcuts any day 🛣️✨",
      createdAt: "2025-12-05"
    },
    {
      id: 5053,
      postId: 505,
      username: "nature_explorer",
      text: "The journey is the destination 🌄💛",
      createdAt: "2025-12-05"
    },
    {
      id: 5054,
      postId: 505,
      username: "travel_junkie",
      text: "Views like this make detours totally worth it 😌",
      createdAt: "2025-12-05"
    },
    {
      id: 5055,
      postId: 505,
      username: "offbeat_paths",
      text: "Sometimes the longer road shows you the best stories ✨🛣️",
      createdAt: "2025-12-05"
    },
    {
      id: 5056,
      postId: 505,
      username: "scenic_vibes",
      text: "Nothing beats a scenic drive through nature 🌿🌄",
      createdAt: "2025-12-05"
    },
    {
      id: 5057,
      postId: 505,
      username: "journey_junkie",
      text: "Detours create the best memories 💛🛣️",
      createdAt: "2025-12-05"
    },
    {
      id: 5058,
      postId: 505,
      username: "explore_daily",
      text: "Scenic routes = soul therapy 🌄✨",
      createdAt: "2025-12-05"
    },
    {
      id: 5059,
      postId: 505,
      username: "wanderlust_soul",
      text: "The longer route always has better surprises 😍",
      createdAt: "2025-12-05"
    },
    {
      id: 5060,
      postId: 505,
      username: "adventure_mode",
      text: "Take the scenic route and soak it all in 🌿🛣️",
      createdAt: "2025-12-05"
    }
  ]
    },
    {
  id: 506,
  userId: 5,
  image: wander6,
  caption: "Adventure awaits 🌄",
  likes: 4700,
  createdAt: "2025-12-12",
  comments: [
    {
      id: 5061,
      postId: 506,
      username: "wanderlust_soul",
      text: "Always! The world is waiting to be explored 🌎💛",
      createdAt: "2025-12-12"
    },
    {
      id: 5062,
      postId: 506,
      username: "trailblazer_daily",
      text: "Pack your bags, the adventure starts now ✨🗺️",
      createdAt: "2025-12-12"
    },
    {
      id: 5063,
      postId: 506,
      username: "nature_addict",
      text: "Every sunrise brings a new adventure 🌄💛",
      createdAt: "2025-12-12"
    },
    {
      id: 5064,
      postId: 506,
      username: "offbeat_paths",
      text: "Adventure is calling, and I must go! 🏞️✨",
      createdAt: "2025-12-12"
    },
    {
      id: 5065,
      postId: 506,
      username: "explore_everywhere",
      text: "The best stories come from spontaneous trips 🌍💫",
      createdAt: "2025-12-12"
    },
    {
      id: 5066,
      postId: 506,
      username: "journey_junkie",
      text: "Adventure awaits those who take the first step 👣✨",
      createdAt: "2025-12-12"
    },
    {
      id: 5067,
      postId: 506,
      username: "adventure_seeker",
      text: "New places, new memories 🌄💛",
      createdAt: "2025-12-12"
    },
    {
      id: 5068,
      postId: 506,
      username: "scenic_routes",
      text: "Can’t wait to hit the trails and see what’s out there 🏞️✨",
      createdAt: "2025-12-12"
    },
    {
      id: 5069,
      postId: 506,
      username: "wanderlust_daily",
      text: "Adventure is the best teacher 🌍💡",
      createdAt: "2025-12-12"
    },
    {
      id: 5070,
      postId: 506,
      username: "roadtrip_addict",
      text: "Let’s chase sunsets and new horizons 🌄💛",
      createdAt: "2025-12-12"
    }
  ]
},
  ],
   reels: [
      {
        username: 'wander.daily',
        reel: reels5,
        image: profile5,
        caption: 'Lost in the moment.',
        comments: [
      { id: 41, username: 'travel_bug', text: 'Take me there 🌍' },
      { id: 42, username: 'roam_free', text: 'Absolutely stunning 😍' },
      { id: 43, username: 'trip_vibes', text: 'Dream destination' },
      { id: 44, username: 'nature_seek', text: 'So peaceful' },
      { id: 45, username: 'travel_more', text: 'Bucket list ✔️' },
      { id: 46, username: 'explore_now', text: 'Love this view' },
      { id: 47, username: 'pathfinder', text: 'Adventure time!' },
      { id: 48, username: 'sunset_chaser', text: 'Beautiful moment ✨' },
      { id: 49, username: 'journey_on', text: 'Pure magic' },
      { id: 50, username: 'escape_daily', text: 'So calming' },
    ],
  }
  ],
};
const user6 = {
  users: [
    {
      id: 6,
      username: "code.daily",
      name: "Code Daily",
      category: "Technology",
      profile: profile6,  
      bio: "Daily coding tips, dev motivation & tech insights 💻🚀",
      followers: 19890,
      following: 380,
    },
  ],

  posts: [
    {
      id: 601,
      userId: 6,
      image: code1,
      caption: "Write code. Break things. Learn fast. 🧠",
      likes: 2340,
      createdAt: "2025-12-01",
      comments: [
    {
      id: 6011,
      postId: 601,
      username: "dev_guru",
      text: "Truth! Nothing teaches faster than a bug 😅💡",
      createdAt: "2025-12-01"
    },
    {
      id: 6012,
      postId: 601,
      username: "code_ninja",
      text: "Breaking things = learning things 👏🧠",
      createdAt: "2025-12-01"
    },
    {
      id: 6013,
      postId: 601,
      username: "debug_master",
      text: "Every crash is just a lesson in disguise 💻✨",
      createdAt: "2025-12-01"
    },
    {
      id: 6014,
      postId: 601,
      username: "stack_overflower",
      text: "Love this mindset for developers 🙌",
      createdAt: "2025-12-01"
    },
    {
      id: 6015,
      postId: 601,
      username: "hack_the_planet",
      text: "Break. Fix. Repeat. The cycle of growth 🔄💡",
      createdAt: "2025-12-01"
    },
    {
      id: 6016,
      postId: 601,
      username: "code_crusher",
      text: "Learning fast is the only way to level up 🚀",
      createdAt: "2025-12-01"
    },
    {
      id: 6017,
      postId: 601,
      username: "dev_daily",
      text: "The best devs aren’t afraid to break stuff 😎",
      createdAt: "2025-12-01"
    },
    {
      id: 6018,
      postId: 601,
      username: "fullstack_fan",
      text: "Crashes today, features tomorrow ✨💻",
      createdAt: "2025-12-01"
    },
    {
      id: 6019,
      postId: 601,
      username: "coding_junkie",
      text: "Every bug is just another lesson 🧠💡",
      createdAt: "2025-12-01"
    },
    {
      id: 6020,
      postId: 601,
      username: "tech_savant",
      text: "Write code, break stuff, grow faster 🚀",
      createdAt: "2025-12-01"
    }
  ]
    },
    {
      id: 602,
      userId: 6,
      image: code2,
      caption: "Consistency is the best framework 🔁",
      likes: 1985,
      createdAt: "2025-12-02",
      comments: [
    {
      id: 6021,
      postId: 602,
      username: "daily_coder",
      text: "Yes! Small daily commits beat huge one-time pushes 💪",
      createdAt: "2025-12-02"
    },
    {
      id: 6022,
      postId: 602,
      username: "code_disciple",
      text: "Consistency > all fancy frameworks 🙌",
      createdAt: "2025-12-02"
    },
    {
      id: 6023,
      postId: 602,
      username: "dev_life",
      text: "True! Daily practice is the real game-changer 🚀",
      createdAt: "2025-12-02"
    },
    {
      id: 6024,
      postId: 602,
      username: "algorithm_ace",
      text: "Frameworks can help, but consistency builds mastery 🧠✨",
      createdAt: "2025-12-02"
    },
    {
      id: 6025,
      postId: 602,
      username: "debug_daily",
      text: "Code a little every day, win a lot in the long run 🔁💻",
      createdAt: "2025-12-02"
    },
    {
      id: 6026,
      postId: 602,
      username: "tech_grind",
      text: "Consistency is literally the best upgrade you can deploy 💡",
      createdAt: "2025-12-02"
    },
    {
      id: 6027,
      postId: 602,
      username: "stack_master",
      text: "Daily effort compounds faster than any framework 🔥",
      createdAt: "2025-12-02"
    },
    {
      id: 6028,
      postId: 602,
      username: "fullstack_fan",
      text: "Consistency: the underrated superpower of devs 💪💻",
      createdAt: "2025-12-02"
    },
    {
      id: 6029,
      postId: 602,
      username: "code_crusader",
      text: "One commit a day keeps stagnation away ✨",
      createdAt: "2025-12-02"
    },
    {
      id: 6030,
      postId: 602,
      username: "tech_savant",
      text: "Consistency turns beginners into pros 🔁🧠",
      createdAt: "2025-12-02"
    }
  ]
    },
    {
      id: 603,
      userId: 6,
      image: code3,
      caption: "Debugging is part of the process 🐞",
      likes: 2675,
      createdAt: "2025-12-03",
      comments: [
    {
      id: 6031,
      postId: 603,
      username: "bug_slayer",
      text: "Nothing teaches faster than hunting a tricky bug 😅🐞",
      createdAt: "2025-12-03"
    },
    {
      id: 6032,
      postId: 603,
      username: "code_ninja",
      text: "Debug today, deploy tomorrow 💻✨",
      createdAt: "2025-12-03"
    },
    {
      id: 6033,
      postId: 603,
      username: "dev_life",
      text: "Every bug fixed is a mini victory 🙌🐞",
      createdAt: "2025-12-03"
    },
    {
      id: 6034,
      postId: 603,
      username: "stack_overflower",
      text: "Debugging isn’t annoying, it’s educational 🧠💡",
      createdAt: "2025-12-03"
    },
    {
      id: 6035,
      postId: 603,
      username: "fullstack_fan",
      text: "Bug today, feature tomorrow 🚀",
      createdAt: "2025-12-03"
    },
    {
      id: 6036,
      postId: 603,
      username: "debug_master",
      text: "Debugging is just part of the journey to perfection 💻✨",
      createdAt: "2025-12-03"
    },
    {
      id: 6037,
      postId: 603,
      username: "code_crusader",
      text: "Bugs aren’t problems, they’re lessons 😎🐞",
      createdAt: "2025-12-03"
    },
    {
      id: 6038,
      postId: 603,
      username: "tech_savant",
      text: "Every error is a step closer to mastery 💡💻",
      createdAt: "2025-12-03"
    },
    {
      id: 6039,
      postId: 603,
      username: "daily_coder",
      text: "Debugging is where real learning happens 🐞✨",
      createdAt: "2025-12-03"
    },
    {
      id: 6040,
      postId: 603,
      username: "hack_the_planet",
      text: "Embrace the bugs—they make you a better dev 💻💪",
      createdAt: "2025-12-03"
    }
  ]
    },
    {
      id: 604,
      userId: 6,
      image: code4,
      caption: "Clean code > clever code ✨",
      likes: 1850,
      createdAt: "2025-12-04",
      comments: [
    {
      id: 6041,
      postId: 604,
      username: "refactor_king",
      text: "Always! Readable code saves lives 💻✨",
      createdAt: "2025-12-04"
    },
    {
      id: 6042,
      postId: 604,
      username: "code_cleanser",
      text: "Clever hacks are fun, but clean code lasts 😌",
      createdAt: "2025-12-04"
    },
    {
      id: 6043,
      postId: 604,
      username: "dev_life",
      text: "Clarity > complexity every single time 💡",
      createdAt: "2025-12-04"
    },
    {
      id: 6044,
      postId: 604,
      username: "fullstack_fan",
      text: "Maintainable code > showing off skills 😎✨",
      createdAt: "2025-12-04"
    },
    {
      id: 6045,
      postId: 604,
      username: "debug_master",
      text: "Clean code makes debugging 10x easier 💻💪",
      createdAt: "2025-12-04"
    },
    {
      id: 6046,
      postId: 604,
      username: "stack_overflower",
      text: "Elegance is great, but simplicity rules 🧠✨",
      createdAt: "2025-12-04"
    },
    {
      id: 6047,
      postId: 604,
      username: "code_crusader",
      text: "Readable code is a gift to future devs 💻🎁",
      createdAt: "2025-12-04"
    },
    {
      id: 6048,
      postId: 604,
      username: "tech_savant",
      text: "Clever code is risky; clean code is reliable 🧹💡",
      createdAt: "2025-12-04"
    },
    {
      id: 6049,
      postId: 604,
      username: "daily_coder",
      text: "Clean code is a habit, not a style 😎✨",
      createdAt: "2025-12-04"
    },
    {
      id: 6050,
      postId: 604,
      username: "hack_the_planet",
      text: "Every team loves clean code over clever tricks 💻💛",
      createdAt: "2025-12-04"
    }
  ]
    },
    {
      id: 605,
      userId: 6,
      image: code5,
      caption: "Learn once, use forever 📚",
      likes: 3120,
      createdAt: "2025-12-05",
      comments: [
    {
      id: 6051,
      postId: 605,
      username: "dev_student",
      text: "Truth! Concepts stick way longer than shortcuts 💡📚",
      createdAt: "2025-12-05"
    },
    {
      id: 6052,
      postId: 605,
      username: "code_learner",
      text: "Invest time in fundamentals, and they pay off forever 💻✨",
      createdAt: "2025-12-05"
    },
    {
      id: 6053,
      postId: 605,
      username: "stack_overflower",
      text: "Once you truly understand it, it’s in your toolkit for life 🧠📚",
      createdAt: "2025-12-05"
    },
    {
      id: 6054,
      postId: 605,
      username: "fullstack_fan",
      text: "Learning the hard way once beats repeating mistakes forever 😎💡",
      createdAt: "2025-12-05"
    },
    {
      id: 6055,
      postId: 605,
      username: "debug_master",
      text: "Master it once, and it becomes second nature 💻✨",
      createdAt: "2025-12-05"
    },
    {
      id: 6056,
      postId: 605,
      username: "tech_savant",
      text: "Knowledge that sticks is worth more than code you forget 💡📚",
      createdAt: "2025-12-05"
    },
    {
      id: 6057,
      postId: 605,
      username: "daily_coder",
      text: "Fundamentals are forever, shortcuts are temporary 🧠✨",
      createdAt: "2025-12-05"
    },
    {
      id: 6058,
      postId: 605,
      username: "code_crusader",
      text: "Learn once, avoid repeating bugs forever 😎🐞",
      createdAt: "2025-12-05"
    },
    {
      id: 6059,
      postId: 605,
      username: "hack_the_planet",
      text: "Skills built on strong foundations last forever 💻💛",
      createdAt: "2025-12-05"
    },
    {
      id: 6060,
      postId: 605,
      username: "coding_junkie",
      text: "One deep learning session > a hundred shallow tries 💡📚",
      createdAt: "2025-12-05"
    }
  ]
    },
    {
  id: 602,
  userId: 6,
  image: code6,
  caption: "Debug. Repeat. Grow. 💻",
  likes: 2420,
  createdAt: "2025-12-08",
  comments: [
    {
      id: 6021,
      postId: 602,
      username: "bug_slayer",
      text: "Debugging is where the real magic happens 🐞💡",
      createdAt: "2025-12-08"
    },
    {
      id: 6022,
      postId: 602,
      username: "code_ninja",
      text: "Every bug fixed is a step forward 🚀",
      createdAt: "2025-12-08"
    },
    {
      id: 6023,
      postId: 602,
      username: "dev_life",
      text: "Repeat, refine, grow—love this mantra 💻✨",
      createdAt: "2025-12-08"
    },
    {
      id: 6024,
      postId: 602,
      username: "stack_overflower",
      text: "Debug today, deploy tomorrow 🧠💡",
      createdAt: "2025-12-08"
    },
    {
      id: 6025,
      postId: 602,
      username: "fullstack_fan",
      text: "Growth happens outside comfort zones—and inside bugs 😎",
      createdAt: "2025-12-08"
    },
    {
      id: 6026,
      postId: 602,
      username: "debug_master",
      text: "Every error is a lesson in disguise 🐞✨",
      createdAt: "2025-12-08"
    },
    {
      id: 6027,
      postId: 602,
      username: "code_crusader",
      text: "Debug. Repeat. Grow. The life of a dev 💻💪",
      createdAt: "2025-12-08"
    },
    {
      id: 6028,
      postId: 602,
      username: "tech_savant",
      text: "Crashes today, features tomorrow 🚀💡",
      createdAt: "2025-12-08"
    },
    {
      id: 6029,
      postId: 602,
      username: "daily_coder",
      text: "Every bug conquered = one step closer to mastery 🧠✨",
      createdAt: "2025-12-08"
    },
    {
      id: 6030,
      postId: 602,
      username: "hack_the_planet",
      text: "The debugging grind is real—and worth it 💻🔥",
      createdAt: "2025-12-08"
    }
  ]
}
  ],
   reels: [
      {
        username: 'code.daily',
        reel: reels6,
        image: profile6,
        caption: 'One line at a time. 💻',
        comments: [
      { id: 51, username: 'dev_life', text: 'Coding grind 💻🔥' },
      { id: 52, username: 'bug_hunter', text: 'This is so relatable 😂' },
      { id: 53, username: 'js_master', text: 'Clean workflow' },
      { id: 54, username: 'frontend_fun', text: 'Love the setup' },
      { id: 55, username: 'code_repeat', text: 'One bug at a time' },
      { id: 56, username: 'logic_build', text: 'Consistency matters' },
      { id: 57, username: 'tech_daily', text: 'Developer vibes 😎' },
      { id: 58, username: 'commit_push', text: 'Ship it 🚀' },
      { id: 59, username: 'stack_builder', text: 'Motivating!' },
      { id: 60, username: 'night_coder', text: 'Late night coding hits different' },
    ],
  }
  ],
};

export {user1, user2, user3, user4, user5, user6}
