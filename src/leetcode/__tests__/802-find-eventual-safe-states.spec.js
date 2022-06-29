const { eventualSafeNodes } = require('../802-find-eventual-safe-states');

it('returns all safe state nodes in ascending order', () => {
    expect(eventualSafeNodes([[1,2],[2,3],[5],[0],[5],[]])).toEqual([2,4,5]);
    expect(eventualSafeNodes([[1,2,3,4],[1,2],[3,4],[0,4],[]])).toEqual([4]);
});
