import { expect } from 'chai';
import { DNAStrand } from '../src/complementaryDNA';

describe('Smoke tests', () => {
  it('should DNAStrand method exist', () => {
    expect(DNAStrand).to.be.exist;
  });
});

describe('Complementary DNA', () => {
  it('should entry "ATTGC" return "TAACG"', () => {
    expect(DNAStrand('ATTGC')).to.be.equal('TAACG');
  });

  it('should entry "GTAT" return "CATA"', () => {
    expect(DNAStrand('GTAT')).to.be.equal('CATA');
  });
});
