import { describe, expect, it } from 'bun:test'

import { plus100 } from '../index.js'

describe('native code', () => {
	it('sync function from native code', () => {
		const fixture = 42
		expect(plus100(fixture)).toBe(fixture + 100)
	})
})
