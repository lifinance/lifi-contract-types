import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ChainflipFacet, ChainflipFacetInterface } from "../ChainflipFacet";
declare type ChainflipFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ChainflipFacet__factory extends ContractFactory {
    constructor(...args: ChainflipFacetConstructorParams);
    deploy(_chainflipVault: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ChainflipFacet>;
    getDeployTransaction(_chainflipVault: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ChainflipFacet;
    connect(signer: Signer): ChainflipFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b5060405162002a1438038062002a14833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b60805161296c620000a8600039600081816060015281816108fb0152818161099f01526109df015261296c6000f3fe6080604052600436106100345760003560e01c8063467f144f146100395780637766d1ed1461004e578063e2886d99146100ab575b600080fd5b61004c610047366004612340565b6100be565b005b34801561005a57600080fd5b506100827f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61004c6100b93660046123a4565b6102e7565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610139576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061014a3447612463565b90508461016f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101a6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101e4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610221576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561025f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561029d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102af88608001518960c00151610514565b6102b98888610694565b5047915050818111156102db576102db6000846102d68585612463565b610abc565b50506000909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610362576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103733447612463565b9050868061010001516103b2576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b87806101200151156103f0576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886104138160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561044a576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610488576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104c5576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104da8a600001518b60c001518b8b33610aed565b60c08b01526104e98a88610694565b504791505081811115610506576105066000846102d68585612463565b505060009091555050505050565b8060000361054e576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166105a757803410156105a3576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610614573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610638919061249d565b905081811015610683576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b61068f83333085610c30565b505050565b600060018360e00151036106aa5750600161077a565b61a4b18360e00151036106bf5750600461077a565b660416edef1601be8360e00151036106d95750600561077a565b6512309ce540018360e00151036106f25750600361077a565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f436861696e666c697046616365743a20556e737570706f72746564206465737460448201527f696e6174696f6e20636861696e00000000000000000000000000000000000000606482015260840161067a565b60607311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168460a0015173ffffffffffffffffffffffffffffffffffffffff160361086e576020830135610802576040517f6e70c56c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60408051602080860135908201520160405160208183030381529060405290508360e0015184600001517f7be3e48a8a8b4d32138937e1809ac83481fffe48e49bb60e43ed1d3d50349e4c856020013560405161086191815260200190565b60405180910390a36108c0565b8360a001516040516020016108ae919060609190911b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016815260140190565b60405160208183030381529060405290505b608084015173ffffffffffffffffffffffffffffffffffffffff166109955760c084015173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063dd68734590848461093160208901896124b6565b61093e60408a018a6124e3565b6040518763ffffffff1660e01b815260040161095e959493929190612606565b6000604051808303818588803b15801561097757600080fd5b505af115801561098b573d6000803e3d6000fd5b5050505050610a7f565b6109c884608001517f00000000000000000000000000000000000000000000000000000000000000008660c00151610e4a565b73ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000166304fc7da08383610a1360208801886124b6565b608089015160c08a0151610a2a60408b018b6124e3565b6040518863ffffffff1660e01b8152600401610a4c979695949392919061264e565b600060405180830381600087803b158015610a6657600080fd5b505af1158015610a7a573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f184604051610aae91906126ba565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff831615610ae35761068f838383610f81565b61068f8282611103565b600082808203610b29576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610b38600185612463565b818110610b4757610b476127cd565b9050602002810190610b5991906127fc565b610b6a90608081019060600161283a565b90506000610b778261122d565b905073ffffffffffffffffffffffffffffffffffffffff8216610ba157610b9e3482612463565b90505b6000610bad88886112e6565b9050610bb988886113f2565b610bc68a8989898561145f565b600082610bd28561122d565b610bdc9190612463565b905089811015610c22576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440161067a565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416610c7d576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610cca576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610d3b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d5f919061249d565b9050610d6d82868686611811565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610ddd573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e01919061249d565b610e0b9190612463565b14610e42576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610e6a57505050565b73ffffffffffffffffffffffffffffffffffffffff8216610eb7576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015610f2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f50919061249d565b101561068f5761068f83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6118ed565b73ffffffffffffffffffffffffffffffffffffffff8316610fce576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661101b576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611088573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110ac919061249d565b9050808211156110f2576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018390526024810182905260440161067a565b6110fd8484846119dd565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611150576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611193576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810182905247602482015260440161067a565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d80600081146111ed576040519150601f19603f3d011682016040523d82523d6000602084013e6111f2565b606091505b505090508061068f576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff8216156112de576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa1580156112b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112d9919061249d565b6112e0565b475b92915050565b60608160008167ffffffffffffffff811115611304576113046120fa565b60405190808252806020026020018201604052801561132d578160200160208202803683370190505b5090506000805b838110156113e75786868281811061134e5761134e6127cd565b905060200281019061136091906127fc565b61137190608081019060600161283a565b915061137c8261122d565b83828151811061138e5761138e6127cd565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166113df57348382815181106113c7576113c76127cd565b602002602001018181516113db9190612463565b9052505b600101611334565b509095945050505050565b60005b8181101561068f5736838383818110611410576114106127cd565b905060200281019061142291906127fc565b905061143460e0820160c08301612855565b156114565761145661144c606083016040840161283a565b8260800135610514565b506001016113f5565b83838383826001811461172c576000858561147b600185612463565b81811061148a5761148a6127cd565b905060200281019061149c91906127fc565b6114ad90608081019060600161283a565b9050600089815b8181101561165857368d8d838181106114cf576114cf6127cd565b90506020028101906114e191906127fc565b90506115106114f6606083016040840161283a565b73ffffffffffffffffffffffffffffffffffffffff161590565b806115735750611573611529604083016020840161283a565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561158a575061158a611529602083018361283a565b801561160f575061160f6115a160a08301836124e3565b6115b091600491600091612872565b6115b99161289c565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611645576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61164f8f82611a33565b506001016114b4565b505060005b611668600185612463565b811015611724576000888883818110611683576116836127cd565b905060200281019061169591906127fc565b6116a690608081019060600161283a565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461171b578582815181106116ed576116ed6127cd565b60200260200101516116fe8261122d565b6117089190612463565b9250821561171b5761171b818885610abc565b5060010161165d565b505050611805565b8760005b8181101561180257368b8b8381811061174b5761174b6127cd565b905060200281019061175d91906127fc565b90506117726114f6606083016040840161283a565b8061178b575061178b611529604083016020840161283a565b80156117a257506117a2611529602083018361283a565b80156117b957506117b96115a160a08301836124e3565b6117ef576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6117f98d82611a33565b50600101611730565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff808516602483015283166044820152606481018290526110fd9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611d11565b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b3000000000000000000000000000000000000000000000000000000001790526119798482611e20565b6110fd5760405173ffffffffffffffffffffffffffffffffffffffff84166024820152600060448201526119d39085907f095ea7b3000000000000000000000000000000000000000000000000000000009060640161186b565b6110fd8482611d11565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261068f9084907fa9059cbb000000000000000000000000000000000000000000000000000000009060640161186b565b611a49611a43602083018361283a565b3b151590565b611a7f576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611abf576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611ad46114f6606085016040860161283a565b611adf576000611ae5565b82608001355b90506000611b01611afc606086016040870161283a565b61122d565b90506000611b18611afc608087016060880161283a565b905082600003611b4f57611b4f611b35606087016040880161283a565b611b45604088016020890161283a565b8760800135610e4a565b8460800135821015611b9a576040517fcf479181000000000000000000000000000000000000000000000000000000008152608086013560048201526024810183905260440161067a565b600080611baa602088018861283a565b73ffffffffffffffffffffffffffffffffffffffff1685611bce60a08a018a6124e3565b604051611bdc9291906128e4565b60006040518083038185875af1925050503d8060008114611c19576040519150601f19603f3d011682016040523d82523d6000602084013e611c1e565b606091505b509150915081611c3157611c3181611ee1565b6000611c46611afc60808a0160608b0161283a565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b3889611c7760208b018b61283a565b611c8760608c0160408d0161283a565b611c9760808d0160608e0161283a565b8c60800135898711611ca95786611cb3565b611cb38a88612463565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611d73826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611eeb9092919063ffffffff16565b9050805160001480611d94575080806020019051810190611d9491906128f4565b61068f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161067a565b60008060008473ffffffffffffffffffffffffffffffffffffffff1684604051611e4a9190612911565b6000604051808303816000865af19150503d8060008114611e87576040519150601f19603f3d011682016040523d82523d6000602084013e611e8c565b606091505b5091509150818015611eb6575080511580611eb6575080806020019051810190611eb691906128f4565b8015611ed8575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b8051602082018181fd5b6060611efa8484600085611f02565b949350505050565b606082471015611f94576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161067a565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611fbd9190612911565b60006040518083038185875af1925050503d8060008114611ffa576040519150601f19603f3d011682016040523d82523d6000602084013e611fff565b606091505b50915091506120108783838761201b565b979650505050505050565b606083156120b15782516000036120aa5773ffffffffffffffffffffffffffffffffffffffff85163b6120aa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161067a565b5081611efa565b611efa83838151156120c65781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067a9190612923565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff8111828210171561214d5761214d6120fa565b60405290565b600082601f83011261216457600080fd5b813567ffffffffffffffff8082111561217f5761217f6120fa565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156121c5576121c56120fa565b816040528381528660208588010111156121de57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461222257600080fd5b919050565b801515811461223557600080fd5b50565b803561222281612227565b6000610140828403121561225657600080fd5b61225e612129565b905081358152602082013567ffffffffffffffff8082111561227f57600080fd5b61228b85838601612153565b602084015260408401359150808211156122a457600080fd5b506122b184828501612153565b6040830152506122c3606083016121fe565b60608201526122d4608083016121fe565b60808201526122e560a083016121fe565b60a082015260c082013560c082015260e082013560e082015261010061230c818401612238565b9082015261012061231e838201612238565b9082015292915050565b60006060828403121561233a57600080fd5b50919050565b6000806040838503121561235357600080fd5b823567ffffffffffffffff8082111561236b57600080fd5b61237786838701612243565b9350602085013591508082111561238d57600080fd5b5061239a85828601612328565b9150509250929050565b600080600080606085870312156123ba57600080fd5b843567ffffffffffffffff808211156123d257600080fd5b6123de88838901612243565b955060208701359150808211156123f457600080fd5b818701915087601f83011261240857600080fd5b81358181111561241757600080fd5b8860208260051b850101111561242c57600080fd5b60208301955080945050604087013591508082111561244a57600080fd5b5061245787828801612328565b91505092959194509250565b818103818111156112e0577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000602082840312156124af57600080fd5b5051919050565b6000602082840312156124c857600080fd5b813563ffffffff811681146124dc57600080fd5b9392505050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261251857600080fd5b83018035915067ffffffffffffffff82111561253357600080fd5b60200191503681900382131561254857600080fd5b9250929050565b60005b8381101561256a578181015183820152602001612552565b50506000910152565b6000815180845261258b81602086016020860161254f565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b8183528181602085013750600060208284010152600060207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116840101905092915050565b600063ffffffff8088168352608060208401526126266080840188612573565b818716604085015283810360608501526126418186886125bd565b9998505050505050505050565b600063ffffffff808a16835260c0602084015261266e60c084018a612573565b818916604085015273ffffffffffffffffffffffffffffffffffffffff8816606085015286608085015283810360a08501526126ab8186886125bd565b9b9a5050505050505050505050565b6020815281516020820152600060208301516101408060408501526126e3610160850183612573565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261271e8382612573565b9250506060850151612748608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206127bb8187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261283057600080fd5b9190910192915050565b60006020828403121561284c57600080fd5b6124dc826121fe565b60006020828403121561286757600080fd5b81356124dc81612227565b6000808585111561288257600080fd5b8386111561288f57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156128dc5780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b60006020828403121561290657600080fd5b81516124dc81612227565b6000825161283081846020870161254f565b6020815260006124dc602083018461257356fea2646970667358221220090fc2e37a02dfd22d5084c2027dd590651c487ae05c28ee60db78940fd184f064736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_chainflipVault";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "chainflipVault";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaChainflip";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
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
            readonly name: "_chainflipData";
            readonly type: "tuple";
            readonly internalType: "struct ChainflipFacet.ChainflipData";
            readonly components: readonly [{
                readonly name: "dstToken";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "nonEvmAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "cfParameters";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaChainflip";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
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
            readonly name: "_swapData";
            readonly type: "tuple[]";
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approveTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "requiresDeposit";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_chainflipData";
            readonly type: "tuple";
            readonly internalType: "struct ChainflipFacet.ChainflipData";
            readonly components: readonly [{
                readonly name: "dstToken";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "nonEvmAddress";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "cfParameters";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
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
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
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
        readonly type: "error";
        readonly name: "CannotBridgeToSameNetwork";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ContractCallNotAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CumulativeSlippageTooHigh";
        readonly inputs: readonly [{
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receivedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "EmptyNonEvmAddress";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InformationMismatch";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "required";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NativeAssetTransferFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapDataProvided";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapFromZeroBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoTransferToNullAddress";
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
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): ChainflipFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ChainflipFacet;
}
export {};
