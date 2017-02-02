
# Stream Sampler

Write a program that takes a single number k as argument and a stream of characters on stdin, and prints a representative random sample of these characters of size k on stdout. A couple of possible runs of this program looks like this

```bash
echo -n "THEQUICKBROWNFOXJUMPSOVERTHELAZYDOG" | ./a.out 5
ROJEO
```
```bash
echo -n "THEQUICKBROWNFOXJUMPSOVERTHELAZYDOG" | ./a.out 5
UWOPS
```

The input stream is of unknown and possibly very large length.

## Representative random sample

A representative random sample means that each possible sample of the input string has the same probability of being returned. A string s is a sample of the input string i, iff s can be generated from i by only taking away characters.