import { expect } from 'chai';
import { openOrSenior } from '../src/categoryNewMember';

describe('Category new member', () => {
  describe('Smoke tests', () => {
    it('should openOrSenior method exist', () => {
      expect(openOrSenior).to.be.exist;
    });
  });

  describe('Member category tests', () => {
    it('should return ["Open", "Open", "Senior", "Open", "Open", "Senior"]', () => {
      expect(openOrSenior([[18, 20],[45, 2],[61, 12],[37, 6],[21, 21],[78, 9]]))
        .to.be.eql(["Open", "Open", "Senior", "Open", "Open", "Senior"]);
    });

    it('should return ["Open", "Open", "Open", "Open"]', () => {
      expect(openOrSenior([[3, 12],[55,1],[91, -2],[54, 23]])).to.be.eql(['Open', 'Open', 'Open', 'Open']);
    });
  });
});
