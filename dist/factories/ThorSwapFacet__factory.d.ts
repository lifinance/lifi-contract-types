import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { ThorSwapFacet, ThorSwapFacetInterface } from "../ThorSwapFacet";
declare type ThorSwapFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ThorSwapFacet__factory extends ContractFactory {
    constructor(...args: ThorSwapFacetConstructorParams);
    deploy(_thorchainRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ThorSwapFacet>;
    getDeployTransaction(_thorchainRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): ThorSwapFacet;
    connect(signer: Signer): ThorSwapFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b506040516200290638038062002906833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b608051612865620000a1600039600081816060015281816106e7015261071201526128656000f3fe6080604052600436106100345760003560e01c80632541ec57146100395780637cceb1031461004e578063ad673d88146100ab575b600080fd5b61004c6100473660046121c3565b6100be565b005b34801561005a57600080fd5b506100827f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200160405180910390f35b61004c6100b9366004612227565b6102fa565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610139576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061014a3447612315565b90508461016f8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101a6576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101e4576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610221576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561025f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561029d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6102af88608001518960c0015161053f565b6102b988886106bf565b50479150600090508282116102cf5760006102d9565b6102d98383612315565b905080156102ed576102ed60008583610817565b5050600090925550505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610375576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006103863447612315565b9050868061010001516103c5576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610403576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886104268160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561045d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361049b576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104d8576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6104ed8a600001518b60c001518b8b33610848565b60c08b01526104fc8a886106bf565b504791506000905082821161051257600061051c565b61051c8383612315565b905080156105305761053060008583610817565b50506000909255505050505050565b73ffffffffffffffffffffffffffffffffffffffff82166105985780341015610594576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b806000036105d2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa15801561063f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106639190612328565b9050818110156106ae576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044015b60405180910390fd5b6106ba8333308561098b565b505050565b608082015173ffffffffffffffffffffffffffffffffffffffff8116158061071057610710827f00000000000000000000000000000000000000000000000000000000000000008660c00151610ba5565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166344bc937b8261075857600061075e565b8560c001515b61076b6020870187612341565b608088015160c089015161078260208a018a61235c565b8a604001356040518863ffffffff1660e01b81526004016107a8969594939291906123c8565b6000604051808303818588803b1580156107c157600080fd5b505af11580156107d5573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18460405161080991906124bc565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff83161561083e576106ba838383610cf0565b6106ba8282610e1f565b600082808203610884576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008585610893600185612315565b8181106108a2576108a26125cf565b90506020028101906108b491906125fe565b6108c5906080810190606001612341565b905060006108d282610f49565b905073ffffffffffffffffffffffffffffffffffffffff82166108fc576108f93482612315565b90505b60006109088888611002565b9050610914888861110e565b6109218a8989898561116f565b60008261092d85610f49565b6109379190612315565b90508981101561097d576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044016106a5565b9a9950505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff84166109d8576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610a25576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa158015610a96573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aba9190612328565b9050610ac882868686611521565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015610b38573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b5c9190612328565b610b669190612315565b14610b9d576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610bc557505050565b73ffffffffffffffffffffffffffffffffffffffff8216610c12576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff83811660248301526000919085169063dd62ed3e90604401602060405180830381865afa158015610c88573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cac9190612328565b905081811015610cea57610cea8484610ce5847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff612315565b6115fd565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8316610d3d576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610daa573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dce9190612328565b905080821115610e14576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016106a5565b610cea8484846116fb565b73ffffffffffffffffffffffffffffffffffffffff8216610e6c576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115610eaf576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016106a5565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610f09576040519150601f19603f3d011682016040523d82523d6000602084013e610f0e565b606091505b50509050806106ba576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff821615610ffa576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610fd1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ff59190612328565b610ffc565b475b92915050565b60608160008167ffffffffffffffff81111561102057611020611f1a565b604051908082528060200260200182016040528015611049578160200160208202803683370190505b5090506000805b838110156111035786868281811061106a5761106a6125cf565b905060200281019061107c91906125fe565b61108d906080810190606001612341565b915061109882610f49565b8382815181106110aa576110aa6125cf565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff82166110fb57348382815181106110e3576110e36125cf565b602002602001018181516110f79190612315565b9052505b600101611050565b509095945050505050565b60005b818110156106ba57600083838381811061112d5761112d6125cf565b905060200281019061113f91906125fe565b6111489061263c565b90508060c0015115611166576111668160400151826080015161053f565b50600101611111565b83838383826001811461143c576000858561118b600185612315565b81811061119a5761119a6125cf565b90506020028101906111ac91906125fe565b6111bd906080810190606001612341565b9050600089815b8181101561136857368d8d838181106111df576111df6125cf565b90506020028101906111f191906125fe565b90506112206112066060830160408401612341565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061128357506112836112396040830160208401612341565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b801561129a575061129a6112396020830183612341565b801561131f575061131f6112b160a083018361235c565b6112c0916004916000916126e1565b6112c99161270b565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b611355576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61135f8f82611751565b506001016111c4565b505060005b611378600185612315565b811015611434576000888883818110611393576113936125cf565b90506020028101906113a591906125fe565b6113b6906080810190606001612341565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461142b578582815181106113fd576113fd6125cf565b602002602001015161140e82610f49565b6114189190612315565b9250821561142b5761142b818885610817565b5060010161136d565b505050611515565b8760005b8181101561151257368b8b8381811061145b5761145b6125cf565b905060200281019061146d91906125fe565b90506114826112066060830160408401612341565b8061149b575061149b6112396040830160208401612341565b80156114b257506114b26112396020830183612341565b80156114c957506114c96112b160a083018361235c565b6114ff576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6115098d82611751565b50600101611440565b50505b50505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff80851660248301528316604482015260648101829052610cea9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611a67565b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8381166024830152600091839186169063dd62ed3e90604401602060405180830381865afa158015611674573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116989190612328565b6116a29190612753565b60405173ffffffffffffffffffffffffffffffffffffffff8516602482015260448101829052909150610cea9085907f095ea7b3000000000000000000000000000000000000000000000000000000009060640161157b565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526106ba9084907fa9059cbb000000000000000000000000000000000000000000000000000000009060640161157b565b6117676117616020830183612341565b3b151590565b61179d576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036117dd576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006117f26112066060850160408601612341565b6117fd576000611803565b82608001355b9050600061181f61181a6060860160408701612341565b610f49565b9050600061183661181a6080870160608801612341565b90508260000361186d5761186d6118536060870160408801612341565b6118636040880160208901612341565b8760800135610ba5565b84608001358210156118b8576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016106a5565b6000806118c86020880188612341565b73ffffffffffffffffffffffffffffffffffffffff16856118ec60a08a018a61235c565b6040516118fa929190612766565b60006040518083038185875af1925050503d8060008114611937576040519150601f19603f3d011682016040523d82523d6000602084013e61193c565b606091505b50915091508161198757600061195182611b73565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106a59190612776565b600061199c61181a60808a0160608b01612341565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38896119cd60208b018b612341565b6119dd60608c0160408d01612341565b6119ed60808d0160608e01612341565b8c608001358987116119ff5786611a09565b611a098a88612315565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b6000611ac9826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611bf19092919063ffffffff16565b8051909150156106ba5780806020019051810190611ae79190612789565b6106ba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016106a5565b6060604482511015611bb857505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611bd46004808551611bcc9190612315565b859190611c08565b905080806020019051810190611bea91906127a6565b9392505050565b6060611c008484600085611d22565b949350505050565b606081611c1681601f612753565b1015611c4e576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611c588284612753565b84511015611c92576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611cb15760405191506000825260208201604052611d19565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611cea578051835260209283019201611cd2565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b606082471015611db4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016106a5565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611ddd919061281d565b60006040518083038185875af1925050503d8060008114611e1a576040519150601f19603f3d011682016040523d82523d6000602084013e611e1f565b606091505b5091509150611e3087838387611e3b565b979650505050505050565b60608315611ed1578251600003611eca5773ffffffffffffffffffffffffffffffffffffffff85163b611eca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016106a5565b5081611c00565b611c008383815115611ee65781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106a59190612776565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611f6d57611f6d611f1a565b60405290565b60405160e0810167ffffffffffffffff81118282101715611f6d57611f6d611f1a565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611fdd57611fdd611f1a565b604052919050565b600067ffffffffffffffff821115611fff57611fff611f1a565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261203c57600080fd5b813561204f61204a82611fe5565b611f96565b81815284602083860101111561206457600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146120a557600080fd5b919050565b80151581146120b857600080fd5b50565b80356120a5816120aa565b600061014082840312156120d957600080fd5b6120e1611f49565b905081358152602082013567ffffffffffffffff8082111561210257600080fd5b61210e8583860161202b565b6020840152604084013591508082111561212757600080fd5b506121348482850161202b565b60408301525061214660608301612081565b606082015261215760808301612081565b608082015261216860a08301612081565b60a082015260c082013560c082015260e082013560e082015261010061218f8184016120bb565b908201526101206121a18382016120bb565b9082015292915050565b6000606082840312156121bd57600080fd5b50919050565b600080604083850312156121d657600080fd5b823567ffffffffffffffff808211156121ee57600080fd5b6121fa868387016120c6565b9350602085013591508082111561221057600080fd5b5061221d858286016121ab565b9150509250929050565b6000806000806060858703121561223d57600080fd5b843567ffffffffffffffff8082111561225557600080fd5b612261888389016120c6565b9550602087013591508082111561227757600080fd5b818701915087601f83011261228b57600080fd5b81358181111561229a57600080fd5b8860208260051b85010111156122af57600080fd5b6020830195508094505060408701359150808211156122cd57600080fd5b506122da878288016121ab565b91505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610ffc57610ffc6122e6565b60006020828403121561233a57600080fd5b5051919050565b60006020828403121561235357600080fd5b611bea82612081565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261239157600080fd5b83018035915067ffffffffffffffff8211156123ac57600080fd5b6020019150368190038213156123c157600080fd5b9250929050565b600073ffffffffffffffffffffffffffffffffffffffff808916835280881660208401525085604083015260a060608301528360a0830152838560c0840137600060c0858401015260c07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8601168301019050826080830152979650505050505050565b60005b83811015612469578181015183820152602001612451565b50506000910152565b6000815180845261248a81602086016020860161244e565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152600060208301516101408060408501526124e5610160850183612472565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08584030160608601526125208382612472565b925050606085015161254a608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206125bd8187018315159052565b90950151151593019290925250919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261263257600080fd5b9190910192915050565b600060e0823603121561264e57600080fd5b612656611f73565b61265f83612081565b815261266d60208401612081565b602082015261267e60408401612081565b604082015261268f60608401612081565b60608201526080830135608082015260a083013567ffffffffffffffff8111156126b857600080fd5b6126c43682860161202b565b60a0830152506126d660c084016120bb565b60c082015292915050565b600080858511156126f157600080fd5b838611156126fe57600080fd5b5050820193919092039150565b7fffffffff00000000000000000000000000000000000000000000000000000000813581811691600485101561274b5780818660040360031b1b83161692505b505092915050565b80820180821115610ffc57610ffc6122e6565b8183823760009101908152919050565b602081526000611bea6020830184612472565b60006020828403121561279b57600080fd5b8151611bea816120aa565b6000602082840312156127b857600080fd5b815167ffffffffffffffff8111156127cf57600080fd5b8201601f810184136127e057600080fd5b80516127ee61204a82611fe5565b81815285602083850101111561280357600080fd5b61281482602083016020860161244e565b95945050505050565b6000825161263281846020870161244e56fea2646970667358221220a394b47dea7459317532b8d9f1e8f8cd1fe25d5febbd48dc779a3d9276c593af64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [{
            readonly internalType: "address";
            readonly name: "_thorchainRouter";
            readonly type: "address";
        }];
        readonly stateMutability: "nonpayable";
        readonly type: "constructor";
    }, {
        readonly inputs: readonly [];
        readonly name: "CannotBridgeToSameNetwork";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ContractCallNotAllowed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "minAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "receivedAmount";
            readonly type: "uint256";
        }];
        readonly name: "CumulativeSlippageTooHigh";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InformationMismatch";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "required";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "balance";
            readonly type: "uint256";
        }];
        readonly name: "InsufficientBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidAmount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidContract";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidReceiver";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NativeAssetTransferFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoSwapDataProvided";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoSwapFromZeroBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoTransferToNullAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NullAddrIsNotAValidSpender";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ReentrancyError";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SliceOutOfBounds";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SliceOverflow";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "referrer";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "fromAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "toAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fromAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "toAmount";
            readonly type: "uint256";
        }];
        readonly name: "LiFiGenericSwapCompleted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "referrer";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "fromAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "toAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fromAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "toAmount";
            readonly type: "uint256";
        }];
        readonly name: "LiFiSwappedGeneric";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receivingAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "LiFiTransferCompleted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receivingAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "LiFiTransferRecovered";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "transactionId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "string";
                readonly name: "bridge";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "integrator";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "referrer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "hasDestinationCall";
                readonly type: "bool";
            }];
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "bridgeData";
            readonly type: "tuple";
        }];
        readonly name: "LiFiTransferStarted";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "transactionId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "string";
                readonly name: "bridge";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "integrator";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "referrer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "hasDestinationCall";
                readonly type: "bool";
            }];
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "_bridgeData";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "vault";
                readonly type: "address";
            }, {
                readonly internalType: "string";
                readonly name: "memo";
                readonly type: "string";
            }, {
                readonly internalType: "uint256";
                readonly name: "expiration";
                readonly type: "uint256";
            }];
            readonly internalType: "struct ThorSwapFacet.ThorSwapData";
            readonly name: "_thorSwapData";
            readonly type: "tuple";
        }];
        readonly name: "startBridgeTokensViaThorSwap";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "transactionId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "string";
                readonly name: "bridge";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "integrator";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "referrer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "hasDestinationCall";
                readonly type: "bool";
            }];
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "_bridgeData";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "callTo";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "approveTo";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receivingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "fromAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "bool";
                readonly name: "requiresDeposit";
                readonly type: "bool";
            }];
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly name: "_swapData";
            readonly type: "tuple[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "vault";
                readonly type: "address";
            }, {
                readonly internalType: "string";
                readonly name: "memo";
                readonly type: "string";
            }, {
                readonly internalType: "uint256";
                readonly name: "expiration";
                readonly type: "uint256";
            }];
            readonly internalType: "struct ThorSwapFacet.ThorSwapData";
            readonly name: "_thorSwapData";
            readonly type: "tuple";
        }];
        readonly name: "swapAndStartBridgeTokensViaThorSwap";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [];
        readonly name: "thorchainRouter";
        readonly outputs: readonly [{
            readonly internalType: "address";
            readonly name: "";
            readonly type: "address";
        }];
        readonly stateMutability: "view";
        readonly type: "function";
    }];
    static createInterface(): ThorSwapFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ThorSwapFacet;
}
export {};
