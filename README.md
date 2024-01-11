# WordHUB APP

WordHUB App, Vue.js ve Supabase kullanarak geliştirdiğim ingilizce kelimeleri öğrenme ve yönetme uygulamasıdır. Bu uygulama, kullanıcılara kelime arama, kayıtlı kelimeleri yönetme ve öğrenme listesi oluşturma imkanı sunar. Ayrıca kelimelere örnek cümleler de eklenebilir. Kullanıcının öğrenme sürecini eğlenceli hale getirebilecek 2 oyun da bulunmaktadır.

## Kullanıcı Arayüzü

Uygulamanın kullanıcı arayüzü aşağıdaki bölümlerden oluşmaktadır:

- **Arama:** Kelimeleri aramak için kullanılan bölüm. Arama sonuçları, kelimenin anlamı, örnek cümleleri ve diğer bilgileri içerir.
- **Kayıtlı Kelimeler:** Kullanıcının kaydettiği kelimeleri listeler. Kelimeleri düzenleme, silme veya örnek cümle ekleme imkanı sunar.
- **Oyunlar:** Kullanıcının kaydettiği kelimeler ile alıştırma yapabileceği oyunlar.

## Teknik Detaylar

Uygulama, aşağıdaki teknolojileri kullanarak geliştirilmiştir:

- **Vue.js:** Uygulama arayüzünü oluşturmak için Vue.js kullanılmıştır.
- **Pinia:** Uygulama state yönetimi için Pinia kullanılmıştır.
- **vue-router:** Yönlendirmeleri oluşturmak için vue-router kullanılmıştır.
- **Tailwind:** Stilleri oluşturmak için Tailwind kullanılmıştır.
- **Supabase:** Veritabanını oluşturmak ve yönetmek için Supabase kullanılmıştır.
- **Chart.js:** Veri görselleştirme için Chart.js kullanılmıştır.
- **API:** [Free Dictionary API](https://dictionaryapi.dev/) kelimeler için kullanılmıştır.

## Kurulum

Uygulamayı yerel olarak çalıştırmak için şu adımları takip edin:

1. Supabase hesabı oluşturun ve bir veritabanı oluşturun.
2. `.env` dosyasını oluşturun ve aşağıdaki değerleri ekleyin:

    ```env
    VITE_SUPABASE_URL=https://[sizin-supabase-url'iniz]
    VITE_SUPABASE_KEY=[sizin-supabase-key'iniz]
    ```

3. `npm install` komutunu çalıştırın.
4. `npm run serve` komutunu çalıştırın.

Uygulama, [http://localhost:5173](http://localhost:5173) adresinde çalışacaktır.


### Video
[Youtube Video](https://youtu.be/EgX7FH6egRY?si=yAnn-qgdQFmTzd2O)

## Lisans

Uygulama, MIT lisansı altında yayınlanmaktadır.
