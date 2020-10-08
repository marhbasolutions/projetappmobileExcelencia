<?php

namespace  App\Services;


use Symfony\Component\Serializer\Encoder\JsonEncode;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

class JsonSerialiser
{
    public function jsonSerialiser($data)
    {
        $encoders = [new XmlEncoder(), new JsonEncode()];
        $normalizers = [new ObjectNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);

        $data = $serializer->serialize($data, 'json', [
            'circular_reference_handler' => function ($object) {
                return $object->getId();
            }
        ]);

        return json_encode($data, true);
    }
}