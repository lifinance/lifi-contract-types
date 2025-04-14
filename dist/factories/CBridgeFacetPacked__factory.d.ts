import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { CBridgeFacetPacked, CBridgeFacetPackedInterface } from "../CBridgeFacetPacked";
declare type CBridgeFacetPackedConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CBridgeFacetPacked__factory extends ContractFactory {
    constructor(...args: CBridgeFacetPackedConstructorParams);
    deploy(_cBridge: PromiseOrValue<string>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<CBridgeFacetPacked>;
    getDeployTransaction(_cBridge: PromiseOrValue<string>, _owner: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): CBridgeFacetPacked;
    connect(signer: Signer): CBridgeFacetPacked__factory;
    static readonly bytecode = "0x60a060405234801561000f575f5ffd5b50604051612b91380380612b9183398101604081905261002e91610069565b5f80546001600160a01b0319166001600160a01b03928316179055166080526100a1565b6001600160a01b0381168114610066575f5ffd5b50565b5f5f6040838503121561007a575f5ffd5b825161008581610052565b602084015190925061009681610052565b809150509250929050565b608051612ab56100dc5f395f81816102f5015281816105070152818161062e0152818161092f015281816112a8015261152d0152612ab55ff3fe6080604052600436106100e6575f3560e01c8063a2ed560711610087578063e30c397811610057578063e30c397814610260578063f2fde38b1461028c578063f6848697146102ab578063fc852c5a146102bf575f5ffd5b8063a2ed5607146101c9578063aef365ad146101f5578063be8a84ac14610214578063dee4be1b14610241575f5ffd5b806323452b9c116100c257806323452b9c1461012d5780634c478642146101415780637200b829146101605780638da5cb5b14610174575f5ffd5b806278afb6146100f15780630193979f146100fb5780630d19e5191461010e575f5ffd5b366100ed57005b5f5ffd5b6100f96102de565b005b6100f9610109366004612450565b610496565b348015610119575f5ffd5b506100f96101283660046124ea565b6105c5565b348015610138575f5ffd5b506100f96107e0565b34801561014c575f5ffd5b506100f961015b36600461256a565b6108a9565b34801561016b575f5ffd5b506100f9610981565b34801561017f575f5ffd5b505f5461019f9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b3480156101d4575f5ffd5b506101e86101e3366004612450565b610a65565b6040516101c09190612627565b348015610200575f5ffd5b506101e861020f366004612639565b610c80565b34801561021f575f5ffd5b5061023361022e3660046126b0565b610f6d565b6040516101c09291906126ef565b34801561024c575f5ffd5b506100f961025b366004612639565b61120e565b34801561026b575f5ffd5b5060015461019f9073ffffffffffffffffffffffffffffffffffffffff1681565b348015610297575f5ffd5b506100f96102a6366004612820565b61135e565b3480156102b6575f5ffd5b506100f96114ba565b3480156102ca575f5ffd5b506102336102d93660046126b0565b6116d4565b73ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016633f2e5fc3346103296020600c365f61283b565b61033291612862565b60601c3461034460246020365f61283b565b61034d916128c8565b60e01c61035e60286024365f61283b565b610367916128c8565b60e01c610378602c6028365f61283b565b610381916128c8565b60405160e088811b7fffffffff0000000000000000000000000000000000000000000000000000000016825273ffffffffffffffffffffffffffffffffffffffff969096166004820152602481019490945267ffffffffffffffff92831660448501529116606483015290911c608482015260a4015f604051808303818588803b15801561040d575f5ffd5b505af115801561041f573d5f5f3e3d5ffd5b507fa077806f66785ea82e50e8f766774abda4273ecc52c93187184e0400e50de32193506104579250600c915060049050365f61283b565b6104609161292d565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a1565b6040517f3f2e5fc300000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152346024830181905267ffffffffffffffff80871660448501528516606484015263ffffffff841660848401527f000000000000000000000000000000000000000000000000000000000000000090911691633f2e5fc3919060a4015f604051808303818588803b15801561054b575f5ffd5b505af115801561055d573d5f5f3e3d5ffd5b50506040517fffffffffffffffff000000000000000000000000000000000000000000000000891681527fa077806f66785ea82e50e8f766774abda4273ecc52c93187184e0400e50de321935060200191506105b69050565b60405180910390a15050505050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610615576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8573ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff161461069a576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8673ffffffffffffffffffffffffffffffffffffffff1686866040516106c2929190612992565b5f604051808303815f865af19150503d805f81146106fb576040519150601f19603f3d011682016040523d82523d5f602084013e610700565b606091505b5050809150508061073d576040517f350c20f100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f73ffffffffffffffffffffffffffffffffffffffff8416156107605783610762565b335b905061076f858285611998565b8073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f9779662e766b5675e69e09303bc2f58ae30397b71b8021ab947defd27747b95f856040516107ce91815260200190565b60405180910390a35050505050505050565b5f5473ffffffffffffffffffffffffffffffffffffffff163314610830576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60015473ffffffffffffffffffffffffffffffffffffffff1661087f576040517f75cdea1200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146108f9576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f5b8181101561097c57610974838383818110610918576109186129a1565b905060200201602081019061092d9190612820565b7f00000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6119c9565b6001016108fb565b505050565b60015473ffffffffffffffffffffffffffffffffffffffff163381146109d3576040517f1853971c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a35f805473ffffffffffffffffffffffffffffffffffffffff9092167fffffffffffffffffffffffff0000000000000000000000000000000000000000928316179055600180549091169055565b606063ffffffff67ffffffffffffffff85161115610b0a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e743332000000000000000060648201526084015b60405180910390fd5b63ffffffff67ffffffffffffffff84161115610ba8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f6e6f6e63652076616c75652070617373656420746f6f2062696720746f20666960448201527f7420696e2075696e7433320000000000000000000000000000000000000000006064820152608401610b01565b50604080517e78afb60000000000000000000000000000000000000000000000000000000060208201527fffffffffffffffff00000000000000000000000000000000000000000000000096909616602487015260609490941b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016602c8087019190915260e093841b7fffffffff000000000000000000000000000000000000000000000000000000009081168787015292841b83166044870152921b16604884015281518084039091018152604c909201905290565b606063ffffffff67ffffffffffffffff87161115610d20576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e74333200000000000000006064820152608401610b01565b6fffffffffffffffffffffffffffffffff841115610dc0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f616d6f756e742076616c75652070617373656420746f6f2062696720746f206660448201527f697420696e2075696e74313238000000000000000000000000000000000000006064820152608401610b01565b63ffffffff67ffffffffffffffff84161115610e5e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f6e6f6e63652076616c75652070617373656420746f6f2062696720746f20666960448201527f7420696e2075696e7433320000000000000000000000000000000000000000006064820152608401610b01565b50604080517ff68486970000000000000000000000000000000000000000000000000000000060208201527fffffffffffffffff000000000000000000000000000000000000000000000000989098166024890152606096871b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000908116602c8a015260e096871b7fffffffff000000000000000000000000000000000000000000000000000000009081168a8401529590971b909616604488015260809290921b7fffffffffffffffffffffffffffffffff00000000000000000000000000000000166058870152831b8216606886015290911b16606c830152805180830360500181526070909201905290565b6110016040518061014001604052805f815260200160608152602001606081526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f81526020015f81526020015f151581526020015f151581525090565b604080518082019091525f8082526020820152602c8310156110a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f646174612070617373656420696e206973206e6f742074686520636f7272656360448201527f74206c656e6774680000000000000000000000000000000000000000000000006064820152608401610b01565b6111396040518061014001604052805f815260200160608152602001606081526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f81526020015f81526020015f151581526020015f151581525090565b604080518082019091525f808252602082015261115a600c6004878961283b565b6111639161292d565b7fffffffffffffffff0000000000000000000000000000000000000000000000001682526111956020600c878961283b565b61119e91612862565b60601c60a08301526111b460246020878961283b565b6111bd916128c8565b60e090811c908301526111d460286024878961283b565b6111dd916128c8565b60e01c60208201526111f3602c6028878961283b565b6111fc916128c8565b60e01c815290925090505b9250929050565b61123073ffffffffffffffffffffffffffffffffffffffff8516333086611afe565b6040517fa5977fbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff878116600483015285811660248301526044820185905267ffffffffffffffff80881660648401528416608483015263ffffffff831660a48301527f0000000000000000000000000000000000000000000000000000000000000000169063a5977fbb9060c4015f604051808303815f87803b1580156112e9575f5ffd5b505af11580156112fb573d5f5f3e3d5ffd5b50506040517fffffffffffffffff0000000000000000000000000000000000000000000000008a1681527fa077806f66785ea82e50e8f766774abda4273ecc52c93187184e0400e50de3219250602001905060405180910390a150505050505050565b5f5473ffffffffffffffffffffffffffffffffffffffff1633146113ae576040517fbe24598300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff81166113fb576040517f1beca37400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff82160361144a576040517fbf1ea9fb00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff831690811790915560405133907fed8889f560326eb138920d842192f0eb3dd22b4f139c87a2c57538e05bae1278905f90a350565b5f6114c960386024368461283b565b6114d291612862565b60601c90505f6114e660486038368461283b565b6114ef916129ce565b60801c905061151673ffffffffffffffffffffffffffffffffffffffff8316333084611afe565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001663a5977fbb6115606020600c365f61283b565b61156991612862565b60601c848461157c60246020365f61283b565b611585916128c8565b60e01c611596604c6048365f61283b565b61159f916128c8565b60e01c6115b06050604c365f61283b565b6115b9916128c8565b60405160e088811b7fffffffff0000000000000000000000000000000000000000000000000000000016825273ffffffffffffffffffffffffffffffffffffffff9788166004830152959096166024870152604486019390935267ffffffffffffffff9182166064860152166084840152901c60a482015260c4015f604051808303815f87803b15801561164b575f5ffd5b505af115801561165d573d5f5f3e3d5ffd5b507fa077806f66785ea82e50e8f766774abda4273ecc52c93187184e0400e50de32192506116939150600c90506004365f61283b565b61169c9161292d565b6040517fffffffffffffffff000000000000000000000000000000000000000000000000909116815260200160405180910390a15050565b6117686040518061014001604052805f815260200160608152602001606081526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f81526020015f81526020015f151581526020015f151581525090565b604080518082019091525f8082526020820152605083101561180c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f6461746120706173736564206973206e6f742074686520636f7272656374206c60448201527f656e6774680000000000000000000000000000000000000000000000000000006064820152608401610b01565b6118a06040518061014001604052805f815260200160608152602001606081526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f73ffffffffffffffffffffffffffffffffffffffff1681526020015f81526020015f81526020015f151581526020015f151581525090565b604080518082019091525f80825260208201526118c1600c6004878961283b565b6118ca9161292d565b7fffffffffffffffff0000000000000000000000000000000000000000000000001682526118fc6020600c878961283b565b61190591612862565b60601c60a083015261191b60246020878961283b565b611924916128c8565b60e090811c9083015261193b60386024878961283b565b61194491612862565b60601c608083015261195a60486038878961283b565b611963916129ce565b60801c60c0830152611979604c6048878961283b565b611982916128c8565b60e01c60208201526111f36050604c878961283b565b73ffffffffffffffffffffffffffffffffffffffff8316156119bf5761097c838383611bc0565b61097c8282611d3f565b73ffffffffffffffffffffffffffffffffffffffff83166119e957505050565b73ffffffffffffffffffffffffffffffffffffffff8216611a36576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa158015611aa9573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611acd9190612a33565b101561097c5761097c83837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611e65565b5f6040517f23b872dd00000000000000000000000000000000000000000000000000000000815284600482015283602482015282604482015260205f6064835f8a5af13d15601f3d1160015f511416171691505080611bb9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f5452414e534645525f46524f4d5f4641494c45440000000000000000000000006044820152606401610b01565b5050505050565b73ffffffffffffffffffffffffffffffffffffffff8316611c0d576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611c5a576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201525f9073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611cc4573d5f5f3e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611ce89190612a33565b905080821115611d2e576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610b01565b611d39848484611fd2565b50505050565b73ffffffffffffffffffffffffffffffffffffffff8216611d8c576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611dcf576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610b01565b5f8273ffffffffffffffffffffffffffffffffffffffff16826040515f6040518083038185875af1925050503d805f8114611e25576040519150601f19603f3d011682016040523d82523d5f602084013e611e2a565b606091505b505090508061097c576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040805173ffffffffffffffffffffffffffffffffffffffff8416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f095ea7b300000000000000000000000000000000000000000000000000000000179052611ef18482612028565b611d395760405173ffffffffffffffffffffffffffffffffffffffff841660248201525f6044820152611fc89085907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526120e3565b611d3984826120e3565b60405173ffffffffffffffffffffffffffffffffffffffff831660248201526044810182905261097c9084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611f46565b5f5f5f8473ffffffffffffffffffffffffffffffffffffffff16846040516120509190612a4a565b5f604051808303815f865af19150503d805f8114612089576040519150601f19603f3d011682016040523d82523d5f602084013e61208e565b606091505b50915091508180156120b85750805115806120b85750808060200190518101906120b89190612a60565b80156120da575073ffffffffffffffffffffffffffffffffffffffff85163b15155b95945050505050565b5f612144826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166121f09092919063ffffffff16565b905080515f14806121645750808060200190518101906121649190612a60565b61097c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610b01565b60606121fe84845f85612208565b90505b9392505050565b60608247101561229a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610b01565b5f5f8673ffffffffffffffffffffffffffffffffffffffff1685876040516122c29190612a4a565b5f6040518083038185875af1925050503d805f81146122fc576040519150601f19603f3d011682016040523d82523d5f602084013e612301565b606091505b50915091506123128783838761231f565b925050505b949350505050565b606083156123b45782515f036123ad5773ffffffffffffffffffffffffffffffffffffffff85163b6123ad576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610b01565b5081612317565b61231783838151156123c95781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b019190612627565b73ffffffffffffffffffffffffffffffffffffffff8116811461241e575f5ffd5b50565b803567ffffffffffffffff81168114612438575f5ffd5b919050565b803563ffffffff81168114612438575f5ffd5b5f5f5f5f5f60a08688031215612464575f5ffd5b853594506020860135612476816123fd565b935061248460408701612421565b925061249260608701612421565b91506124a06080870161243d565b90509295509295909350565b5f5f83601f8401126124bc575f5ffd5b50813567ffffffffffffffff8111156124d3575f5ffd5b602083019150836020828501011115611207575f5ffd5b5f5f5f5f5f5f60a087890312156124ff575f5ffd5b863561250a816123fd565b9550602087013567ffffffffffffffff811115612525575f5ffd5b61253189828a016124ac565b9096509450506040870135612545816123fd565b92506060870135612555816123fd565b95989497509295919493608090920135925050565b5f5f6020838503121561257b575f5ffd5b823567ffffffffffffffff811115612591575f5ffd5b8301601f810185136125a1575f5ffd5b803567ffffffffffffffff8111156125b7575f5ffd5b8560208260051b84010111156125cb575f5ffd5b6020919091019590945092505050565b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081525f61220160208301846125db565b5f5f5f5f5f5f5f60e0888a03121561264f575f5ffd5b873596506020880135612661816123fd565b955061266f60408901612421565b9450606088013561267f816123fd565b93506080880135925061269460a08901612421565b91506126a260c0890161243d565b905092959891949750929550565b5f5f602083850312156126c1575f5ffd5b823567ffffffffffffffff8111156126d7575f5ffd5b6126e3858286016124ac565b90969095509350505050565b60608152825160608201525f602084015161014060808401526127166101a08401826125db565b905060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffa08483030160a085015261275182826125db565b915050606085015161277b60c085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660e08501525060a085015173ffffffffffffffffffffffffffffffffffffffff81166101008501525060c085015161012084015260e0850151610140840152610100850151801515610160850152506101208501518015156101808501525090506122016020830184805163ffffffff16825260209081015167ffffffffffffffff16910152565b5f60208284031215612830575f5ffd5b8135612201816123fd565b5f5f85851115612849575f5ffd5b83861115612855575f5ffd5b5050820193919092039150565b80357fffffffffffffffffffffffffffffffffffffffff00000000000000000000000081169060148410156128c1577fffffffffffffffffffffffffffffffffffffffff000000000000000000000000808560140360031b1b82161691505b5092915050565b80357fffffffff0000000000000000000000000000000000000000000000000000000081169060048410156128c1577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505092915050565b80357fffffffffffffffff00000000000000000000000000000000000000000000000081169060088410156128c1577fffffffffffffffff000000000000000000000000000000000000000000000000808560080360031b1b82161691505092915050565b818382375f9101908152919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b80357fffffffffffffffffffffffffffffffff0000000000000000000000000000000081169060108410156128c1577fffffffffffffffffffffffffffffffff00000000000000000000000000000000808560100360031b1b82161691505092915050565b5f60208284031215612a43575f5ffd5b5051919050565b5f82518060208501845e5f920191825250919050565b5f60208284031215612a70575f5ffd5b81518015158114612201575f5ffdfea2646970667358221220659247fc05b02c28c543605fdf863e6a835d639b44b4e0843406a9d337d9830d64736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_cBridge";
            readonly type: "address";
            readonly internalType: "contract ICBridge";
        }, {
            readonly name: "_owner";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "receive";
        readonly stateMutability: "payable";
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
        readonly name: "decode_startBridgeTokensViaCBridgeERC20Packed";
        readonly inputs: readonly [{
            readonly name: "_data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
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
            readonly name: "";
            readonly type: "tuple";
            readonly internalType: "struct CBridgeFacet.CBridgeData";
            readonly components: readonly [{
                readonly name: "maxSlippage";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "nonce";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }];
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "decode_startBridgeTokensViaCBridgeNativePacked";
        readonly inputs: readonly [{
            readonly name: "_data";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly outputs: readonly [{
            readonly name: "";
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
            readonly name: "";
            readonly type: "tuple";
            readonly internalType: "struct CBridgeFacet.CBridgeData";
            readonly components: readonly [{
                readonly name: "maxSlippage";
                readonly type: "uint32";
                readonly internalType: "uint32";
            }, {
                readonly name: "nonce";
                readonly type: "uint64";
                readonly internalType: "uint64";
            }];
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "encode_startBridgeTokensViaCBridgeERC20Packed";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "sendingAssetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "nonce";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "maxSlippage";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "encode_startBridgeTokensViaCBridgeNativePacked";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "nonce";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "maxSlippage";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "bytes";
            readonly internalType: "bytes";
        }];
        readonly stateMutability: "pure";
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
        readonly name: "startBridgeTokensViaCBridgeERC20Min";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "sendingAssetId";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "nonce";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "maxSlippage";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaCBridgeERC20Packed";
        readonly inputs: readonly [];
        readonly outputs: readonly [];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaCBridgeNativeMin";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly internalType: "bytes32";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly internalType: "address";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "nonce";
            readonly type: "uint64";
            readonly internalType: "uint64";
        }, {
            readonly name: "maxSlippage";
            readonly type: "uint32";
            readonly internalType: "uint32";
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaCBridgeNativePacked";
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
        readonly type: "function";
        readonly name: "triggerRefund";
        readonly inputs: readonly [{
            readonly name: "_callTo";
            readonly type: "address";
            readonly internalType: "address payable";
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
        readonly type: "event";
        readonly name: "CBridgeRefund";
        readonly inputs: readonly [{
            readonly name: "_assetAddress";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "_to";
            readonly type: "address";
            readonly indexed: true;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiCBridgeTransfer";
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
        readonly name: "ContractCallNotAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ExternalCallFailed";
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
        readonly name: "NativeAssetTransferFailed";
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
        readonly name: "NoTransferToNullAddress";
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
    }];
    static createInterface(): CBridgeFacetPackedInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CBridgeFacetPacked;
}
export {};
