const categories=['Todos','Combos Promocionais','Burgers Mais Vendidos','Burgers','Salada','Porções','Sobremesas','Bebidas','Sal Blue Chips'];
const products=[
['joao','João Pessoa + Fritas','Burgers Mais Vendidos',41,'Pão, carne de 151g assada em brasa, cheddar e bacon artesanal.'],
['campina','Campina Grande + Fritas','Burgers Mais Vendidos',49,'2 carnes de 151g, 2 porções de cheddar e bacon artesanal.'],
['bananeiras','Bananeiras + Fritas','Burgers Mais Vendidos',48,'2 carnes de 151g, mussarela, queijo coalho e banana.'],
['camarao','Camarão Sertanejo','Burgers',50,'Carne de 151g, queijo coalho, mussarela e camarões ao alho e óleo.'],
['cajazeiras','Cajazeiras','Burgers',41,'Carne de 151g na brasa, cheddar, queijo coalho com mel e bacon.'],
['pianco','Piancó','Burgers',null,'Preço e descrição aguardam confirmação.'],
['curral','Curral de Dentro + Fritas','Burgers',41,'Carne de 151g na brasa, creme cheddar e bacon caramelado no abacaxi.'],
['princesa','Princesa Isabel – Egg + Fritas','Burgers',37,'Carne de 151g, ovo frito, alface, tomate e molho cheese.'],
['picui','Picuí + Fritas','Burgers',40,'Carne de 151g, mussarela, queijo coalho e carne de sol.'],
['parari','Parari – Kids','Burgers',24,'Carne na brasa, mussarela, molho cheese e maionese da casa.'],
['coco','Có Có Có Supremo + Fritas','Burgers',null,'Nuggets, mussarela, alface, tomate, molho cheese e maionese da casa.'],
['coxinha','Coxinha de Cupim Defumado','Porções',45,'5 unidades, sem massa, recheadas com cupim defumado.'],
['gouda','Almofadinha de Queijo Gouda','Porções',35,'10 unidades. Acompanha maionese da casa.'],
['onion','Anéis de Cebola + Molho Barbecue','Porções',20,'10 unidades com molho barbecue.'],
['batata','Batata Frita – Palito','Porções',29.9,'250g in natura.'],
['cabra','Cabra da Peste','Porções',null,'Batata palito, creme cheddar e bacon. Preço a confirmar.'],
['nuggets','Nuggets','Porções',27,'10 unidades. Acompanha molho barbecue.'],
['pastel','Pastel de Pulled Pork (4 unidades)','Porções',25,'4 unidades de copa-lombo suíno defumado em lenha de frutífera.'],
['chipsg','Batata Chips G','Porções',20,'Porção grande.'],
['chipsm','Batata Chips M','Porções',15,'Porção média.'],
['chipsp','Batata Chips P','Porções',8,'Porção pequena.'],
['churros','Churros de Nutella','Sobremesas',11,'Acompanha potinho de Nutella servido separadamente.'],
['churros2','Churros em Dobro','Sobremesas',18,'Descrição detalhada a confirmar.'],
['agua','Água mineral sem gás 500ml','Bebidas',4,'500ml.'],
['aguagas','Água com gás 500ml','Bebidas',5,'500ml.'],
['guarana','Guaraná Antarctica lata 350ml','Bebidas',7,'Lata 350ml.'],
['zero','Guaraná Zero lata 350ml','Bebidas',7,'Lata 350ml.'],
['h2o','H2O Limão','Bebidas',8,''],
['limoneto','Limoneto 500ml','Bebidas',8,'500ml.'],
['saoger','Refrigerante São Geraldo lata 350ml','Bebidas',9,'Lata 350ml.'],
['heineken','Heineken Long Neck','Bebidas',13,''],
['stella','Stella Artois Pure Gold Long Neck','Bebidas',13,''],
['stempel','Chopp de Vinho Stempel 600ml','Bebidas',null,'Preço a confirmar.'],
['smelancia','Soda Italiana Melância 500ml','Bebidas',17,'500ml.'],
['spink','Soda Italiana Pink Lemonade 500ml','Bebidas',17,'500ml.'],
['samora','Soda Italiana Amora 500ml','Bebidas',17,'500ml.'],
['sblue','Soda Italiana Blueberry 500ml','Bebidas',17,'500ml.'],
['smaca','Soda Italiana Maçã Verde 500ml','Bebidas',17,'500ml.'],
['goiaba','Suco de Goiaba 500ml','Bebidas',12.9,'500ml.'],
['maracuja','Suco de Maracujá 500ml','Bebidas',12.9,'500ml.'],
['sal','Sal de Parrilla – Branco','Sal Blue Chips',null,'Preço e descrição a confirmar.'],
['duplo','Combo Duplo','Combos Promocionais',84,'João Pessoa + Curral de Dentro + Guaraná 1 litro.'],
['familia','Combo Família','Combos Promocionais',98,'3 Burgers Soledade + Batata M + Guaraná 1 litro.'],
['individual','Combo Individual','Combos Promocionais',36,'Burger Soledade + Batata P + Guaraná lata.']
];
let selected='Todos';const basket={};const brl=n=>n.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});
function drawCategories(){const el=document.querySelector('#categories');if(!el)return;el.innerHTML=categories.map(c=>'<button class="chip '+(selected===c?'active':'')+'" data-cat="'+c+'">'+c+'</button>').join('');el.querySelectorAll('button').forEach(b=>b.onclick=()=>{selected=b.dataset.cat;drawCategories();drawProducts()})}
function drawProducts(){const el=document.querySelector('#products');if(!el)return;const term=(document.querySelector('#search')?.value||'').toLocaleLowerCase('pt-BR');const found=products.filter(p=>(selected==='Todos'||p[2]===selected)&&(p[1]+' '+p[4]).toLocaleLowerCase('pt-BR').includes(term));el.innerHTML=found.map(p=>'<article class="card"><div class="food-placeholder">🍔</div><div class="card-body"><div class="product-category">'+p[2]+'</div><h3>'+p[1]+'</h3><p>'+p[4]+'</p><div class="price-row"><span class="price">'+(p[3]===null?'Preço a confirmar':brl(p[3]))+'</span><button class="add" '+(p[3]===null?'disabled':'data-add="'+p[0]+'"')+'>+</button></div></div></article>').join('')||'<p>Nenhum produto encontrado.</p>';el.querySelectorAll('[data-add]').forEach(b=>b.onclick=()=>add(b.dataset.add))}
function add(id){basket[id]=(basket[id]||0)+1;drawBasket();openBasket()}
function quantity(id,n){basket[id]=(basket[id]||0)+n;if(basket[id]<=0)delete basket[id];drawBasket()}
function drawBasket(){const entries=Object.entries(basket);const count=entries.reduce((s,e)=>s+e[1],0);const badge=document.querySelector('#cartCount');if(badge)badge.textContent=count;const list=document.querySelector('#cartItems');if(list)list.innerHTML=entries.length?entries.map(([id,q])=>{const p=products.find(x=>x[0]===id);return '<div class="cart-line"><div><b>'+p[1]+'</b><small>'+brl(p[3])+' cada</small></div><div class="qty"><button data-minus="'+id+'">−</button>'+q+'<button data-plus="'+id+'">+</button></div></div>'}).join(''):'<p class="muted">Seu carrinho está vazio.</p>';list?.querySelectorAll('[data-minus]').forEach(b=>b.onclick=()=>quantity(b.dataset.minus,-1));list?.querySelectorAll('[data-plus]').forEach(b=>b.onclick=()=>quantity(b.dataset.plus,1));const total=entries.reduce((s,[id,q])=>s+products.find(p=>p[0]===id)[3]*q,0);const t=document.querySelector('#cartTotal');if(t)t.textContent=brl(total)}
function openBasket(){document.querySelector('#cartPanel')?.classList.add('open');document.querySelector('#cartBackdrop')?.classList.add('open')}
function closeBasket(){document.querySelector('#cartPanel')?.classList.remove('open');document.querySelector('#cartBackdrop')?.classList.remove('open')}
document.addEventListener('DOMContentLoaded',()=>{drawCategories();drawProducts();drawBasket();document.querySelector('#search')?.addEventListener('input',drawProducts);document.querySelector('#cartButton')?.addEventListener('click',openBasket);document.querySelector('#cartBackdrop')?.addEventListener('click',closeBasket);document.querySelector('#closeCart')?.addEventListener('click',closeBasket)});
