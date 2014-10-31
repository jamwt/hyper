(function() {var implementors = {};
implementors['hyper'] = ["<a class='stability Experimental' title='Experimental'></a>impl&lt;K: <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html' title='core::cmp::Eq'>Eq</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/collections/hash/trait.Hash.html' title='collections::hash::Hash'>Hash</a>&lt;S&gt;, V, S, H: <a class='trait' href='http://doc.rust-lang.org/nightly/core/default/trait.Default.html' title='core::default::Default'>Default</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/collections/hash/trait.Hasher.html' title='collections::hash::Hasher'>Hasher</a>&lt;S&gt;&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(K, V)</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/std/collections/hashmap/map/struct.HashMap.html' title='std::collections::hashmap::map::HashMap'>HashMap</a>&lt;K, V, H&gt;","<a class='stability Experimental' title='Experimental'></a>impl&lt;T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html' title='core::cmp::Eq'>Eq</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/collections/hash/trait.Hash.html' title='collections::hash::Hash'>Hash</a>&lt;S&gt;, S, H: <a class='trait' href='http://doc.rust-lang.org/nightly/core/default/trait.Default.html' title='core::default::Default'>Default</a> + <a class='trait' href='http://doc.rust-lang.org/nightly/collections/hash/trait.Hasher.html' title='collections::hash::Hasher'>Hasher</a>&lt;S&gt;&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/std/collections/hashmap/set/struct.HashSet.html' title='std::collections::hashmap::set::HashSet'>HashSet</a>&lt;T, H&gt;","<a class='stability Experimental' title='Experimental'></a>impl&lt;A&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;A&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/dlist/struct.DList.html' title='collections::dlist::DList'>DList</a>&lt;A&gt;","<a class='stability Experimental' title='Experimental'></a>impl&lt;T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/priority_queue/struct.PriorityQueue.html' title='collections::priority_queue::PriorityQueue'>PriorityQueue</a>&lt;T&gt;","<a class='stability Experimental' title='Experimental'></a>impl&lt;A&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;A&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/ringbuf/struct.RingBuf.html' title='collections::ringbuf::RingBuf'>RingBuf</a>&lt;A&gt;","<a class='stability Experimental' title='Experimental'></a>impl&lt;T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(<a href='http://doc.rust-lang.org/nightly/std/primitive.uint.html'>uint</a>, T)</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/trie/struct.TrieMap.html' title='collections::trie::TrieMap'>TrieMap</a>&lt;T&gt;","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.uint.html'>uint</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/trie/struct.TrieSet.html' title='collections::trie::TrieSet'>TrieSet</a>","<a class='stability Experimental' title='Experimental'></a>impl&lt;K: <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a>, V&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(K, V)</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/treemap/struct.TreeMap.html' title='collections::treemap::TreeMap'>TreeMap</a>&lt;K, V&gt;","<a class='stability Experimental' title='Experimental'></a>impl&lt;T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/treemap/struct.TreeSet.html' title='collections::treemap::TreeSet'>TreeSet</a>&lt;T&gt;","<a class='stability Experimental' title='Experimental'></a>impl&lt;V&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(<a href='http://doc.rust-lang.org/nightly/std/primitive.uint.html'>uint</a>, V)</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/smallintmap/struct.SmallIntMap.html' title='collections::smallintmap::SmallIntMap'>SmallIntMap</a>&lt;V&gt;","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.bool.html'>bool</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/bitv/struct.Bitv.html' title='collections::bitv::Bitv'>Bitv</a>","<a class='stability Experimental' title='Experimental'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.bool.html'>bool</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/bitv/struct.BitvSet.html' title='collections::bitv::BitvSet'>BitvSet</a>","<a class='stability Experimental' title='Experimental'></a>impl&lt;K: <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a>, V&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a href='http://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(K, V)</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/btree/map/struct.BTreeMap.html' title='collections::btree::map::BTreeMap'>BTreeMap</a>&lt;K, V&gt;","<a class='stability Experimental' title='Experimental'></a>impl&lt;T: <a class='trait' href='http://doc.rust-lang.org/nightly/core/cmp/trait.Ord.html' title='core::cmp::Ord'>Ord</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/btree/set/struct.BTreeSet.html' title='collections::btree::set::BTreeSet'>BTreeSet</a>&lt;T&gt;","<a class='stability Experimental' title='Experimental: waiting on FromIterator stabilization'></a>impl <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;<a href='http://doc.rust-lang.org/nightly/core/primitive.char.html'>char</a>&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/string/struct.String.html' title='collections::string::String'>String</a>","<a class='stability Experimental' title='Experimental: waiting on FromIterator stability'></a>impl&lt;T&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/iter/trait.FromIterator.html' title='core::iter::FromIterator'>FromIterator</a>&lt;T&gt; for <a class='struct' href='http://doc.rust-lang.org/nightly/collections/vec/struct.Vec.html' title='collections::vec::Vec'>Vec</a>&lt;T&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
