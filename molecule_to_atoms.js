// Parses a molecule notation to output the number of each of the atoms that compose it.
// groups can be made from brackets, parentheses or square brackets.

console.log(parseMolecule('As2{Be4C5[BCo3(CO2)3]2}4Cu5'));
console.log(parseMolecule('Pd[P(C6H5)3]4'));
console.log(parseMolecule('(C5H5)Fe(CO)2CH3'));
console.log(parseMolecule('Fe(C5H5)2'));
console.log(parseMolecule('Mg(OH)2'));
console.log(parseMolecule('C6H12O6'));

function parseMolecule(formula) {
  nums = {};
  (function reduce(molecule, mult) {
    molecule.match(/[A-Z][a-z]?\d*|\([^\)]+\)\d*|\[[^\]]+\]\d*|{[^}]+}\d*/g).forEach(function(val) {
      if (val.match(/\[|\]|\(|\)|{|}/g)) {
        reduce(val.replace(/^(\[|\()|((\]|\)|{|})\d*)$/g, ''), mult*val.match(/\d*$/g)[0]||1);
      } else {
        var element = val.replace(/\d/g, '');
        nums[element] = (nums[element] || 0) + (val.replace(/[A-Za-z]/g, '')||1) * mult;
      }
    });
  }(formula, 1));
  return nums;
}
