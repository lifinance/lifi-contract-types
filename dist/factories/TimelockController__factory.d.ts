import { Signer, ContractFactory, BigNumberish, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { TimelockController, TimelockControllerInterface } from "../TimelockController";
declare type TimelockControllerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TimelockController__factory extends ContractFactory {
    constructor(...args: TimelockControllerConstructorParams);
    deploy(minDelay: PromiseOrValue<BigNumberish>, proposers: PromiseOrValue<string>[], executors: PromiseOrValue<string>[], admin: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<TimelockController>;
    getDeployTransaction(minDelay: PromiseOrValue<BigNumberish>, proposers: PromiseOrValue<string>[], executors: PromiseOrValue<string>[], admin: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): TimelockController;
    connect(signer: Signer): TimelockController__factory;
    static readonly bytecode = "0x608060405234801562000010575f80fd5b5060405162002abb38038062002abb8339810160408190526200003391620003de565b6200004d5f8051602062002a3b8339815191528062000209565b620000755f8051602062002a5b8339815191525f8051602062002a3b83398151915262000209565b6200009d5f8051602062002a7b8339815191525f8051602062002a3b83398151915262000209565b620000c55f8051602062002a9b8339815191525f8051602062002a3b83398151915262000209565b620000df5f8051602062002a3b8339815191523062000253565b6001600160a01b038116156200010957620001095f8051602062002a3b8339815191528262000253565b5f5b83518110156200018257620001515f8051602062002a5b8339815191528583815181106200013d576200013d62000460565b60200260200101516200025360201b60201c565b620001795f8051602062002a9b8339815191528583815181106200013d576200013d62000460565b6001016200010b565b505f5b8251811015620001c057620001b75f8051602062002a7b8339815191528483815181106200013d576200013d62000460565b60010162000185565b506002849055604080515f8152602081018690527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a15050505062000474565b5f82815260208190526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b6200025f828262000263565b5050565b5f828152602081815260408083206001600160a01b038516845290915290205460ff166200025f575f828152602081815260408083206001600160a01b03851684529091529020805460ff19166001179055620002bd3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b634e487b7160e01b5f52604160045260245ffd5b80516001600160a01b03811681146200032c575f80fd5b919050565b5f82601f83011262000341575f80fd5b815160206001600160401b038083111562000360576200036062000301565b8260051b604051601f19603f8301168101818110848211171562000388576200038862000301565b6040529384526020818701810194908101925087851115620003a8575f80fd5b6020870191505b84821015620003d357620003c38262000315565b83529183019190830190620003af565b979650505050505050565b5f805f8060808587031215620003f2575f80fd5b845160208601519094506001600160401b038082111562000411575f80fd5b6200041f8883890162000331565b9450604087015191508082111562000435575f80fd5b50620004448782880162000331565b925050620004556060860162000315565b905092959194509250565b634e487b7160e01b5f52603260045260245ffd5b6125b980620004825f395ff3fe6080604052600436106101b2575f3560e01c80638065657f116100e7578063bc197c8111610087578063d547741f11610062578063d547741f146105d7578063e38335e5146105f6578063f23a6e6114610609578063f27a0c921461064d575f80fd5b8063bc197c8114610549578063c4d252f51461058d578063d45c4435146105ac575f80fd5b806391d14854116100c257806391d1485414610495578063a217fddf146104e4578063b08e51c0146104f7578063b1c5f4271461052a575f80fd5b80638065657f146104245780638f2a0bb0146104435780638f61f4f514610462575f80fd5b8063248a9ca31161015257806331d507501161012d57806331d50750146103a857806336568abe146103c7578063584b153e146103e657806364d6235314610405575f80fd5b8063248a9ca31461032c5780632ab0f5291461035a5780632f2ff15d14610389575f80fd5b80630d3cf6fc1161018d5780630d3cf6fc14610253578063134008d31461028657806313bc9f2014610299578063150b7a02146102b8575f80fd5b806301d5062a146101bd57806301ffc9a7146101de57806307bd026514610212575f80fd5b366101b957005b5f80fd5b3480156101c8575f80fd5b506101dc6101d7366004611b23565b610661565b005b3480156101e9575f80fd5b506101fd6101f8366004611b92565b610735565b60405190151581526020015b60405180910390f35b34801561021d575f80fd5b506102457fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e6381565b604051908152602001610209565b34801561025e575f80fd5b506102457f5f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca581565b6101dc610294366004611bd1565b610790565b3480156102a4575f80fd5b506101fd6102b3366004611c38565b610885565b3480156102c3575f80fd5b506102fb6102d2366004611d55565b7f150b7a0200000000000000000000000000000000000000000000000000000000949350505050565b6040517fffffffff000000000000000000000000000000000000000000000000000000009091168152602001610209565b348015610337575f80fd5b50610245610346366004611c38565b5f9081526020819052604090206001015490565b348015610365575f80fd5b506101fd610374366004611c38565b5f908152600160208190526040909120541490565b348015610394575f80fd5b506101dc6103a3366004611db9565b6108aa565b3480156103b3575f80fd5b506101fd6103c2366004611c38565b6108d3565b3480156103d2575f80fd5b506101dc6103e1366004611db9565b6108eb565b3480156103f1575f80fd5b506101fd610400366004611c38565b6109a3565b348015610410575f80fd5b506101dc61041f366004611c38565b6109b8565b34801561042f575f80fd5b5061024561043e366004611bd1565b610a88565b34801561044e575f80fd5b506101dc61045d366004611e24565b610ac6565b34801561046d575f80fd5b506102457fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc181565b3480156104a0575f80fd5b506101fd6104af366004611db9565b5f9182526020828152604080842073ffffffffffffffffffffffffffffffffffffffff93909316845291905290205460ff1690565b3480156104ef575f80fd5b506102455f81565b348015610502575f80fd5b506102457ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f78381565b348015610535575f80fd5b50610245610544366004611ecd565b610d2f565b348015610554575f80fd5b506102fb610563366004611feb565b7fbc197c810000000000000000000000000000000000000000000000000000000095945050505050565b348015610598575f80fd5b506101dc6105a7366004611c38565b610d73565b3480156105b7575f80fd5b506102456105c6366004611c38565b5f9081526001602052604090205490565b3480156105e2575f80fd5b506101dc6105f1366004611db9565b610e6d565b6101dc610604366004611ecd565b610e91565b348015610614575f80fd5b506102fb61062336600461208e565b7ff23a6e610000000000000000000000000000000000000000000000000000000095945050505050565b348015610658575f80fd5b50600254610245565b7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc161068b81611132565b5f61069a898989898989610a88565b90506106a6818461113f565b5f817f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8b8b8b8b8b8a6040516106e196959493929190612135565b60405180910390a3831561072a57807f20fda5fd27a1ea7bf5b9567f143ac5470bb059374a27e8f67cb44f946f6d03878560405161072191815260200190565b60405180910390a25b505050505050505050565b5f7fffffffff0000000000000000000000000000000000000000000000000000000082167f4e2312e000000000000000000000000000000000000000000000000000000000148061078a575061078a82611286565b92915050565b5f80527fdae2aa361dfd1ca020a396615627d436107c35eff9fe7738a3512819782d70696020527f5ba6852781629bcdcd4bdaa6de76d786f1c64b16acdac474e55bebc0ea157951547fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e639060ff1661080c5761080c813361131c565b5f61081b888888888888610a88565b905061082781856113d3565b6108338888888861150f565b5f817fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b588a8a8a8a60405161086a949392919061217f565b60405180910390a361087b8161160f565b5050505050505050565b5f818152600160205260408120546001811180156108a35750428111155b9392505050565b5f828152602081905260409020600101546108c481611132565b6108ce83836116b7565b505050565b5f8181526001602052604081205481905b1192915050565b73ffffffffffffffffffffffffffffffffffffffff81163314610995576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084015b60405180910390fd5b61099f82826117a5565b5050565b5f8181526001602081905260408220546108e4565b333014610a47576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f54696d656c6f636b436f6e74726f6c6c65723a2063616c6c6572206d7573742060448201527f62652074696d656c6f636b000000000000000000000000000000000000000000606482015260840161098c565b60025460408051918252602082018390527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a1600255565b5f868686868686604051602001610aa496959493929190612135565b6040516020818303038152906040528051906020012090509695505050505050565b7fb09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1610af081611132565b888714610b7f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d6160448201527f7463680000000000000000000000000000000000000000000000000000000000606482015260840161098c565b888514610c0e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d6160448201527f7463680000000000000000000000000000000000000000000000000000000000606482015260840161098c565b5f610c1f8b8b8b8b8b8b8b8b610d2f565b9050610c2b818461113f565b5f5b8a811015610ce05780827f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8e8e85818110610c6a57610c6a6121be565b9050602002016020810190610c7f91906121eb565b8d8d86818110610c9157610c916121be565b905060200201358c8c87818110610caa57610caa6121be565b9050602002810190610cbc9190612204565b8c8b604051610cd096959493929190612135565b60405180910390a3600101610c2d565b508315610d2257807f20fda5fd27a1ea7bf5b9567f143ac5470bb059374a27e8f67cb44f946f6d038785604051610d1991815260200190565b60405180910390a25b5050505050505050505050565b5f8888888888888888604051602001610d4f989796959493929190612332565b60405160208183030381529060405280519060200120905098975050505050505050565b7ffd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f783610d9d81611132565b610da6826109a3565b610e32576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20636160448201527f6e6e6f742062652063616e63656c6c6564000000000000000000000000000000606482015260840161098c565b5f828152600160205260408082208290555183917fbaa1eb22f2a492ba1a5fea61b8df4d27c6c8b5f3971e63bb58fa14ff72eedb7091a25050565b5f82815260208190526040902060010154610e8781611132565b6108ce83836117a5565b5f80527fdae2aa361dfd1ca020a396615627d436107c35eff9fe7738a3512819782d70696020527f5ba6852781629bcdcd4bdaa6de76d786f1c64b16acdac474e55bebc0ea157951547fd8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e639060ff16610f0d57610f0d813361131c565b878614610f9c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d6160448201527f7463680000000000000000000000000000000000000000000000000000000000606482015260840161098c565b87841461102b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d6160448201527f7463680000000000000000000000000000000000000000000000000000000000606482015260840161098c565b5f61103c8a8a8a8a8a8a8a8a610d2f565b905061104881856113d3565b5f5b8981101561111c575f8b8b83818110611065576110656121be565b905060200201602081019061107a91906121eb565b90505f8a8a8481811061108f5761108f6121be565b905060200201359050365f8a8a868181106110ac576110ac6121be565b90506020028101906110be9190612204565b915091506110ce8484848461150f565b84867fc2617efa69bab66782fa219543714338489c4e9e178271560a91b82c3f612b5886868686604051611105949392919061217f565b60405180910390a35050505080600101905061104a565b506111268161160f565b50505050505050505050565b61113c813361131c565b50565b611148826108d3565b156111d5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20616c60448201527f7265616479207363686564756c65640000000000000000000000000000000000606482015260840161098c565b600254811015611267576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a20696e73756666696369656e7460448201527f2064656c61790000000000000000000000000000000000000000000000000000606482015260840161098c565b6112718142612424565b5f928352600160205260409092209190915550565b5f7fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b00000000000000000000000000000000000000000000000000000000148061078a57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff0000000000000000000000000000000000000000000000000000000083161461078a565b5f8281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff1661099f576113598161185a565b611364836020611879565b604051602001611375929190612459565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152908290527f08c379a000000000000000000000000000000000000000000000000000000000825261098c916004016124d9565b6113dc82610885565b611468576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20697360448201527f206e6f7420726561647900000000000000000000000000000000000000000000606482015260840161098c565b80158061148357505f81815260016020819052604090912054145b61099f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a206d697373696e67206465706560448201527f6e64656e63790000000000000000000000000000000000000000000000000000606482015260840161098c565b5f8473ffffffffffffffffffffffffffffffffffffffff16848484604051611538929190612529565b5f6040518083038185875af1925050503d805f8114611572576040519150601f19603f3d011682016040523d82523d5f602084013e611577565b606091505b5050905080611608576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603360248201527f54696d656c6f636b436f6e74726f6c6c65723a20756e6465726c79696e67207460448201527f72616e73616374696f6e20726576657274656400000000000000000000000000606482015260840161098c565b5050505050565b61161881610885565b6116a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20697360448201527f206e6f7420726561647900000000000000000000000000000000000000000000606482015260840161098c565b5f90815260016020819052604090912055565b5f8281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff1661099f575f8281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff85168452909152902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790556117473390565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b5f8281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516845290915290205460ff161561099f575f8281526020818152604080832073ffffffffffffffffffffffffffffffffffffffff8516808552925280832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b606061078a73ffffffffffffffffffffffffffffffffffffffff831660145b60605f611887836002612538565b611892906002612424565b67ffffffffffffffff8111156118aa576118aa611c4f565b6040519080825280601f01601f1916602001820160405280156118d4576020820181803683370190505b5090507f3000000000000000000000000000000000000000000000000000000000000000815f8151811061190a5761190a6121be565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811061196c5761196c6121be565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a9053505f6119a6846002612538565b6119b1906001612424565b90505b6001811115611a4d577f303132333435363738396162636465660000000000000000000000000000000085600f16601081106119f2576119f26121be565b1a60f81b828281518110611a0857611a086121be565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a90535060049490941c93611a468161254f565b90506119b4565b5083156108a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161098c565b803573ffffffffffffffffffffffffffffffffffffffff81168114611ad9575f80fd5b919050565b5f8083601f840112611aee575f80fd5b50813567ffffffffffffffff811115611b05575f80fd5b602083019150836020828501011115611b1c575f80fd5b9250929050565b5f805f805f805f60c0888a031215611b39575f80fd5b611b4288611ab6565b965060208801359550604088013567ffffffffffffffff811115611b64575f80fd5b611b708a828b01611ade565b989b979a50986060810135976080820135975060a09091013595509350505050565b5f60208284031215611ba2575f80fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146108a3575f80fd5b5f805f805f8060a08789031215611be6575f80fd5b611bef87611ab6565b955060208701359450604087013567ffffffffffffffff811115611c11575f80fd5b611c1d89828a01611ade565b979a9699509760608101359660809091013595509350505050565b5f60208284031215611c48575f80fd5b5035919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611cc357611cc3611c4f565b604052919050565b5f82601f830112611cda575f80fd5b813567ffffffffffffffff811115611cf457611cf4611c4f565b611d2560207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611c7c565b818152846020838601011115611d39575f80fd5b816020850160208301375f918101602001919091529392505050565b5f805f8060808587031215611d68575f80fd5b611d7185611ab6565b9350611d7f60208601611ab6565b925060408501359150606085013567ffffffffffffffff811115611da1575f80fd5b611dad87828801611ccb565b91505092959194509250565b5f8060408385031215611dca575f80fd5b82359150611dda60208401611ab6565b90509250929050565b5f8083601f840112611df3575f80fd5b50813567ffffffffffffffff811115611e0a575f80fd5b6020830191508360208260051b8501011115611b1c575f80fd5b5f805f805f805f805f60c08a8c031215611e3c575f80fd5b893567ffffffffffffffff80821115611e53575f80fd5b611e5f8d838e01611de3565b909b50995060208c0135915080821115611e77575f80fd5b611e838d838e01611de3565b909950975060408c0135915080821115611e9b575f80fd5b50611ea88c828d01611de3565b9a9d999c50979a969997986060880135976080810135975060a0013595509350505050565b5f805f805f805f8060a0898b031215611ee4575f80fd5b883567ffffffffffffffff80821115611efb575f80fd5b611f078c838d01611de3565b909a50985060208b0135915080821115611f1f575f80fd5b611f2b8c838d01611de3565b909850965060408b0135915080821115611f43575f80fd5b50611f508b828c01611de3565b999c989b509699959896976060870135966080013595509350505050565b5f82601f830112611f7d575f80fd5b8135602067ffffffffffffffff821115611f9957611f99611c4f565b8160051b611fa8828201611c7c565b9283528481018201928281019087851115611fc1575f80fd5b83870192505b84831015611fe057823582529183019190830190611fc7565b979650505050505050565b5f805f805f60a08688031215611fff575f80fd5b61200886611ab6565b945061201660208701611ab6565b9350604086013567ffffffffffffffff80821115612032575f80fd5b61203e89838a01611f6e565b94506060880135915080821115612053575f80fd5b61205f89838a01611f6e565b93506080880135915080821115612074575f80fd5b5061208188828901611ccb565b9150509295509295909350565b5f805f805f60a086880312156120a2575f80fd5b6120ab86611ab6565b94506120b960208701611ab6565b93506040860135925060608601359150608086013567ffffffffffffffff8111156120e2575f80fd5b61208188828901611ccb565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b73ffffffffffffffffffffffffffffffffffffffff8716815285602082015260a060408201525f61216a60a0830186886120ee565b60608301949094525060800152949350505050565b73ffffffffffffffffffffffffffffffffffffffff85168152836020820152606060408201525f6121b46060830184866120ee565b9695505050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f602082840312156121fb575f80fd5b6108a382611ab6565b5f8083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612237575f80fd5b83018035915067ffffffffffffffff821115612251575f80fd5b602001915036819003821315611b1c575f80fd5b5f838385526020808601955060208560051b830101845f5b87811015612325577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301895281357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18836030181126122dd575f80fd5b8701848101903567ffffffffffffffff8111156122f8575f80fd5b803603821315612306575f80fd5b6123118582846120ee565b9a86019a945050509083019060010161227d565b5090979650505050505050565b60a080825281018890525f8960c08301825b8b81101561237f5773ffffffffffffffffffffffffffffffffffffffff61236a84611ab6565b16825260209283019290910190600101612344565b5083810360208501528881527f07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8911156123b7575f80fd5b8860051b9150818a602083013701828103602090810160408501526123df9082018789612265565b60608401959095525050608001529695505050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b8082018082111561078a5761078a6123f7565b5f5b83811015612451578181015183820152602001612439565b50505f910152565b7f416363657373436f6e74726f6c3a206163636f756e742000000000000000000081525f8351612490816017850160208801612437565b7f206973206d697373696e6720726f6c652000000000000000000000000000000060179184019182015283516124cd816028840160208801612437565b01602801949350505050565b602081525f82518060208401526124f7816040850160208701612437565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169190910160400192915050565b818382375f9101908152919050565b808202811582820484141761078a5761078a6123f7565b5f8161255d5761255d6123f7565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff019056fea26469706673582212204d2a01e5e42be5713c40756c22ca71e5d969e0aa7b4d5d293664c6e0801dea7464736f6c634300081600335f58e3a2316349923ce3780f8d587db2d72378aed66a8261c916544fa6846ca5b09aa5aeb3702cfd50b6b62bc4532604938f21248a27a1d5ca736082b6819cc1d8aa0f3194971a2a116679f7c2090f6939c8d4e01a2a8d7e41d55e5351469e63fd643c72710c63c0180259aba6b2d05451e3591a24e58b62239378085726f783";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "minDelay";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "proposers";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "executors";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "admin";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "CANCELLER_ROLE";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "DEFAULT_ADMIN_ROLE";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "EXECUTOR_ROLE";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "PROPOSER_ROLE";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "TIMELOCK_ADMIN_ROLE";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "cancel";
        readonly inputs: readonly [{
            readonly name: "id";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "execute";
        readonly inputs: readonly [{
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "payload";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "predecessor";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "salt";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "executeBatch";
        readonly inputs: readonly [{
            readonly name: "targets";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "values";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "payloads";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }, {
            readonly name: "predecessor";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "salt";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "getMinDelay";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getRoleAdmin";
        readonly inputs: readonly [{
            readonly name: "role";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getTimestamp";
        readonly inputs: readonly [{
            readonly name: "id";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "grantRole";
        readonly inputs: readonly [{
            readonly name: "role";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "hasRole";
        readonly inputs: readonly [{
            readonly name: "role";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "hashOperation";
        readonly inputs: readonly [{
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "predecessor";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "salt";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "hashOperationBatch";
        readonly inputs: readonly [{
            readonly name: "targets";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "values";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "payloads";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }, {
            readonly name: "predecessor";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "salt";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "isOperation";
        readonly inputs: readonly [{
            readonly name: "id";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "isOperationDone";
        readonly inputs: readonly [{
            readonly name: "id";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "isOperationPending";
        readonly inputs: readonly [{
            readonly name: "id";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "isOperationReady";
        readonly inputs: readonly [{
            readonly name: "id";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "onERC1155BatchReceived";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "onERC1155Received";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "onERC721Received";
        readonly inputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "renounceRole";
        readonly inputs: readonly [{
            readonly name: "role";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "revokeRole";
        readonly inputs: readonly [{
            readonly name: "role";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "account";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "schedule";
        readonly inputs: readonly [{
            readonly name: "target";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "predecessor";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "salt";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "delay";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "scheduleBatch";
        readonly inputs: readonly [{
            readonly name: "targets";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }, {
            readonly name: "values";
            readonly type: "uint256[]";
            readonly internalType: "uint256[]";
        }, {
            readonly name: "payloads";
            readonly type: "bytes[]";
            readonly internalType: "bytes[]";
        }, {
            readonly name: "predecessor";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "salt";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "delay";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "supportsInterface";
        readonly inputs: readonly [{
            readonly name: "interfaceId";
            readonly type: "bytes4";
            readonly internalType: "bytes4";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bool";
            readonly internalType: "bool";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "updateDelay";
        readonly inputs: readonly [{
            readonly name: "newDelay";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "CallExecuted";
        readonly inputs: readonly [{
            readonly name: "id";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "index";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "target";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "CallSalt";
        readonly inputs: readonly [{
            readonly name: "id";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "salt";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "CallScheduled";
        readonly inputs: readonly [{
            readonly name: "id";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "index";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "target";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "value";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "data";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }, {
            readonly name: "predecessor";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }, {
            readonly name: "delay";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "Cancelled";
        readonly inputs: readonly [{
            readonly name: "id";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "MinDelayChange";
        readonly inputs: readonly [{
            readonly name: "oldDuration";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "newDuration";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "RoleAdminChanged";
        readonly inputs: readonly [{
            readonly name: "role";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "previousAdminRole";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "newAdminRole";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "RoleGranted";
        readonly inputs: readonly [{
            readonly name: "role";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "account";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "sender";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "RoleRevoked";
        readonly inputs: readonly [{
            readonly name: "role";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "account";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "sender";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }];
    static createInterface(): TimelockControllerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TimelockController;
}
export {};
