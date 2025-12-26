import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { 
  ArrowLeft,
  Trophy,
  Medal,
  Star,
  Award,
  Flame,
  Zap,
  Target,
  Crown,
  TrendingUp
} from "lucide-react";

interface GamificationRewardsProps {
  onNavigate: (page: string) => void;
}

export function GamificationRewards({ onNavigate }: GamificationRewardsProps) {
  const badges = [
    { 
      id: 1, 
      name: "Quick Learner", 
      description: "Complete 5 lessons in one day",
      icon: Zap,
      earned: true,
      rarity: "Common",
      date: "Dec 20, 2025"
    },
    { 
      id: 2, 
      name: "Perfect Score", 
      description: "Score 100% on any quiz",
      icon: Star,
      earned: true,
      rarity: "Rare",
      date: "Dec 18, 2025"
    },
    { 
      id: 3, 
      name: "Week Warrior", 
      description: "Maintain a 7-day streak",
      icon: Flame,
      earned: true,
      rarity: "Uncommon",
      date: "Dec 15, 2025"
    },
    { 
      id: 4, 
      name: "Math Master", 
      description: "Achieve 90% mastery in mathematics",
      icon: Award,
      earned: true,
      rarity: "Epic",
      date: "Dec 10, 2025"
    },
    { 
      id: 5, 
      name: "Overachiever", 
      description: "Complete 100 quizzes",
      icon: Trophy,
      earned: true,
      rarity: "Legendary",
      date: "Dec 5, 2025"
    },
    { 
      id: 6, 
      name: "Night Owl", 
      description: "Study after midnight",
      icon: Medal,
      earned: false,
      rarity: "Uncommon",
      date: ""
    },
    { 
      id: 7, 
      name: "Consistency King", 
      description: "Maintain a 30-day streak",
      icon: Crown,
      earned: false,
      rarity: "Legendary",
      date: ""
    },
    { 
      id: 8, 
      name: "All Rounder", 
      description: "Complete all course topics",
      icon: Target,
      earned: false,
      rarity: "Epic",
      date: ""
    },
  ];

  const leaderboard = [
    { rank: 1, name: "David Lee", points: 2850, streak: 14, avatar: "D", color: "bg-purple-500" },
    { rank: 2, name: "Sarah Williams", points: 2720, streak: 12, avatar: "S", color: "bg-blue-500" },
    { rank: 3, name: "Alex Smith", points: 2650, streak: 7, avatar: "A", color: "bg-green-500" },
    { rank: 4, name: "Michael Chen", points: 2480, streak: 10, avatar: "M", color: "bg-orange-500" },
    { rank: 5, name: "Emma Johnson", points: 2390, streak: 8, avatar: "E", color: "bg-pink-500" },
    { rank: 6, name: "You", points: 2285, streak: 7, avatar: "Y", color: "bg-indigo-500", highlight: true },
  ];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "Common": return "bg-gray-100 text-gray-700 border-gray-300";
      case "Uncommon": return "bg-green-100 text-green-700 border-green-300";
      case "Rare": return "bg-blue-100 text-blue-700 border-blue-300";
      case "Epic": return "bg-purple-100 text-purple-700 border-purple-300";
      case "Legendary": return "bg-orange-100 text-orange-700 border-orange-300";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getRankBadge = (rank: number) => {
    if (rank === 1) return <Crown className="w-5 h-5 text-yellow-500" />;
    if (rank === 2) return <Medal className="w-5 h-5 text-gray-400" />;
    if (rank === 3) return <Medal className="w-5 h-5 text-orange-600" />;
    return null;
  };

  const earnedBadges = badges.filter(b => b.earned);
  const lockedBadges = badges.filter(b => !b.earned);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => onNavigate('student-dashboard')}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Rewards & Achievements</h1>
              <p className="text-gray-600">Track your progress and compete with peers</p>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-yellow-400 to-orange-500 text-white">
            <div className="flex items-center justify-between mb-2">
              <Trophy className="w-8 h-8" />
              <span className="text-sm opacity-90">Total Points</span>
            </div>
            <div className="text-3xl font-bold">2,285</div>
            <div className="text-sm opacity-90 mt-1">Rank #6 globally</div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
            <div className="flex items-center justify-between mb-2">
              <Award className="w-8 h-8" />
              <span className="text-sm opacity-90">Badges Earned</span>
            </div>
            <div className="text-3xl font-bold">{earnedBadges.length}/{badges.length}</div>
            <div className="text-sm opacity-90 mt-1">{Math.round((earnedBadges.length / badges.length) * 100)}% complete</div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-orange-500 to-red-500 text-white">
            <div className="flex items-center justify-between mb-2">
              <Flame className="w-8 h-8" />
              <span className="text-sm opacity-90">Current Streak</span>
            </div>
            <div className="text-3xl font-bold">7 Days</div>
            <div className="text-sm opacity-90 mt-1">Keep it going!</div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-8 h-8" />
              <span className="text-sm opacity-90">This Week</span>
            </div>
            <div className="text-3xl font-bold">+285</div>
            <div className="text-sm opacity-90 mt-1">Points earned</div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Leaderboard */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Leaderboard</h2>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Weekly</Button>
                  <Button size="sm">All Time</Button>
                </div>
              </div>

              <div className="space-y-3">
                {leaderboard.map((player) => (
                  <div 
                    key={player.rank}
                    className={`flex items-center gap-4 p-4 rounded-lg transition ${
                      player.highlight 
                        ? 'bg-gradient-to-r from-purple-100 to-blue-100 border-2 border-purple-300' 
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-center w-10 h-10 font-bold text-lg">
                      {getRankBadge(player.rank) || <span className="text-gray-600">#{player.rank}</span>}
                    </div>

                    <div className={`w-12 h-12 ${player.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                      {player.avatar}
                    </div>

                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{player.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Trophy className="w-4 h-4" />
                          {player.points} pts
                        </span>
                        <span className="flex items-center gap-1">
                          <Flame className="w-4 h-4 text-orange-500" />
                          {player.streak} day streak
                        </span>
                      </div>
                    </div>

                    {player.rank <= 3 && (
                      <Badge className={
                        player.rank === 1 ? "bg-yellow-500 text-white" :
                        player.rank === 2 ? "bg-gray-400 text-white" :
                        "bg-orange-600 text-white"
                      }>
                        {player.rank === 1 ? "🥇 Gold" : player.rank === 2 ? "🥈 Silver" : "🥉 Bronze"}
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Streak Tracker */}
          <div>
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-6">Daily Streak</h2>
              
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full mb-4">
                  <Flame className="w-12 h-12 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">7 Days</div>
                <p className="text-gray-600">You're on fire! 🔥</p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Next milestone</span>
                  <span className="font-semibold">14 days</span>
                </div>
                <Progress value={50} className="h-2" />
              </div>

              <div className="grid grid-cols-7 gap-2 mb-4">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-xs text-gray-500 mb-1">{day}</div>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      idx < 7 ? 'bg-orange-500' : 'bg-gray-200'
                    }`}>
                      {idx < 7 && <Flame className="w-4 h-4 text-white" />}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <p className="text-sm text-orange-900">
                  <strong>Streak Bonus:</strong> Keep your streak alive to earn 2x points on all activities!
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Badge Collection */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Badge Collection</h2>
          
          {/* Earned Badges */}
          <Card className="p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">Earned Badges ({earnedBadges.length})</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {earnedBadges.map((badge) => (
                <div 
                  key={badge.id} 
                  className="relative p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl border-2 border-purple-200 hover:shadow-lg transition cursor-pointer"
                >
                  <div className="absolute top-2 right-2">
                    <Badge variant="outline" className={getRarityColor(badge.rarity)}>
                      {badge.rarity}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-3">
                      <badge.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold mb-1">{badge.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{badge.description}</p>
                    <p className="text-xs text-gray-500">Earned {badge.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Locked Badges */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Locked Badges ({lockedBadges.length})</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {lockedBadges.map((badge) => (
                <div 
                  key={badge.id} 
                  className="relative p-6 bg-gray-100 rounded-xl border-2 border-gray-200 opacity-60 hover:opacity-80 transition cursor-pointer"
                >
                  <div className="absolute top-2 right-2">
                    <Badge variant="outline" className={getRarityColor(badge.rarity)}>
                      {badge.rarity}
                    </Badge>
                  </div>
                  
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mb-3">
                      <badge.icon className="w-8 h-8 text-gray-500" />
                    </div>
                    <h4 className="font-semibold mb-1 text-gray-700">{badge.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{badge.description}</p>
                    <p className="text-xs text-gray-500">🔒 Not yet earned</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
