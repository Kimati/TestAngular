import { ToUpperCasePipe } from './to-upper-case.pipe';

const pipe = new ToUpperCasePipe();

describe('ToUpperCasePipe', () => {
  it('create an instance', () => { 
    expect(pipe).toBeTruthy();
  });

  //incoming string should not be empty
  it('Value to be transformed should not be empty',()=>{
    expect(pipe.valueToTransform.length).toBeGreaterThan(0);
  })

  it('transform abc def ghi to Abc Def Ghi',()=>{
    expect(pipe.transform('abc def ghi')).toBe('Abc Def Ghi');
  })
});
