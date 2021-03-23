module.exports = function (participants, sports) {

  if (!Array.isArray(participants) || !Array.isArray(sports)) return []

  /**
   * Подобно оператору new создает экземпляр объекта,
   * используя функцию-конструктор и параметры для нее
   */
  function constructFrom (fnConstructor, ...params) {
    const res = {};

    fnConstructor.bind(res).apply(null, params);

    Object.setPrototypeOf(res, fnConstructor.prototype);

    return res;
  }

  /**
   * Создает пары вида [’вид спорта’, ’имя участника’],
   * где первому виду спорта соответствует последний участник
   */
  function assignParticipants () {
    const participants = this.participants;
    const sports = this.sports;
    const orderIndexes = [];

    let range = sports.length;

    for (let i=0, j=range-1; i<range; i++, j--) {
      orderIndexes.push([sports[i], participants[j]])
    }

    return JSON.stringify(orderIndexes);
  }

  function Contest (participants, sports) {
    this.participants = participants;
    this.sports = sports;
  }

  Contest.prototype.assignParticipants = assignParticipants;


  const contest = constructFrom(Contest, participants, sports);

  return contest.assignParticipants();
}
