import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <Tabs
      defaultValue="account"
      className="mb-4 mt-2  w-full px-4 shadow-md shadow-blue-300/30"
    >
      <TabsList className="flex flex-row justify-center bg-transparent ">
        <TabsTrigger value="account" className="mr-2 bg-blue-300">
          Tatoos
        </TabsTrigger>
        <TabsTrigger value="password" className="mr-2 bg-blue-300">
          Piercing
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="h-64 overflow-y-auto">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Traditional Tattoos</AccordionTrigger>
            <AccordionContent>
              Traditional tattoos, also known as American Traditional or Old
              School tattoos, are characterized by bold lines, vibrant colors,
              and iconic imagery such as anchors, eagles, pin-up girls, and
              roses. This style emphasizes simple designs with minimal shading
              and a limited color palette.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Neo-traditional Tattoos</AccordionTrigger>
            <AccordionContent>
              Neo-traditional tattoos build on the traditional style by
              incorporating more intricate details, a broader color palette, and
              elaborate shading. They often feature more complex compositions
              and modern themes while maintaining bold outlines.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Blackwork Tattoos</AccordionTrigger>
            <AccordionContent>
              Blackwork tattoos are created using only black ink, focusing on
              high contrast and bold designs. This style includes a range of
              motifs from tribal patterns to geometric shapes, often using
              negative space for dramatic effect.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Fine Line Tattoos</AccordionTrigger>
            <AccordionContent>
              Fine line tattoos use thin, delicate lines to create detailed and
              intricate designs. This style is popular for minimalist and
              detailed artwork, such as small symbols, floral designs, and
              portraits.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Geometric Tattoos</AccordionTrigger>
            <AccordionContent>
              Geometric tattoos consist of shapes, lines, and patterns to create
              symmetrical and often abstract designs. This style can include
              complex mandalas, simple geometric shapes, and intricate patterns,
              often emphasizing precision and balance.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Watercolor Tattoos</AccordionTrigger>
            <AccordionContent>
              Watercolor tattoos mimic the appearance of watercolor paintings,
              featuring soft, diffused edges, and vibrant colors. This style
              often lacks the bold outlines typical of other tattoo styles,
              creating a fluid and artistic effect.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>Realism Tattoos</AccordionTrigger>
            <AccordionContent>
              Realism tattoos aim to replicate real-life images with high
              accuracy and detail. This style often includes portraits, animals,
              and landscapes, requiring a high level of skill to achieve
              photorealistic results.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>Portrait Tattoos</AccordionTrigger>
            <AccordionContent>
              Portrait tattoos are a subgenre of realism tattoos, focusing
              specifically on replicating the likeness of a persons face. This
              style is often used to commemorate loved ones or celebrities,
              requiring precise detail and shading.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>Japanese Tattoos (Irezumi)</AccordionTrigger>
            <AccordionContent>
              Japanese tattoos, or Irezumi, are known for their large-scale,
              elaborate designs that often cover significant portions of the
              body. Common themes include koi fish, dragons, cherry blossoms,
              and samurai, with a rich history and symbolic meaning
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger>Chinese Tattoos (Hanzi)</AccordionTrigger>
            <AccordionContent>
              Chinese tattoos often feature Hanzi (Chinese characters) that
              convey significant meanings or personal mottos. They can also
              include traditional Chinese art and symbols such as dragons,
              tigers, and phoenixes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-11">
            <AccordionTrigger>Tribal Tattoos</AccordionTrigger>
            <AccordionContent>
              Tribal tattoos are based on the traditional body art of indigenous
              cultures, featuring bold, black patterns and motifs. These tattoos
              often symbolize cultural heritage, spirituality, and identity,
              using repeating patterns and abstract shapes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-12">
            <AccordionTrigger>Maori Tattoos (Ta Moko)</AccordionTrigger>
            <AccordionContent>
              Maori tattoos, or Ta Moko, are traditional tattoos from the Maori
              people of New Zealand. They feature intricate, curvilinear
              patterns and designs that convey the wearers genealogy, social
              status, and personal history.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-13">
            <AccordionTrigger>Dotwork Tattoos</AccordionTrigger>
            <AccordionContent>
              Dotwork tattoos are created using dots to form intricate patterns,
              shading, and images. This style can range from simple geometric
              designs to detailed portraits, using varying densities of dots to
              create depth and texture.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-14">
            <AccordionTrigger>Illustrative Tattoos</AccordionTrigger>
            <AccordionContent>
              Illustrative tattoos combine elements of traditional drawing and
              fine art, creating designs that resemble illustrations from books
              or comics. This style often features bold outlines, detailed
              shading, and a wide range of themes and motifs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-15">
            <AccordionTrigger>Script Tattoos</AccordionTrigger>
            <AccordionContent>
              Script tattoos focus on textual elements, using various fonts and
              styles to convey messages, quotes, names, or meaningful words.
              This style emphasizes the beauty of typography and calligraphy.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-16">
            <AccordionTrigger> Graphic Tattoos</AccordionTrigger>
            <AccordionContent>
              Graphic tattoos are influenced by graphic design, using bold
              lines, vivid colors, and abstract concepts to create visually
              striking designs. This style often includes modern, pop culture,
              and abstract elements.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-17">
            <AccordionTrigger>Abstract Tattoos</AccordionTrigger>
            <AccordionContent>
              Abstract tattoos use shapes, colors, and forms to create designs
              that do not attempt to represent reality. This style emphasizes
              artistic expression and creativity, often resulting in unique and
              personal tattoos.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-18">
            <AccordionTrigger>Surrealism Tattoos</AccordionTrigger>
            <AccordionContent>
              Surrealism tattoos draw inspiration from the surrealist art
              movement, featuring dream-like, fantastical imagery that often
              blends reality with imagination. This style includes bizarre,
              whimsical, and thought-provoking designs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-19">
            <AccordionTrigger>Minimalist Tattoos</AccordionTrigger>
            <AccordionContent>
              Minimalist tattoos focus on simplicity and clean lines, often
              using small, precise designs with minimal detail. This style is
              popular for subtle, elegant tattoos that convey meaning with
              minimal visual elements.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-20">
            <AccordionTrigger>Bio-mechanical Tattoos</AccordionTrigger>
            <AccordionContent>
              Bio-mechanical tattoos blend human anatomy with mechanical
              elements, creating designs that appear as if machinery is
              integrated into the body. This style often features intricate
              details, realistic shading, and a futuristic aesthetic.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </TabsContent>
      <TabsContent value="password" className="h-64 overflow-y-auto">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Ear Piercings</AccordionTrigger>
            <AccordionContent>
              Ear piercings are one of the most common and versatile types of
              piercings, with various styles available for different parts of
              the ear. The standard lobe piercing is often the first for many,
              but other popular options include the helix, tragus, rook, daith,
              and conch piercings. Each type offers a unique aesthetic, allowing
              for a range of jewelry styles and personal expression. Healing
              times can vary depending on the location of the piercing,
              typically ranging from a few weeks to several months.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Nose Piercings</AccordionTrigger>
            <AccordionContent>
              Nose piercings have been a cultural staple for centuries and
              remain popular today. The nostril piercing is the most common, but
              septum and bridge piercings are also fashionable choices. These
              piercings can accommodate a variety of jewelry styles, including
              studs, hoops, and rings. Healing times vary: nostril piercings
              usually take about 2-4 months, while septum piercings may take
              about 6-8 weeks.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Lip Piercings</AccordionTrigger>
            <AccordionContent>
              Lip piercings encompass several types, including the labret,
              Monroe, Medusa, and snake bites. These piercings can be placed
              around the upper or lower lips, providing a striking look. Jewelry
              options include studs and rings, and they can be mixed and matched
              for unique combinations. Healing time generally ranges from 6-8
              weeks, depending on the exact location and care.
            </AccordionContent>
          </AccordionItem>{" "}
          <AccordionItem value="item-4">
            <AccordionTrigger>Tongue Piercings</AccordionTrigger>
            <AccordionContent>
              Tongue piercings are known for their bold aesthetic and quick
              healing time, typically around 4-6 weeks. The most common type is
              a single vertical piercing through the center of the tongue, but
              horizontal and multiple piercings are also possible. Jewelry
              options include straight barbells and rings. Proper care is
              crucial during the healing process to avoid complications.
            </AccordionContent>
          </AccordionItem>{" "}
          <AccordionItem value="item-5">
            <AccordionTrigger>Navel (Belly Button) Piercings</AccordionTrigger>
            <AccordionContent>
              Navel piercings, or belly button piercings, are a popular choice
              for those looking to accentuate their midriff. Typically, the
              piercing is done through the upper rim of the navel. It offers a
              variety of jewelry options, such as curved barbells and dangle
              designs. Healing time can be longer than other piercings, often
              taking 6-12 months.
            </AccordionContent>
          </AccordionItem>{" "}
          <AccordionItem value="item-6">
            <AccordionTrigger>Nipple Piercings</AccordionTrigger>
            <AccordionContent>
              Nipple piercings are chosen for both aesthetic and sensory
              reasons. They can be done on one or both nipples, with horizontal
              and vertical placements being common. Jewelry options include
              barbells and rings. Healing time is relatively long, often between
              6-12 months, and proper aftercare is essential to avoid
              infections.
            </AccordionContent>
          </AccordionItem>{" "}
          <AccordionItem value="item-7">
            <AccordionTrigger>Eyebrow Piercings</AccordionTrigger>
            <AccordionContent>
              Eyebrow piercings add a distinct edge to facial aesthetics.
              Typically placed vertically through the eyebrow, these piercings
              can also be done horizontally or at an angle. Jewelry options
              include curved barbells and rings. The healing time for eyebrow
              piercings is usually around 6-8 weeks, and care should be taken to
              avoid snagging or irritation.
            </AccordionContent>
          </AccordionItem>{" "}
          <AccordionItem value="item-8">
            <AccordionTrigger>Cartilage Piercings</AccordionTrigger>
            <AccordionContent>
              Cartilage piercings refer to any piercing done through the ear
              cartilage, such as the helix, tragus, conch, and rook. These
              piercings are popular for creating intricate ear designs and can
              be adorned with studs, rings, and other decorative jewelry.
              Healing times vary significantly, often ranging from 3-12 months,
              due to the density of cartilage tissue.
            </AccordionContent>
          </AccordionItem>{" "}
          <AccordionItem value="item-9">
            <AccordionTrigger>Industrial Piercings</AccordionTrigger>
            <AccordionContent>
              Industrial piercings consist of two separate piercings connected
              by a single piece of jewelry, typically a straight barbell. The
              most common placement is through the upper ear cartilage. This
              piercing is bold and unique, offering a distinctive look. Healing
              can take anywhere from 6 months to a year, and careful aftercare
              is necessary to prevent issues.
            </AccordionContent>
          </AccordionItem>{" "}
          <AccordionItem value="item-10">
            <AccordionTrigger>Genital Piercings</AccordionTrigger>
            <AccordionContent>
              Genital piercings include a variety of styles for both men and
              women, such as the Prince Albert, clitoral hood, and labia
              piercings. These piercings are chosen for aesthetic, cultural, and
              sexual reasons. Healing times vary widely depending on the
              specific type of piercing, generally ranging from a few weeks to
              several months. Due to the sensitive nature of these areas,
              professional piercing and diligent aftercare are crucial.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </TabsContent>
    </Tabs>
  );
}
