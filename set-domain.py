import sys, pathlib
d = sys.argv[1].replace('https://', '').strip('/')
for p in pathlib.Path('.').rglob('*'):
    if p.is_file() and p.suffix in ('.html', '.xml', '.txt', '.json', '.webmanifest', '.md', '.js') and p.name != 'set-domain.py':
        p.write_text(p.read_text().replace('YOUR-DOMAIN.example', d))
print('Domain set to', d)
