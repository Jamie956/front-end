var btn = document.getElementById('mybtn');
btn.onclick = e =>
import ('./print').then(module => {
  var print = module.default;
  print();
});