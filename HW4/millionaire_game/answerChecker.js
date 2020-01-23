let answerChecker = {
    getAndCheckAnswer(q, score) {
        let userAnswer = prompt('Введите порядковый номер верного по-вашему мнению ответа. Для выхода из игры введите любой текст.');
        if (userAnswer == questionsDB.questions[q].correctAnswerInd) {
            console.log('Верный ответ!');
            score += 1
        } else if (isNaN(userAnswer)) {
            console.log(`Игра окончена! Вы набрали ${score}/${config.numberOfQuestions} очков. Вопроов пропущено: ${config.numberOfQuestions - q}.`);
            return null;
        } else {
            console.log(`Вы не угадали! Верный ответ под номером ${questionsDB.questions[q].correctAnswerInd}`);
        }
    }
}