import test from 'ava';
import fn from './';

test('repeated prime factors', t => {
	t.true(fn(5, 6));
	t.true(fn(8, 9));
	t.true(fn(15, 16));
	t.true(fn(77, 78));
	t.true(fn(125, 126));
	t.true(fn(714, 715));
	t.true(fn(948, 949));
	t.true(fn(1330, 1331));
	t.false(fn(123, 124));
});

test('distinct prime factors', t => {
	const opts = {distinct: true};

	t.true(fn(5, 6, opts));
	t.true(fn(24, 25, opts));
	t.true(fn(49, 50, opts));
	t.true(fn(77, 78, opts));
	t.true(fn(104, 105, opts));
	t.true(fn(153, 154, opts));
	t.true(fn(369, 370, opts));
	t.true(fn(492, 493, opts));
	t.true(fn(714, 715, opts));
	t.true(fn(1682, 1683, opts));
	t.true(fn(2107, 2108, opts));
	t.false(fn(123, 124, opts));
});
