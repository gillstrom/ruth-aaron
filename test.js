import test from 'ava';
import fn from './';

test('repeated prime factors', t => {
	t.assert(fn(5, 6));
	t.assert(fn(8, 9));
	t.assert(fn(15, 16));
	t.assert(fn(77, 78));
	t.assert(fn(125, 126));
	t.assert(fn(714, 715));
	t.assert(fn(948, 949));
	t.assert(fn(1330, 1331));
	t.assert(!fn(123, 124));
	t.end();
});

test('distinct prime factors', t => {
	t.assert(fn(5, 6, {distinct: true}));
	t.assert(fn(24, 25, {distinct: true}));
	t.assert(fn(49, 50, {distinct: true}));
	t.assert(fn(77, 78, {distinct: true}));
	t.assert(fn(104, 105, {distinct: true}));
	t.assert(fn(153, 154, {distinct: true}));
	t.assert(fn(369, 370, {distinct: true}));
	t.assert(fn(492, 493, {distinct: true}));
	t.assert(fn(714, 715, {distinct: true}));
	t.assert(fn(1682, 1683, {distinct: true}));
	t.assert(fn(2107, 2108, {distinct: true}));
	t.assert(!fn(123, 124, {distinct: true}));
	t.end();
});
