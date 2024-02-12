import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const alice = await prisma.user.upsert({
    where: { email: 'steven@example.com' },
    update: {},
    create: {
      email: 'steven@example.com',
      name: 'Steven',
      Dictee: {
        create: [
          {
            name: 'Liste 1',
            content:
              '[{"order":1,"text":"moitié","masculine":"moitié","feminine":"moitié","verb_group":0,"definition":"half","translation":{"text":"half","definition":"one of two equal parts"}},{"order":2,"text":"poids","masculine":"poids","feminine":"poids","verb_group":0,"definition":"weight","translation":{"text":"weight","definition":"the force exerted on an object due to gravity"}},{"order":3,"text":"demi","masculine":"demi","feminine":"demi","verb_group":0,"definition":"half","translation":{"text":"half","definition":"one of two equal parts"}},{"order":4,"text":"sonner","masculine":"sonneur","feminine":"sonneuse","verb_group":1,"definition":"to ring","translation":{"text":"to ring","definition":"to produce a sound, typically a bell or alarm"}},{"order":5,"text":"calme","masculine":"calme","feminine":"calme","verb_group":0,"definition":"calm","translation":{"text":"calm","definition":"a peaceful and quiet state"}},{"order":6,"text":"changement","masculine":"changement","feminine":"changement","verb_group":0,"definition":"change","translation":{"text":"change","definition":"the act or process of becoming different"}},{"order":7,"text":"contraire","masculine":"contraire","feminine":"contraire","verb_group":0,"definition":"opposite","translation":{"text":"opposite","definition":"completely different or contrary"}},{"order":8,"text":"charge","masculine":"charge","feminine":"charge","verb_group":0,"definition":"load","translation":{"text":"load","definition":"a heavy or bulky thing that is being carried or transported"}},{"order":9,"text":"colline","masculine":"colline","feminine":"colline","verb_group":0,"definition":"hill","translation":{"text":"hill","definition":"a naturally elevated area of land, smaller than a mountain"}},{"order":10,"text":"davantage","masculine":"davantage","feminine":"davantage","verb_group":0,"definition":"more","translation":{"text":"more","definition":"a greater or additional amount or degree"}}]',
            published: true,
          },
          {
            name: 'Liste 2',
            content:
              '[{"order":1,"text":"moitié","masculine":"moitié","feminine":"moitié","verb_group":0,"definition":"half","translation":{"text":"half","definition":"one of two equal parts"}},{"order":2,"text":"poids","masculine":"poids","feminine":"poids","verb_group":0,"definition":"weight","translation":{"text":"weight","definition":"the force exerted on an object due to gravity"}},{"order":3,"text":"demi","masculine":"demi","feminine":"demi","verb_group":0,"definition":"half","translation":{"text":"half","definition":"one of two equal parts"}},{"order":4,"text":"sonner","masculine":"sonneur","feminine":"sonneuse","verb_group":1,"definition":"to ring","translation":{"text":"to ring","definition":"to produce a sound, typically a bell or alarm"}},{"order":5,"text":"calme","masculine":"calme","feminine":"calme","verb_group":0,"definition":"calm","translation":{"text":"calm","definition":"a peaceful and quiet state"}},{"order":6,"text":"changement","masculine":"changement","feminine":"changement","verb_group":0,"definition":"change","translation":{"text":"change","definition":"the act or process of becoming different"}},{"order":7,"text":"contraire","masculine":"contraire","feminine":"contraire","verb_group":0,"definition":"opposite","translation":{"text":"opposite","definition":"completely different or contrary"}},{"order":8,"text":"charge","masculine":"charge","feminine":"charge","verb_group":0,"definition":"load","translation":{"text":"load","definition":"a heavy or bulky thing that is being carried or transported"}},{"order":9,"text":"colline","masculine":"colline","feminine":"colline","verb_group":0,"definition":"hill","translation":{"text":"hill","definition":"a naturally elevated area of land, smaller than a mountain"}},{"order":10,"text":"davantage","masculine":"davantage","feminine":"davantage","verb_group":0,"definition":"more","translation":{"text":"more","definition":"a greater or additional amount or degree"}}]',
            published: true,
          },
        ],
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
