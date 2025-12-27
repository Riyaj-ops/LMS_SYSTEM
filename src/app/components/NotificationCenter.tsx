import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";
import { 
  Bell,
  Trophy,
  TrendingUp,
  AlertCircle,
  BookOpen,
  Users,
  CheckCircle,
  X
} from "lucide-react";

interface Notification {
  id: number;
  type: 'achievement' | 'progress' | 'alert' | 'course' | 'social';
  title: string;
  message: string;
  time: string;
  read: boolean;
  icon: any;
  color: string;
}

export function NotificationCenter({ onClose }: { onClose: () => void }) {
  const notifications: Notification[] = [
    {
      id: 1,
      type: 'achievement',
      title: 'New Badge Earned!',
      message: 'You earned the "Quick Learner" badge for completing 5 lessons in one day.',
      time: '2 hours ago',
      read: false,
      icon: Trophy,
      color: 'text-yellow-500 bg-yellow-50'
    },
    {
      id: 2,
      type: 'progress',
      title: 'Great Progress!',
      message: 'You\'ve improved your Calculus score by 15% this week. Keep it up!',
      time: '5 hours ago',
      read: false,
      icon: TrendingUp,
      color: 'text-green-500 bg-green-50'
    },
    {
      id: 3,
      type: 'alert',
      title: 'Quiz Due Tomorrow',
      message: 'Your Mathematics quiz on Linear Algebra is due tomorrow at 5:00 PM.',
      time: '1 day ago',
      read: false,
      icon: AlertCircle,
      color: 'text-orange-500 bg-orange-50'
    },
    {
      id: 4,
      type: 'course',
      title: 'New Content Available',
      message: 'Integration module is now unlocked in Advanced Mathematics.',
      time: '1 day ago',
      read: true,
      icon: BookOpen,
      color: 'text-blue-500 bg-blue-50'
    },
    {
      id: 5,
      type: 'social',
      title: 'Leaderboard Update',
      message: 'You moved up to rank #6! You\'re only 35 points away from rank #5.',
      time: '2 days ago',
      read: true,
      icon: Users,
      color: 'text-purple-500 bg-purple-50'
    },
    {
      id: 6,
      type: 'achievement',
      title: 'Streak Milestone!',
      message: 'You\'ve maintained a 7-day learning streak. Amazing commitment!',
      time: '3 days ago',
      read: true,
      icon: Trophy,
      color: 'text-orange-500 bg-orange-50'
    },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-end p-4">
      <Card className="w-full max-w-md bg-white shadow-2xl">
        {/* Header */}
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <Bell className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h2 className="font-semibold text-lg">Notifications</h2>
              {unreadCount > 0 && (
                <p className="text-sm text-gray-500">{unreadCount} unread</p>
              )}
            </div>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Notifications List */}
        <ScrollArea className="h-[600px]">
          <div className="p-2">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 rounded-lg mb-2 transition cursor-pointer ${
                  notification.read 
                    ? 'hover:bg-gray-50' 
                    : 'bg-purple-50 hover:bg-purple-100'
                }`}
              >
                <div className="flex gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${notification.color}`}>
                    <notification.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="font-semibold">{notification.title}</h3>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{notification.message}</p>
                    <p className="text-xs text-gray-500">{notification.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Footer */}
        <div className="p-4 border-t">
          <Button variant="outline" className="w-full">
            <CheckCircle className="w-4 h-4 mr-2" />
            Mark All as Read
          </Button>
        </div>
      </Card>
    </div>
  );
}
