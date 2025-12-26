import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { 
  ArrowLeft,
  Clock,
  CheckCircle2,
  XCircle,
  Lightbulb,
  TrendingUp,
  TrendingDown
} from "lucide-react";

interface QuizScreenProps {
  onNavigate: (page: string) => void;
}

export function QuizScreen({ onNavigate }: QuizScreenProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(120);

  const questions = [
    {
      id: 1,
      difficulty: "Easy",
      question: "What is the derivative of x²?",
      options: ["x", "2x", "x³", "2x²"],
      correctAnswer: "2x",
      explanation: "Using the power rule: d/dx(xⁿ) = n·xⁿ⁻¹, so d/dx(x²) = 2x¹ = 2x",
      topic: "Calculus - Derivatives"
    },
    {
      id: 2,
      difficulty: "Medium",
      question: "Solve for x: 3x + 5 = 20",
      options: ["x = 3", "x = 5", "x = 7", "x = 15"],
      correctAnswer: "x = 5",
      explanation: "3x = 20 - 5 = 15, therefore x = 15/3 = 5",
      topic: "Algebra - Linear Equations"
    },
    {
      id: 3,
      difficulty: "Hard",
      question: "What is the integral of cos(x)?",
      options: ["sin(x) + C", "-sin(x) + C", "cos(x) + C", "-cos(x) + C"],
      correctAnswer: "sin(x) + C",
      explanation: "The integral of cos(x) is sin(x) + C, where C is the constant of integration",
      topic: "Calculus - Integration"
    },
    {
      id: 4,
      difficulty: "Medium",
      question: "What is the value of π (pi) rounded to two decimal places?",
      options: ["3.12", "3.14", "3.16", "3.18"],
      correctAnswer: "3.14",
      explanation: "π ≈ 3.14159..., which rounds to 3.14 when rounded to two decimal places",
      topic: "Mathematics - Constants"
    },
  ];

  const currentQ = questions[currentQuestion];
  const progressPercent = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) return;
    
    const correct = selectedAnswer === currentQ.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);
    
    if (correct) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
      setIsCorrect(false);
    } else {
      // Quiz completed - could navigate to results
      alert(`Quiz completed! Your score: ${score + (isCorrect ? 1 : 0)}/${questions.length}`);
      onNavigate('student-dashboard');
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-700 border-green-300";
      case "Medium": return "bg-yellow-100 text-yellow-700 border-yellow-300";
      case "Hard": return "bg-red-100 text-red-700 border-red-300";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
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
              <h1 className="text-3xl font-bold mb-2">Advanced Mathematics Quiz</h1>
              <p className="text-gray-600">Adaptive difficulty based on your performance</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-2 text-gray-600 mb-1">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">2:00</span>
              </div>
              <p className="text-sm text-gray-500">Time per question</p>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <Card className="p-6 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Question {currentQuestion + 1} of {questions.length}</span>
            <span className="text-sm text-gray-600">Score: {score}/{questions.length}</span>
          </div>
          <Progress value={progressPercent} className="h-2" />
        </Card>

        {/* Question Card */}
        <Card className="p-8 mb-6">
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <Badge variant="outline" className={getDifficultyColor(currentQ.difficulty)}>
                {currentQ.difficulty}
              </Badge>
              <p className="text-sm text-gray-500 mt-2">{currentQ.topic}</p>
            </div>
            
            {/* Difficulty Trend Indicator */}
            <div className="flex items-center gap-2 px-3 py-2 bg-purple-50 rounded-lg">
              {currentQ.difficulty === "Easy" && (
                <>
                  <TrendingDown className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-green-700">Adjusting Down</span>
                </>
              )}
              {currentQ.difficulty === "Medium" && (
                <>
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium text-blue-700">Adaptive Level</span>
                </>
              )}
              {currentQ.difficulty === "Hard" && (
                <>
                  <TrendingUp className="w-5 h-5 text-red-600" />
                  <span className="text-sm font-medium text-red-700">Challenging!</span>
                </>
              )}
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-6">{currentQ.question}</h2>

          <RadioGroup value={selectedAnswer || ""} onValueChange={handleAnswerSelect}>
            <div className="space-y-3">
              {currentQ.options.map((option, index) => {
                const isSelected = selectedAnswer === option;
                const isCorrectAnswer = option === currentQ.correctAnswer;
                
                let className = "flex items-center space-x-3 border-2 rounded-lg p-4 cursor-pointer transition-all hover:border-purple-300 hover:bg-purple-50";
                
                if (showFeedback) {
                  if (isCorrectAnswer) {
                    className += " border-green-500 bg-green-50";
                  } else if (isSelected && !isCorrect) {
                    className += " border-red-500 bg-red-50";
                  }
                } else if (isSelected) {
                  className += " border-purple-500 bg-purple-50";
                }

                return (
                  <div key={index} className={className}>
                    <RadioGroupItem 
                      value={option} 
                      id={`option-${index}`}
                      disabled={showFeedback}
                    />
                    <Label 
                      htmlFor={`option-${index}`} 
                      className="flex-1 cursor-pointer font-medium"
                    >
                      {option}
                    </Label>
                    {showFeedback && isCorrectAnswer && (
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    )}
                    {showFeedback && isSelected && !isCorrect && (
                      <XCircle className="w-5 h-5 text-red-600" />
                    )}
                  </div>
                );
              })}
            </div>
          </RadioGroup>

          {/* Feedback Section */}
          {showFeedback && (
            <div className={`mt-6 p-4 rounded-lg border-2 ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
              <div className="flex items-start gap-3">
                {isCorrect ? (
                  <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5" />
                ) : (
                  <XCircle className="w-6 h-6 text-red-600 mt-0.5" />
                )}
                <div className="flex-1">
                  <h3 className={`font-semibold mb-2 ${isCorrect ? 'text-green-900' : 'text-red-900'}`}>
                    {isCorrect ? 'Correct!' : 'Not quite right'}
                  </h3>
                  <div className="flex items-start gap-2 text-sm text-gray-700">
                    <Lightbulb className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <p>{currentQ.explanation}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-6 flex gap-3 justify-end">
            {!showFeedback ? (
              <Button 
                onClick={handleSubmitAnswer}
                disabled={!selectedAnswer}
                className="bg-gradient-to-r from-purple-600 to-blue-600"
              >
                Submit Answer
              </Button>
            ) : (
              <Button 
                onClick={handleNextQuestion}
                className="bg-gradient-to-r from-purple-600 to-blue-600"
              >
                {currentQuestion < questions.length - 1 ? 'Next Question' : 'Complete Quiz'}
              </Button>
            )}
          </div>
        </Card>

        {/* AI Adaptation Notice */}
        <Card className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-purple-900 mb-1">AI Adaptive Learning</h4>
              <p className="text-sm text-purple-700">
                The difficulty of questions adjusts based on your performance. 
                {isCorrect && showFeedback && " Great job! Next question will be slightly harder."}
                {!isCorrect && showFeedback && " Don't worry! We'll adjust to help you learn better."}
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
