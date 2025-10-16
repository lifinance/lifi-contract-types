import { Signer, ContractFactory, BytesLike, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AcrossFacetPackedV4, AcrossFacetPackedV4Interface } from "../AcrossFacetPackedV4";
type AcrossFacetPackedV4ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AcrossFacetPackedV4__factory extends ContractFactory {
    constructor(...args: AcrossFacetPackedV4ConstructorParams);
    deploy(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<BytesLike>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AcrossFacetPackedV4>;
    getDeployTransaction(_spokePool: PromiseOrValue<string>, _wrappedNative: PromiseOrValue<BytesLike>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AcrossFacetPackedV4;
    connect(signer: Signer): AcrossFacetPackedV4__factory;
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b50604051612a28380380612a2883398101604081905261002e916100b7565b5f80546001600160a01b0319166001600160a01b038381169190911790915583161580610059575081155b8061006b57506001600160a01b038116155b15610089576040516306b7c75960e31b815260040160405180910390fd5b506001600160a01b0390911660805260a0526100f7565b6001600160a01b03811681146100b4575f5ffd5b50565b5f5f5f606084860312156100c9575f5ffd5b83516100d4816100a0565b6020850151604086015191945092506100ec816100a0565b809150509250925092565b60805160a0516128df6101495f395f81816102c401528181611144015261166801525f818161035001528181610bec01528181610e4901528181610fa201528181611112015261161201526128df5ff3fe608060405260043610610109575f3560e01c806372dd147e116100a1578063c93ff54011610071578063e30c397811610057578063e30c3978146102f4578063f2fde38b14610320578063f65039921461033f575f5ffd5b8063c93ff54014610294578063d999984d146102b3575f5ffd5b806372dd147e1461020a57806379b805121461021d5780638da5cb5b1461023c578063c5d60e971461028c575f5ffd5b806336b92404116100dc57806336b92404146101a45780634c478642146101b85780637200b829146101d75780637260352d146101eb575f5ffd5b8063012f27e71461010d5780631458d7ad146101435780631626cde11461016457806323452b9c14610190575b5f5ffd5b348015610118575f5ffd5b5061012c610127366004611edb565b610372565b60405161013a929190612032565b60405180910390f35b34801561014e575f5ffd5b5061016261015d366004612180565b6106be565b005b34801561016f575f5ffd5b5061018361017e366004612212565b6107f1565b60405161013a919061225c565b34801561019b575f5ffd5b50610162610ac9565b3480156101af575f5ffd5b50610162610b92565b3480156101c3575f5ffd5b506101626101d2366004612275565b610dc3565b3480156101e2575f5ffd5b50610162610e9b565b3480156101f6575f5ffd5b50610162610205366004612212565b610f7f565b6101626102183660046122e6565b6110fb565b348015610228575f5ffd5b5061012c610237366004611edb565b611289565b348015610247575f5ffd5b505f546102679073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161013a565b6101626115fb565b34801561029f575f5ffd5b506101836102ae3660046122e6565b61180a565b3480156102be575f5ffd5b506102e67f000000000000000000000000000000000000000000000000000000000000000081565b60405190815260200161013a565b3480156102ff575f5ffd5b506001546102679073ffffffffffffffffffffffffffffffffffffffff1681565b34801561032b575f5ffd5b5061016261033a366004612318565b6118e5565b34801561034a575f5ffd5b506102677f000000000000000000000000000000000000000000000000000000000000000081565b6104066040518061014001604052805f815260200160608152602001606081526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f81526020015f81526020015f151581526020015f151581525090565b61047d6040518061016001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f6fffffffffffffffffffffffffffffffff1681526020015f81526020015f63ffffffff1681526020015f63ffffffff1681526020015f63ffffffff168152602001606081525090565b60c08310156104b8576040517fca0ad26000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104c6600c60048587612331565b6104cf91612358565b82525f6104e06038602c8688612331565b6104e991612395565b7fffffffffffffffffffffffff000000000000000000000000000000000000000016036105475761051e604c602c8587612331565b61052791612358565b73ffffffffffffffffffffffffffffffffffffffff1660a0830152610562565b7311f111f111f111f111f111f111f111f111f111f160a08301525b6105706094608c8587612331565b610579916123fb565b60c01c60e083015261058f604c602c8587612331565b61059891612358565b81526105a8602c600c8587612331565b6105b191612358565b60208201525f60408201526105ca606c604c8587612331565b6105d391612358565b60608201526105e6608c606c8587612331565b6105ef91612358565b608082015261060260b460948587612331565b61060b91612358565b60c082015261061e60b860b48587612331565b61062791612460565b60e090811c9082015261063e60bc60b88587612331565b61064791612460565b60e01c61010082015261065e60c060bc8587612331565b61066791612460565b60e01c61012082015261067d8360c08187612331565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f920191909152505050506101408201525b9250929050565b5f5473ffffffffffffffffffffffffffffffffffffffff16331461070e576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8673ffffffffffffffffffffffffffffffffffffffff1686866040516107369291906124d3565b5f604051808303815f865af19150503d805f811461076f576040519150601f19603f3d011682016040523d82523d5f602084013e610774565b606091505b5050905080156107b657610789848484611a41565b6040517fdfbe65d77c5440a078a2a1d95803d06b4a5f85b26ba3ec87bc9b421781e8dec1905f90a16107e8565b6040517f750b219c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050505050565b60606fffffffffffffffffffffffffffffffff82111561083d576040517f340dabef00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f7f36b924040000000000000000000000000000000000000000000000000000000061086c60208701876124e2565b604080517fffffffff000000000000000000000000000000000000000000000000000000009093166020848101919091527fffffffffffffffff0000000000000000000000000000000000000000000000009092166024840152870135602c830152860135604c820152606c8101859052608c01604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905290505f608080870180359186901b9060a0890135906109309060608b01612521565b60c01b6040516020016109a094939291909384527fffffffffffffffffffffffffffffffff0000000000000000000000000000000092909216602084015260308301527fffffffffffffffff00000000000000000000000000000000000000000000000016605082015260580190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905290505f60c08701356109e7610100890160e08a01612548565b60e01b6109fc6101208a016101008b01612548565b60e01b610a116101408b016101208c01612548565b6040805160208101959095527fffffffff0000000000000000000000000000000000000000000000000000000093841690850152908216604484015260e01b166048820152604c01604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190529050828282610a9a6101408b018b61256b565b604051602001610aae9594939291906125e3565b60405160208183030381529060405293505050509392505050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610b19576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff16610b68576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b5f610ba1606c604c3684612331565b610baa91612358565b90505f610bbb609c608c3684612331565b610bc491612615565b60801c9050610bd582333084611a71565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663ad5425c6610c1f602c600c365f612331565b610c2891612358565b610c36604c602c365f612331565b610c3f91612358565b85610c4e608c606c365f612331565b610c5791612358565b86610c6660bc609c365f612331565b610c6f91612358565b610c7d60c460bc365f612331565b610c86916123fb565b60c01c610c9760e460c4365f612331565b610ca091612358565b610cae60e860e4365f612331565b610cb791612460565b60e01c610cc860ec60e8365f612331565b610cd191612460565b60e01c610ce260f060ec365f612331565b610ceb91612460565b60e01c610cfb3660f0815f612331565b6040518e63ffffffff1660e01b8152600401610d239d9c9b9a999897969594939291906126c1565b5f604051808303815f87803b158015610d3a575f5ffd5b505af1158015610d4c573d5f5f3e3d5ffd5b507fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c1339250610d829150600c90506004365f612331565b610d8b916123fb565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a15050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610e13576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f5b81811015610e9657610e8e838383818110610e3257610e3261274b565b9050602002016020810190610e479190612318565b7f00000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611b33565b600101610e15565b505050565b60015473ffffffffffffffffffffffffffffffffffffffff16338114610eed576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b610f8b82333084611a71565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663ad5425c6604085013560208601358560808801803590879060a08b013590610fee9060608d01612521565b60c08c01356110046101008e0160e08f01612548565b8d6101000160208101906110189190612548565b8e61012001602081019061102c9190612548565b8f80610140019061103d919061256b565b6040518e63ffffffff1660e01b81526004016110659d9c9b9a999897969594939291906126c1565b5f604051808303815f87803b15801561107c575f5ffd5b505af115801561108e573d5f5f3e3d5ffd5b507fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c13392506110c291505060208501856124e2565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a1505050565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663ad5425c634604084013560208501357f000000000000000000000000000000000000000000000000000000000000000060808701803590859060a08a01359061117f9060608c01612521565b60c08b01356111956101008d0160e08e01612548565b6111a76101208e016101008f01612548565b8d6101200160208101906111bb9190612548565b8e8061014001906111cc919061256b565b6040518f63ffffffff1660e01b81526004016111f49d9c9b9a999897969594939291906126c1565b5f604051808303818588803b15801561120b575f5ffd5b505af115801561121d573d5f5f3e3d5ffd5b507fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c13393506112529250505060208301836124e2565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a150565b61131d6040518061014001604052805f815260200160608152602001606081526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f81526020015f81526020015f151581526020015f151581525090565b6113946040518061016001604052805f81526020015f81526020015f81526020015f81526020015f81526020015f6fffffffffffffffffffffffffffffffff1681526020015f81526020015f63ffffffff1681526020015f63ffffffff1681526020015f63ffffffff168152602001606081525090565b60f08310156113cf576040517fca0ad26000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6113dd600c60048587612331565b6113e691612358565b82526113f6606c604c8587612331565b6113ff91612358565b73ffffffffffffffffffffffffffffffffffffffff1660808301525f6114296038602c8688612331565b61143291612395565b7fffffffffffffffffffffffff0000000000000000000000000000000000000000160361149057611467604c602c8587612331565b61147091612358565b73ffffffffffffffffffffffffffffffffffffffff1660a08301526114ab565b7311f111f111f111f111f111f111f111f111f111f160a08301525b6114b9609c608c8587612331565b6114c291612615565b60801c60c08301526114d860c460bc8587612331565b6114e1916123fb565b60c01c60e08301526114f7604c602c8587612331565b61150091612358565b8152611510602c600c8587612331565b61151991612358565b602082015261152c606c604c8587612331565b61153591612358565b6040820152611548608c606c8587612331565b61155191612358565b606082015261156460bc609c8587612331565b61156d91612358565b608082015261158060e460c48587612331565b61158991612358565b60c082015261159c60e860e48587612331565b6115a591612460565b60e090811c908201526115bc60ec60e88587612331565b6115c591612460565b60e01c6101008201526115dc60f060ec8587612331565b6115e591612460565b60e01c61012082015261067d8360f08187612331565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663ad5425c634611646602c600c365f612331565b61164f91612358565b61165d604c602c365f612331565b61166691612358565b7f0000000000000000000000000000000000000000000000000000000000000000611695606c604c365f612331565b61169e91612358565b346116ad608c606c365f612331565b6116b691612358565b6116c46094608c365f612331565b6116cd916123fb565b60c01c6116de60b46094365f612331565b6116e791612358565b6116f560b860b4365f612331565b6116fe91612460565b60e01c61170f60bc60b8365f612331565b61171891612460565b60e01c61172960c060bc365f612331565b61173291612460565b60e01c6117423660c0815f612331565b6040518f63ffffffff1660e01b815260040161176a9d9c9b9a999897969594939291906126c1565b5f604051808303818588803b158015611781575f5ffd5b505af1158015611793573d5f5f3e3d5ffd5b507fe11352fef0e24c9902a94910b5ce929151ea227f4c68572aada8f2105c66c13393506117cb9250600c915060049050365f612331565b6117d4916123fb565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a1565b60607fc5d60e970000000000000000000000000000000000000000000000000000000061183a60208401846124e2565b604084013560208501356080860180359060a08801359061185e9060608a01612521565b60c090811b908901356118786101008b0160e08c01612548565b60e01b61188d6101208c016101008d01612548565b60e01b6118a26101408d016101208e01612548565b60e01b6118b36101408e018e61256b565b6040516020016118cf9d9c9b9a99989796959493929190612778565b6040516020818303038152906040529050919050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314611935576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8116611982576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff8216036119d1576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b73ffffffffffffffffffffffffffffffffffffffff8316611a6657610e968282611b5f565b610e96838383611bd0565b73ffffffffffffffffffffffffffffffffffffffff8416611abe576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611b0b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611b2d73ffffffffffffffffffffffffffffffffffffffff8516848484611c3e565b50505050565b610e968383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611c96565b73ffffffffffffffffffffffffffffffffffffffff8216611bac576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611bcc73ffffffffffffffffffffffffffffffffffffffff831682611dbd565b5050565b73ffffffffffffffffffffffffffffffffffffffff8216611c1d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e9673ffffffffffffffffffffffffffffffffffffffff84168383611dd6565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716611c8957637939f4245f526004601cfd5b5f60605260405250505050565b73ffffffffffffffffffffffffffffffffffffffff841615611b2d5773ffffffffffffffffffffffffffffffffffffffff8316611cff576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611d72573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611d969190612892565b1015611b2d57611b2d73ffffffffffffffffffffffffffffffffffffffff85168483611e1f565b5f385f3884865af1611bcc5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611e16576390b8ec185f526004601cfd5b5f603452505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611e16575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611e1657633e3f8f735f526004601cfd5b5f5f83601f840112611ead575f5ffd5b50813567ffffffffffffffff811115611ec4575f5ffd5b6020830191508360208285010111156106b7575f5ffd5b5f5f60208385031215611eec575f5ffd5b823567ffffffffffffffff811115611f02575f5ffd5b611f0e85828601611e9d565b90969095509350505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b80518252602081015160208301526040810151604083015260608101516060830152608081015160808301525f60a0820151611fb660a08501826fffffffffffffffffffffffffffffffff169052565b5060c082015160c084015260e0820151611fd860e085018263ffffffff169052565b50610100820151611ff261010085018263ffffffff169052565b5061012082015161200c61012085018263ffffffff169052565b5061014082015161016061014085015261202a610160850182611f1a565b949350505050565b60408152825160408201525f60208401516101406060840152612059610180840182611f1a565b905060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08483030160808501526120948282611f1a565b91505060608501516120be60a085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060a085015173ffffffffffffffffffffffffffffffffffffffff811660e08501525060c085015161010084015260e085015161012084015261010085015161212e61014085018215159052565b506101208501511515610160840152828103602084015261214f8185611f66565b95945050505050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461217b575f5ffd5b919050565b5f5f5f5f5f5f60a08789031215612195575f5ffd5b61219e87612158565b9550602087013567ffffffffffffffff8111156121b9575f5ffd5b6121c589828a01611e9d565b90965094506121d8905060408801612158565b92506121e660608801612158565b95989497509295919493608090920135925050565b5f610160828403121561220c575f5ffd5b50919050565b5f5f5f60608486031215612224575f5ffd5b833567ffffffffffffffff81111561223a575f5ffd5b612246868287016121fb565b9660208601359650604090950135949350505050565b602081525f61226e6020830184611f1a565b9392505050565b5f5f60208385031215612286575f5ffd5b823567ffffffffffffffff81111561229c575f5ffd5b8301601f810185136122ac575f5ffd5b803567ffffffffffffffff8111156122c2575f5ffd5b8560208260051b84010111156122d6575f5ffd5b6020919091019590945092505050565b5f602082840312156122f6575f5ffd5b813567ffffffffffffffff81111561230c575f5ffd5b61202a848285016121fb565b5f60208284031215612328575f5ffd5b61226e82612158565b5f5f8585111561233f575f5ffd5b8386111561234b575f5ffd5b5050820193919092039150565b8035602083101561238f577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff602084900360031b1b165b92915050565b80357fffffffffffffffffffffffff0000000000000000000000000000000000000000811690600c8410156123f4577fffffffffffffffffffffffff00000000000000000000000000000000000000008085600c0360031b1b82161691505b5092915050565b80357fffffffffffffffff00000000000000000000000000000000000000000000000081169060088410156123f4577fffffffffffffffff000000000000000000000000000000000000000000000000808560080360031b1b82161691505092915050565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156123f4577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505092915050565b81818437505f910190815290565b818382375f9101908152919050565b5f602082840312156124f2575f5ffd5b81357fffffffffffffffff0000000000000000000000000000000000000000000000008116811461226e575f5ffd5b5f60208284031215612531575f5ffd5b813567ffffffffffffffff8116811461226e575f5ffd5b5f60208284031215612558575f5ffd5b813563ffffffff8116811461226e575f5ffd5b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261259e575f5ffd5b83018035915067ffffffffffffffff8211156125b8575f5ffd5b6020019150368190038213156106b7575f5ffd5b5f81518060208401855e5f93019283525090919050565b5f6126006125fa6125f4848a6125cc565b886125cc565b866125cc565b838582375f9301928352509095945050505050565b80357fffffffffffffffffffffffffffffffff0000000000000000000000000000000081169060108410156123f4577fffffffffffffffffffffffffffffffff00000000000000000000000000000000808560100360031b1b82161691505092915050565b81835281816020850137505f602082840101525f60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b8d81528c60208201528b60408201528a60608201528960808201528860a082015267ffffffffffffffff881660c08201528660e082015263ffffffff861661010082015263ffffffff851661012082015263ffffffff84166101408201526101806101608201525f6127386101808301848661267a565b9f9e505050505050505050505050505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b7fffffffff000000000000000000000000000000000000000000000000000000008e1681527fffffffffffffffff0000000000000000000000000000000000000000000000008d1660048201528b600c8201528a602c82015289604c82015288606c8201527fffffffffffffffff0000000000000000000000000000000000000000000000008816608c8201528660948201527fffffffff00000000000000000000000000000000000000000000000000000000861660b48201527fffffffff00000000000000000000000000000000000000000000000000000000851660b88201527fffffffff00000000000000000000000000000000000000000000000000000000841660bc8201525f61273860c0830184866124c5565b5f602082840312156128a2575f5ffd5b505191905056fea26469706673582212209af7a62feee64c9f619146de5f77e1e5d954cd10efcd40ad2bfe531cf4c16d6764736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_spokePool";
            readonly type: "address";
            readonly internalType: "contract IAcrossSpokePoolV4";
        }, {
            readonly name: "_wrappedNative";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "SPOKEPOOL";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IAcrossSpokePoolV4";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "WRAPPED_NATIVE";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "cancelOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "confirmOwnershipTransfer";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "decode_startBridgeTokensViaAcrossV4ERC20Packed";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetV4.AcrossV4Data";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "refundAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAmountMultiplier";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityParameter";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "decode_startBridgeTokensViaAcrossV4NativePacked";
        readonly inputs: readonly [{
            readonly name: "data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "acrossData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetV4.AcrossV4Data";
            readonly components: readonly [{
                readonly name: "receiverAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "refundAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAmountMultiplier";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityParameter";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "encode_startBridgeTokensViaAcrossV4ERC20Packed";
        readonly inputs: readonly [{
            readonly name: "_parameters";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetPackedV4.PackedParameters";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes8";
                readonly internalType: "bytes8";
            }, {
                readonly name: "receiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositor";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityParameter";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }, {
            readonly name: "sendingAssetId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "inputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "encode_startBridgeTokensViaAcrossV4NativePacked";
        readonly inputs: readonly [{
            readonly name: "_parameters";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetPackedV4.PackedParameters";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes8";
                readonly internalType: "bytes8";
            }, {
                readonly name: "receiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositor";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityParameter";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "executeCallAndWithdraw";
        readonly inputs: readonly [{
            readonly name: "_callTo";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_callData";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }, {
            readonly name: "_assetAddress";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "owner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "pendingOwner";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "setApprovalForBridge";
        readonly inputs: readonly [{
            readonly name: "tokensToApprove";
            readonly type: "address[]";
            readonly internalType: "address[]";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossV4ERC20Min";
        readonly inputs: readonly [{
            readonly name: "_parameters";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetPackedV4.PackedParameters";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes8";
                readonly internalType: "bytes8";
            }, {
                readonly name: "receiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositor";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityParameter";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }, {
            readonly name: "sendingAssetId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "inputAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossV4ERC20Packed";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossV4NativeMin";
        readonly inputs: readonly [{
            readonly name: "_parameters";
            readonly type: "tuple";
            readonly internalType: "struct AcrossFacetPackedV4.PackedParameters";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes8";
                readonly internalType: "bytes8";
            }, {
                readonly name: "receiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "depositor";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "outputAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "exclusiveRelayer";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "quoteTimestamp";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "fillDeadline";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "exclusivityParameter";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "message";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossV4NativePacked";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "transferOwnership";
        readonly inputs: readonly [{
            readonly name: "_newOwner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChain";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChainBytes32";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "CallExecutedAndFundsWithdrawn";
        readonly inputs: readonly [];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiAcrossTransfer";
        readonly inputs: readonly [{
            readonly name: "_transactionId";
            readonly type: "bytes8";
            readonly indexed: false;
            readonly internalType: "bytes8";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiGenericSwapCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiSwappedGeneric";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferRecovered";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferStarted";
        readonly inputs: readonly [{
            readonly name: "bridgeData";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferRequested";
        readonly inputs: readonly [{
            readonly name: "_from";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "OwnershipTransferred";
        readonly inputs: readonly [{
            readonly name: "previousOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "newOwner";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "InvalidCalldataLength";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidConfig";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidInputAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NewOwnerMustNotBeSelf";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoNullOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoPendingOwnershipTransfer";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NotPendingOwner";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "UnAuthorized";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "WithdrawFailed";
        readonly inputs: readonly [];
    }];
    static createInterface(): AcrossFacetPackedV4Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): AcrossFacetPackedV4;
}
export {};
