/**
 * Created by Sreedhar on 8/29/14.
 */
suite('"About" Page Tests', function() {
    test('page should contain link to contact page', function() {
        assert($('a[href="/contact"]').length);
    });
});