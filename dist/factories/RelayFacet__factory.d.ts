import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { RelayFacet, RelayFacetInterface } from "../RelayFacet";
declare type RelayFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class RelayFacet__factory extends ContractFactory {
    constructor(...args: RelayFacetConstructorParams);
    deploy(_relayReceiver: PromiseOrValue<string>, _relaySolver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<RelayFacet>;
    getDeployTransaction(_relayReceiver: PromiseOrValue<string>, _relaySolver: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): RelayFacet;
    connect(signer: Signer): RelayFacet__factory;
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b5060405161275138038061275183398101604081905261002e91610060565b6001600160a01b039182166080521660a052610091565b80516001600160a01b038116811461005b575f5ffd5b919050565b5f5f60408385031215610071575f5ffd5b61007a83610045565b915061008860208401610045565b90509250929050565b60805160a0516126856100cc5f395f81816082015281816103f1015281816107bf0152610d7f01525f818160df0152610c7a01526126855ff3fe608060405260043610610058575f3560e01c8063981886a711610041578063981886a7146100ce578063ae32859014610101578063f21a211614610114575f5ffd5b806325d374e81461005c57806381d82dd814610071575b5f5ffd5b61006f61006a3660046120d0565b610152565b005b34801561007c575f5ffd5b506100a47f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b3480156100d9575f5ffd5b506100a47f000000000000000000000000000000000000000000000000000000000000000081565b61006f61010f366004612196565b610626565b34801561011f575f5ffd5b5061014261012e366004612200565b5f6020819052908152604090205460ff1681565b60405190151581526020016100c5565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016101cd576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815581355f908152602081905260409020548590839060ff161561021f576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f114801561025e57506020810135155b15610295576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015160e08301515f916103a0918435914691309173ffffffffffffffffffffffffffffffffffffffff16906102cc90610a0a565b60a089015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f1146103215760a089015173ffffffffffffffffffffffffffffffffffffffff16610327565b87602001355b604080516020810197909752868101959095526060860193909352608085019190915260a084015260c083015284013560e082015261010001604051602081830303815290604052805190602001206020527b19457468657265756d205369676e6564204d6573736167653a0a33325f52603c60042090565b90505f6103ed826103b46060860186612217565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284375f92019190915250610a3f92505050565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610474576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b335f61048034476122ac565b90508a8061010001516104bf576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8b806101200151156104fd576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8c6105208160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610557576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610594576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036105d1576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6105e58e5f01518f60c001518f8f33610ae3565b60c08f01526105f48e8c610c30565b504791505081811115610615576106155f8461061085856122ac565b611004565b50505f909555505050505050505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016106a1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181556106ae836122bf565b82355f90815260208190526040902054839060ff16156106fa576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60a082015173ffffffffffffffffffffffffffffffffffffffff167311f111f111f111f111f111f111f111f111f111f114801561073957506020810135155b15610770576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608082015160e08301515f916107a7918435914691309173ffffffffffffffffffffffffffffffffffffffff16906102cc90610a0a565b90505f6107bb826103b46060860186612217565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610842576040517ff861803000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b335f61084e34476122ac565b9050610859896122bf565b60a081015173ffffffffffffffffffffffffffffffffffffffff166108aa576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036108e7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610924576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61092d8a6122bf565b8061010001511561096a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109738b6122bf565b806101200151156109b0576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6109cd6109c360a08e0160808f016122ca565b8d60c00135611039565b6109df6109d98d6122bf565b8c610c30565b5047915050818111156109fb576109fb5f8461061085856122ac565b50505f90955550505050505050565b5f816512309ce5400103610a225750627dee6e919050565b81660416edef1601be03610a3b5750632f3fb341919050565b5090565b604051600190835f5260208301516040526040835103610a9357604083015160ff81901c601b016020527f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff16606052610ab7565b6041835103610ab35760608301515f1a6020526040830151606052610ab7565b5f91505b6020600160805f855afa5191503d610ad657638baa579f5f526004601cfd5b5f60605260405292915050565b5f82808203610b1e576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610b2c6001856122ac565b818110610b3b57610b3b6122e3565b9050602002810190610b4d9190612310565b610b5e9060808101906060016122ca565b90505f610b6a826110ed565b905073ffffffffffffffffffffffffffffffffffffffff8216610b9457610b9134826122ac565b90505b5f610b9f8888611137565b9050610bab8888611241565b610bb68a89896112ad565b5f82610bc1856110ed565b610bcb91906122ac565b905089811015610c16576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b610c2289898985611458565b9a9950505050505050505050565b608082015173ffffffffffffffffffffffffffffffffffffffff16610d605760c082015160408051833560208201525f92839273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169201604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815290829052610cd491612363565b5f6040518083038185875af1925050503d805f8114610d0e576040519150601f19603f3d011682016040523d82523d5f602084013e610d13565b606091505b509150915081610d5957610d268161161b565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c0d91906123ba565b5050610f08565b60c082015160405173ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016602482015260448101919091525f90606401604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0818403018152918152602080830180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001790529051610e3b918535910190815260200190565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815290829052610e7792916020016123cc565b60405160208183030381529060405290505f5f846080015173ffffffffffffffffffffffffffffffffffffffff1683604051610eb39190612363565b5f604051808303815f865af19150503d805f8114610eec576040519150601f19603f3d011682016040523d82523d5f602084013e610ef1565b606091505b509150915081610f0457610d268161161b565b5050505b80355f908152602081905260409020805460017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0090911617905560a082015173ffffffffffffffffffffffffffffffffffffffff167fffffffffffffffffffffffffee0eee0eee0eee0eee0eee0eee0eee0eee0eee0f01610fc957610f908260e00151610a0a565b825160405160208481013582527f7be3e48a8a8b4d32138937e1809ac83481fffe48e49bb60e43ed1d3d50349e4c910160405180910390a35b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f182604051610ff891906123e8565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff831661102e576110298282611698565b505050565b611029838383611705565b805f03611072576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166110cb57803410156110c7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6110c773ffffffffffffffffffffffffffffffffffffffff8316333084611773565b5f73ffffffffffffffffffffffffffffffffffffffff82161561112f5761112a73ffffffffffffffffffffffffffffffffffffffff8316306117cb565b611131565b475b92915050565b6060815f8167ffffffffffffffff81111561115457611154611e5e565b60405190808252806020026020018201604052801561117d578160200160208202803683370190505b5090505f805b838110156112365786868281811061119d5761119d6122e3565b90506020028101906111af9190612310565b6111c09060808101906060016122ca565b91506111cb826110ed565b8382815181106111dd576111dd6122e3565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff821661122e5734838281518110611216576112166122e3565b6020026020010181815161122a91906122ac565b9052505b600101611183565b509095945050505050565b5f5b81811015611029573683838381811061125e5761125e6122e3565b90506020028101906112709190612310565b905061128260e0820160c083016124fb565b156112a4576112a461129a60608301604084016122ca565b8260800135611039565b50600101611243565b805f5b8181101561145157368484838181106112cb576112cb6122e3565b90506020028101906112dd9190612310565b905061130c6112f260608301604084016122ca565b73ffffffffffffffffffffffffffffffffffffffff161590565b8061136e575061136e61132560408301602084016122ca565b73ffffffffffffffffffffffffffffffffffffffff165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015611385575061138561132560208301836122ca565b8015611408575061140861139c60a0830183612217565b6113aa916004915f91612514565b6113b39161253b565b7fffffffff00000000000000000000000000000000000000000000000000000000165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b61143e576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61144886826117fe565b506001016112b0565b5050505050565b825f85826114676001826122ac565b818110611476576114766122e3565b90506020028101906114889190612310565b6114999060808101906060016122ca565b90508160011461156f575f805b6114b16001856122ac565b81101561156c575f8888838181106114cb576114cb6122e3565b90506020028101906114dd9190612310565b6114ee9060808101906060016122ca565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461156357858281518110611535576115356122e3565b6020026020010151611546826110ed565b61155091906122ac565b9250821561156357611563818885611004565b506001016114a6565b50505b5f5b82811015611612575f87878381811061158c5761158c6122e3565b905060200281019061159e9190612310565b6115af9060608101906040016122ca565b90505f6115bb826110ed565b90505f811180156115f857508373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b1561160857611608828883611004565b5050600101611571565b50505050505050565b606060448251101561166057505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b5f61167b600480855161167391906122ac565b859190611a6e565b90508080602001905181019061169191906125a1565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff82166116e5576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6110c773ffffffffffffffffffffffffffffffffffffffff831682611b87565b73ffffffffffffffffffffffffffffffffffffffff8216611752576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61102973ffffffffffffffffffffffffffffffffffffffff84168383611ba0565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f511417166117be57637939f4245f526004601cfd5b5f60605260405250505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b61181361180e60208301836122ca565b611be9565b611849576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611888576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61189c6112f260608501604086016122ca565b6118a6575f6118ac565b82608001355b90505f6118c76118c260808601606087016122ca565b6110ed565b9050815f036118fd576118fd6118e360608601604087016122ca565b6118f360408701602088016122ca565b8660800135611c7d565b5f8061190c60208701876122ca565b73ffffffffffffffffffffffffffffffffffffffff168461193060a0890189612217565b60405161193e929190612616565b5f6040518083038185875af1925050503d805f8114611978576040519150601f19603f3d011682016040523d82523d5f602084013e61197d565b606091505b5091509150816119905761199081611ca9565b5f6119a46118c26080890160608a016122ca565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886119d560208a018a6122ca565b6119e560608b0160408c016122ca565b6119f560808c0160608d016122ca565b8b60800135898711611a075786611a11565b611a118a886122ac565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b606081611a7c81601f612625565b1015611ab4576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611abe8284612625565b84511015611af8576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611b165760405191505f825260208201604052611b7e565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611b4f578051835260209283019201611b37565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b5f385f3884865af16110c75763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f51141716611be0576390b8ec185f526004601cfd5b5f603452505050565b6040805160178082528183019092525f9182919060208201818036833701905050905060175f60208301853c60208101517f10ff0000000000000000000000000000000000000000000000000000000000007fffffff0000000000000000000000000000000000000000000000000000000000821601611c7457506023015160601c3b151592915050565b5050503b151590565b6110298383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611cb3565b8051602082018181fd5b73ffffffffffffffffffffffffffffffffffffffff841615611dda5773ffffffffffffffffffffffffffffffffffffffff8316611d1c576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa158015611d8f573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611db39190612638565b1015611dda57611dda73ffffffffffffffffffffffffffffffffffffffff85168483611de0565b50505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f51141716611be0575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f51141716611be057633e3f8f735f526004601cfd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff81118282101715611eaf57611eaf611e5e565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611efc57611efc611e5e565b604052919050565b5f67ffffffffffffffff821115611f1d57611f1d611e5e565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b5f82601f830112611f58575f5ffd5b8135611f6b611f6682611f04565b611eb5565b818152846020838601011115611f7f575f5ffd5b816020850160208301375f918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611fbe575f5ffd5b919050565b80358015158114611fbe575f5ffd5b5f6101408284031215611fe3575f5ffd5b611feb611e8b565b823581529050602082013567ffffffffffffffff81111561200a575f5ffd5b61201684828501611f49565b602083015250604082013567ffffffffffffffff811115612035575f5ffd5b61204184828501611f49565b60408301525061205360608301611f9b565b606082015261206460808301611f9b565b608082015261207560a08301611f9b565b60a082015260c0828101359082015260e0808301359082015261209b6101008301611fc3565b6101008201526120ae6101208301611fc3565b61012082015292915050565b5f608082840312156120ca575f5ffd5b50919050565b5f5f5f5f606085870312156120e3575f5ffd5b843567ffffffffffffffff8111156120f9575f5ffd5b61210587828801611fd2565b945050602085013567ffffffffffffffff811115612121575f5ffd5b8501601f81018713612131575f5ffd5b803567ffffffffffffffff811115612147575f5ffd5b8760208260051b840101111561215b575f5ffd5b60209190910193509150604085013567ffffffffffffffff81111561217e575f5ffd5b61218a878288016120ba565b91505092959194509250565b5f5f604083850312156121a7575f5ffd5b823567ffffffffffffffff8111156121bd575f5ffd5b830161014081860312156121cf575f5ffd5b9150602083013567ffffffffffffffff8111156121ea575f5ffd5b6121f6858286016120ba565b9150509250929050565b5f60208284031215612210575f5ffd5b5035919050565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261224a575f5ffd5b83018035915067ffffffffffffffff821115612264575f5ffd5b602001915036819003821315612278575f5ffd5b9250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b818103818111156111315761113161227f565b5f6111313683611fd2565b5f602082840312156122da575f5ffd5b61169182611f9b565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612342575f5ffd5b9190910192915050565b5f81518060208401855e5f93019283525090919050565b5f611691828461234c565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081525f611691602083018461236e565b5f6123e06123da838661234c565b8461234c565b949350505050565b60208152815160208201525f6020830151610140604084015261240f61016084018261236e565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe084830301606085015261244a828261236e565b9150506060840151612474608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e08401516101008401526101008401516124e361012085018215159052565b50610120840151801515610140850152509392505050565b5f6020828403121561250b575f5ffd5b61169182611fc3565b5f5f85851115612522575f5ffd5b8386111561252e575f5ffd5b5050820193919092039150565b80357fffffffff00000000000000000000000000000000000000000000000000000000811690600484101561259a577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f602082840312156125b1575f5ffd5b815167ffffffffffffffff8111156125c7575f5ffd5b8201601f810184136125d7575f5ffd5b80516125e5611f6682611f04565b8181528560208385010111156125f9575f5ffd5b8160208401602083015e5f91810160200191909152949350505050565b818382375f9101908152919050565b808201808211156111315761113161227f565b5f60208284031215612648575f5ffd5b505191905056fea264697066735822122052e14d84b6cdfd1eba61818639800f27b8c84701b01a1312260b8e8f6f8cdb8164736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_relayReceiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "_relaySolver";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "consumedIds";
        readonly inputs: readonly [{
            readonly name: "";
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
        readonly name: "relayReceiver";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "relaySolver";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaRelay";
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
            readonly name: "_relayData";
            readonly type: "tuple";
            readonly internalType: "struct RelayFacet.RelayData";
            readonly components: readonly [{
                readonly name: "requestId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "nonEVMReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaRelay";
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
            readonly name: "_relayData";
            readonly type: "tuple";
            readonly internalType: "struct RelayFacet.RelayData";
            readonly components: readonly [{
                readonly name: "requestId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "nonEVMReceiver";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "signature";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "AssetSwapped";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }, {
            readonly name: "dex";
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
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
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
        readonly name: "InformationMismatch";
        readonly inputs: readonly [];
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
        readonly name: "InvalidQuote";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
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
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SliceOutOfBounds";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "SliceOverflow";
        readonly inputs: readonly [];
    }];
    static createInterface(): RelayFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): RelayFacet;
}
export {};
